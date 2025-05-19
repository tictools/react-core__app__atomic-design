import type { Book, BookApiDTO } from "../types";

const toDomain = ({ bookDTO }: { bookDTO: BookApiDTO }) => ({
  id: bookDTO.id,
  title: bookDTO.title,
  authorFullName: bookDTO.author_full_name,
  publishedYear: bookDTO.published_year,
  currentStatus: bookDTO.current_status,
});

const toPersistence = ({ book }: { book: Book }) => ({
  id: book.id,
  title: book.title,
  author_full_name: book.authorFullName,
  published_year: book.publishedYear,
  current_status: book.currentStatus,
});

export const bookMapper = {
  toDomain,
  toPersistence,
};
