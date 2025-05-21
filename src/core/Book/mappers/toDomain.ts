import type { Book, BookApiDTO } from "../types";

export const toDomain = (book: BookApiDTO): Book => ({
  id: book.id,
  title: book.title,
  authorFullName: book.author_full_name,
  publishedYear: book.published_year,
  currentStatus: book.current_status,
});
