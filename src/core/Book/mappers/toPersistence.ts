import type { Book, BookApiDTO } from "../types";

export const toPersistence = (book: Book): BookApiDTO => ({
  id: book.id,
  title: book.title,
  author_full_name: book.authorFullName,
  published_year: book.publishedYear,
  current_status: book.currentStatus,
});
