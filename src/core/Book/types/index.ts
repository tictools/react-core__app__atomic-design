export type BookStatus = "pending" | "inProgress" | "read";

export interface Book {
  id: number;
  title: string;
  authorFullName: string;
  publishedYear: string;
  currentStatus: BookStatus;
}

export interface BookApiDTO {
  id: number;
  title: string;
  author_full_name: string;
  published_year: string;
  current_status: BookStatus;
}
