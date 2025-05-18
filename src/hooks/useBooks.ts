import { useEffect, useState } from "react";
import type { Book, BookApiDTO } from "../types/Book";

const initialBooks: Book[] = [];
const BASE_URL = "http://localhost:3000/books";

const updateCurrentBookIfMatched = ({
  currentBook,
  book,
}: {
  currentBook: Book;
  book: Book;
}) => (currentBook.id === book.id ? book : currentBook);

const checkBookExists = ({ books, book }: { books: Book[]; book: Book }) => {
  return books.some((currentBook) => currentBook.id === book.id);
};

const updateBooks = ({ book }: { book: Book }) => {
  return (books: Book[]) => {
    const bookExists = checkBookExists({
      books,
      book,
    });

    return bookExists
      ? books.map((currentBook) =>
          updateCurrentBookIfMatched({ currentBook, book })
        )
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
      .then((response) => response.json() as Promise<BookApiDTO[]>)
      .then((books) => {
        const booksToDomain: Book[] = books.map((book) => ({
          id: book.id,
          title: book.title,
          authorFullName: book.author_full_name,
          publishedYear: book.published_year,
          currentStatus: book.current_status,
        }));

        return setBooks(booksToDomain);
      })
      .catch((error) => console.error(`🚨 `, error));
  }, []);

  const handleSave = (bookToSave: Book) => {
    const urlToFetch = editingBook ? `${BASE_URL}/${bookToSave.id}` : BASE_URL;
    const method = editingBook ? "PATCH" : "POST";

    const bookDTO = {
      id: bookToSave.id,
      title: bookToSave.title,
      author_full_name: bookToSave.authorFullName,
      published_year: bookToSave.publishedYear,
      current_status: bookToSave.currentStatus,
    };

    globalThis
      .fetch(urlToFetch, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookDTO),
      })
      .then((response) => response.json())
      .then((book) => setBooks(updateBooks({ book })))
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
