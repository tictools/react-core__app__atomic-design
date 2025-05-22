import type { Book } from "../../../../core/Book/types";

import { BasicContainer } from "../../atoms/BasicContainer/BasicContainer";
import { Button } from "../../atoms/Button/Button";
import { HeadingLevel3 } from "../../atoms/HeadingLevel3/HeadingLevel3";
import { InlineText } from "../../atoms/InlineText/InlineText";
import { TextBlock } from "../../atoms/TextBlock/TextBlock";
import { CardStatus } from "../../mollecules/CardStatus/CardStatus";

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
  const handleEditClick = () => {
    handleOnOpen(book);
    handleOnEdit(book);
  };

  return (
    <BasicContainer customClassName={styles["card"]}>
      <BasicContainer customClassName={styles["card__header"]}>
        <BasicContainer>
          <HeadingLevel3 customClassName={styles["card__title"]}>
            {book.title}
          </HeadingLevel3>
          <TextBlock customClassName={styles["card__author"]}>
            {book.authorFullName}
          </TextBlock>
        </BasicContainer>
        <InlineText customClassName={styles["card__year"]}>
          {book.publishedYear}
        </InlineText>
      </BasicContainer>
      <CardStatus
        customClassName={styles["card__content"]}
        status={book.currentStatus}
      />
      <BasicContainer customClassName={styles["card__footer"]}>
        <Button
          onClick={handleEditClick}
          variant="secondary"
          disabled={isFormOpen}
        >
          Edit
        </Button>
        <Button
          onClick={() => handleOnDelete(book.id)}
          variant="danger"
          disabled={isFormOpen}
        >
          Delete
        </Button>
      </BasicContainer>
    </BasicContainer>
  );
}
