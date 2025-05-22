import { type Book } from "../../../../core/Book/types";
import { useBookForm } from "../../../hooks/useBookForm/useBookForm";
import { BasicContainer } from "../../atoms/BasicContainer/BasicContainer";

import styles from "./BookForm.module.css";

interface BookFormProps {
  book?: Book | null;
  onSave: (book: Book) => void;
  onCloseForm: () => void;
}

export function BookForm({ book, onSave, onCloseForm }: BookFormProps) {
  const { formData, handleChange, handleSubmit } = useBookForm({
    book,
    onSave,
  });

  const handleOnSubmit = (event: React.FormEvent) => {
    onCloseForm();
    handleSubmit(event);
  };

  return (
    <BasicContainer customClassName={styles["formContainer"]}>
      <h2 className={styles["formTitle"]}>
        {book ? "Edit Book" : "Add New Book"}
      </h2>
      <form onSubmit={handleOnSubmit} className={styles["form"]}>
        <BasicContainer customClassName={styles["form__group"]}>
          <label htmlFor="title" className={styles["label"]}>
            Title
          </label>
          <input
            className={styles["form__input"]}
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </BasicContainer>
        <BasicContainer customClassName={styles["form__group"]}>
          <label htmlFor="author" className={styles["label"]}>
            Author
          </label>
          <input
            className={styles["form__input"]}
            name="authorFullName"
            id="author"
            value={formData.authorFullName}
            onChange={handleChange}
            placeholder="Enter author full name"
            required
          />
        </BasicContainer>
        <label htmlFor="year" className={styles["label"]}>
          Publication Year
        </label>
        <BasicContainer customClassName={styles["form__group"]}>
          <input
            className={styles["form__input"]}
            name="publishedYear"
            id="year"
            value={formData.publishedYear}
            placeholder="Enter publication year"
            onChange={handleChange}
            required
          />
        </BasicContainer>
        <BasicContainer customClassName={styles["form__group"]}>
          <label htmlFor="status" className={styles["label"]}>
            Reading Status
          </label>
          <select
            className={styles["form__select"]}
            name="currentStatus"
            id="status"
            value={formData.currentStatus}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="inProgress">In progress</option>
            <option value="read">Read</option>
          </select>
        </BasicContainer>

        <button className={styles["form__button"]} type="submit">
          {book ? "Update" : "Add book"}
        </button>
      </form>
    </BasicContainer>
  );
}
