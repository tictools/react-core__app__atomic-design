import { httpRequest } from "../../../services/httpService/httpRequest";
import type { Book } from "../types";
import { BOOKS_URL } from "./constants";

export const deleteBook = (id: Book["id"]) => {
  return httpRequest<void>({
    url: `${BOOKS_URL}/${id}`,
    method: "DELETE",
  });
};
