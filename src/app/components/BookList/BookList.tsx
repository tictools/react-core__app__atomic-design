import type { Book } from "../../../core/Book/types/Book";
import { BookCard } from "../BookCard/BookCard";

import styles from "./BookList.module.css";

interface BookListProps {
  books: Book[];
  isFormOpen: boolean;
  onEdit: (book: Book) => void;
  onDelete: (bookId: Book["id"]) => void;
  onOpen: (book: Book) => void;
}

export function BookList({
  books,
  isFormOpen,
  onEdit,
  onDelete,
  onOpen,
}: BookListProps) {
  if (books.length === 0) {
    return (
      <div className={styles["book__list--empty"]}>
        <h3>Your collection is empty</h3>
        <p>📚 Add your first book to get started!</p>
      </div>
    );
  }

  return (
    <div className={styles["book__list"]}>
      {books.map((book) => (
        <BookCard
          book={book}
          isFormOpen={isFormOpen}
          handleOnDelete={onDelete}
          handleOnEdit={onEdit}
          handleOnOpen={onOpen}
          key={book.id}
        />
      ))}
    </div>
  );
}
