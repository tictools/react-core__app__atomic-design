import type { Book, BookStatus } from "../../../core/Book/types/Book";
import styles from "./BookCard.module.css";

interface BookCardProps {
  book: Book;
  isFormOpen: boolean;
  handleOnEdit: (book: Book) => void;
  handleOnDelete: (bookId: Book["id"]) => void;
  handleOnOpen: (book: Book) => void;
}

export function BookCard({
  book,
  isFormOpen,
  handleOnEdit,
  handleOnDelete,
  handleOnOpen,
}: BookCardProps) {
  const statusClassName: Record<string, string> = {
    read: styles["card__status--read"],
    inProgress: styles["card__status--in-progress"],
    pending: styles["card__status--pending"],
  };

  const getStatusClass = (status: string) => {
    return statusClassName[status] || "";
  };

  const formatStatus = (currentStatus: BookStatus) =>
    currentStatus === "inProgress" ? "in progress" : currentStatus;

  const handleEditClick = () => {
    handleOnOpen(book);
    handleOnEdit(book);
  };

  return (
    <div className={styles["card"]}>
      <div className={styles["card__header"]}>
        <div>
          <h3 className={styles["card__title"]}>{book.title}</h3>
          <p className={styles["card__author"]}>{book.authorFullName}</p>
        </div>
        <span className={styles["card__year"]}>{book.publishedYear}</span>
      </div>
      <div className={styles["card__content"]}>
        <span
          className={`${styles["card__status"]} ${getStatusClass(
            book.currentStatus
          )}`}
        >
          {formatStatus(book.currentStatus)}
        </span>
      </div>
      <div className={styles["card__footer"]}>
        <button
          className={`${styles["card__button"]} ${styles["card__button--edit"]}`}
          onClick={handleEditClick}
          disabled={isFormOpen}
        >
          Edit
        </button>
        <button
          className={`${styles["card__button"]} ${styles["card__button--delete"]}`}
          onClick={() => handleOnDelete(book.id)}
          disabled={isFormOpen}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
