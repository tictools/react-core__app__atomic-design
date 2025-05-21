import type { Book } from "../../../../core/Book/types";

const bookExistsInList = ({
  books,
  bookToCheck,
}: {
  books: Book[];
  bookToCheck: Book;
}): boolean => {
  return books.some((book) => book.id === bookToCheck.id);
};

const replaceBookIfMatched =
  ({ bookToReplace }: { bookToReplace: Book }) =>
  (book: Book): Book => {
    return book.id === bookToReplace.id ? bookToReplace : book;
  };

export const upsertBookInList =
  ({ bookToUpsert }: { bookToUpsert: Book }) =>
  (books: Book[]): Book[] => {
    return bookExistsInList({ books, bookToCheck: bookToUpsert })
      ? books.map(replaceBookIfMatched({ bookToReplace: bookToUpsert }))
      : [...books, bookToUpsert];
  };

export const filterOutBookById = (idToRemove: Book["id"]) => (books: Book[]) =>
  books.filter((book) => book.id !== idToRemove);
