export type BookStatus = "pending" | "in progress" | "read";

export interface Book {
  id: number;
  title: string;
  author: string;
  year: string;
  status: BookStatus;
}
