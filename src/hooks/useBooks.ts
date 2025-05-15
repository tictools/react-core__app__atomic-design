import { useEffect, useState } from "react";
import type { Book } from "../types/Book";

const initialBooks: Book[] = [];
const BASE_URL = "http://localhost:3000/books";

const mapBookBasedOn = ({
  currentBook,
  book,
}: {
  currentBook: Book;
  book: Book;
}) => (currentBook.id === book.id ? book : currentBook);

const checkBookIncludedInPreviousBooks = ({
  books,
  book,
}: {
  books: Book[];
  book: Book;
}) => {
  return books.some((currentBook) => currentBook.id === book.id);
};

const updateBooksBasedOn = ({ book }: { book: Book }) => {
  return (books: Book[]) => {
    const isBookIncludedInPreviousBooks = checkBookIncludedInPreviousBooks({
      books,
      book,
    });

    return isBookIncludedInPreviousBooks
      ? books.map((currentBook) => mapBookBasedOn({ currentBook, book }))
      : [...books, book];
  };
};

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const handleEdit = (book: Book) => setEditingBook(book);
  const handleResetEdit = () => setEditingBook(null);
  useEffect(() => {
    globalThis
      .fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then((books) => setBooks(books))
      .catch((error) => console.error(`🚨 `, error));
  }, []);

  const handleSave = (editedBook: Book) => {
    const method = editingBook ? "PATCH" : "POST";

    const urlToFetch = editingBook ? `${BASE_URL}/${editedBook.id}` : BASE_URL;

    globalThis
      .fetch(urlToFetch, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedBook),
      })
      .then((response) => response.json())
      .then((book) => setBooks(updateBooksBasedOn({ book })))
      .catch((error) => console.error(`🚨 `, error))
      .finally(() => setEditingBook(null));
  };

  const handleDelete = (bookId: Book["id"]) => {
    globalThis
      .fetch(`${BASE_URL}/${bookId}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => {
        const filteredBooks = books.filter(
          (currentBook) => currentBook.id !== bookId
        );

        setBooks(filteredBooks);
      })
      .catch((error) => console.error(`🚨 `, error))
      .finally(() => setEditingBook(null));
  };

  return {
    books,
    handleDelete,
    handleEdit,
    handleResetEdit,
    handleSave,
    isEditingBook: editingBook,
  };
};
