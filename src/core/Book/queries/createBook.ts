import { httpRequest } from "../../../services/httpService/httpRequest";
import { toDomain } from "../mappers/toDomain";
import { toPersistence } from "../mappers/toPersistence";
import type { Book, BookApiDTO } from "../types";
import { BOOKS_URL } from "./constants";

export const createBook = (book: Book) => {
  const bookDTO = toPersistence(book);

  return httpRequest<BookApiDTO>({
    url: BOOKS_URL,
    method: "POST",
    body: bookDTO,
  }).then(toDomain);
};
