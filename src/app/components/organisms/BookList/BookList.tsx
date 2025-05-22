import type { Book } from "../../../../core/Book/types";
import { BasicContainer } from "../../atoms/BasicContainer/BasicContainer";
import { HeadingLevel3 } from "../../atoms/HeadingLevel3/HeadingLevel3";
import { TextBlock } from "../../atoms/TextBlock/TextBlock";
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
      <BasicContainer customClassName={styles["book__list--empty"]}>
        <HeadingLevel3>Your collection is empty</HeadingLevel3>
        <TextBlock>📚 Add your first book to get started!</TextBlock>
      </BasicContainer>
    );
  }

  return (
    <BasicContainer customClassName={styles["book__list"]}>
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
    </BasicContainer>
  );
}
