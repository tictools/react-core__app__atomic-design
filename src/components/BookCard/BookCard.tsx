import type { Book } from "../../types/Book";
import styles from "./BookCard.module.css";

interface BookCardProps {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (bookId: Book["id"]) => void;
  onOpen: (book: Book) => void;
}

export function BookCard({ book, onEdit, onDelete, onOpen }: BookCardProps) {
  const statusClassName: Record<string, string> = {
    read: styles["card__status--read"],
    ["in progress"]: styles["card__status--in-progress"],
    pending: styles["card__status--pending"],
  };

  const getStatusClass = (status: string) => {
    return statusClassName[status] || "";
  };

  const handleEditClick = () => {
    onOpen(book);
    onEdit(book);
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card__header"]}>
        <div>
          <h3 className={styles["card__title"]}>{book.title}</h3>
          <p className={styles["card__author"]}>{book.author}</p>
        </div>
        <span className={styles["card__year"]}>{book.year}</span>
      </div>
      <div className={styles["card__content"]}>
        <span
          className={`${styles["card__status"]} ${getStatusClass(book.status)}`}
        >
          {book.status}
        </span>
      </div>
      <div className={styles["card__footer"]}>
        <button
          className={styles["card__button--edit"]}
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className={styles["card__button--delete"]}
          onClick={() => onDelete(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
