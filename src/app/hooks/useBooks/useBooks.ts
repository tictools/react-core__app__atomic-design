import { useEffect, useState } from "react";
import { createBook } from "../../../core/Book/queries/createBook";
import { deleteBook } from "../../../core/Book/queries/deleteBook";
import { getAllBooks } from "../../../core/Book/queries/getAllBooks";
import { updateBook } from "../../../core/Book/queries/updateBook";
import type { Book } from "../../../core/Book/types";
import { filterOutBookById, upsertBookInList } from "./utils";

const initialBooks: Book[] = [];

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const handleEdit = (book: Book) => setEditingBook(book);

  const handleResetEdit = () => setEditingBook(null);

  useEffect(() => {
    getAllBooks()
      .then(setBooks)
      .catch((error) => console.error(`🚨 `, error));
  }, []);

  const handleSave = (bookToSave: Book) => {
    const httpSaveAction = editingBook ? updateBook : createBook;

    httpSaveAction(bookToSave)
      .then((bookToUpsert) => setBooks(upsertBookInList({ bookToUpsert })))
      .catch((error) => console.error(`🚨 `, error))
      .finally(() => setEditingBook(null));
  };

  const handleDelete = (bookId: Book["id"]) => {
    deleteBook(bookId)
      .then(() => setBooks(filterOutBookById(bookId)))
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
