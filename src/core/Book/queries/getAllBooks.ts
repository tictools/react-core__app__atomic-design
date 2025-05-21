import { httpRequest } from "../../../services/httpService/httpRequest";
import { toDomain } from "../mappers/toDomain";
import type { BookApiDTO } from "../types";
import { BOOKS_URL } from "./constants";

export const getAllBooks = () =>
  httpRequest<BookApiDTO[]>({ url: BOOKS_URL }).then((books) =>
    books.map(toDomain)
  );
