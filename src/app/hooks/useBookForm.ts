import { useEffect, useState } from "react";
import type { Book } from "../types/Book";

type BookWithOmmitedId = Omit<Book, "id">;

const defaultBook: BookWithOmmitedId = {
  title: "",
  authorFullName: "",
  publishedYear: "",
  currentStatus: "pending",
};

type UseBookFormParams = {
  book?: Book | null;
  onSave: (book: Book) => void;
};

export const useBookForm = ({ book, onSave }: UseBookFormParams) => {
  const [formData, setFormData] = useState<BookWithOmmitedId>(defaultBook);

  useEffect(() => {
    if (book) {
      setFormData((prevBook) => ({
        ...prevBook,
        title: book.title,
        authorFullName: book.authorFullName,
        publishedYear: book.publishedYear,
        currentStatus: book.currentStatus,
      }));
    }
  }, [book]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const bookToSave: Book = {
      ...(book ?? { id: Date.now() }),
      ...formData,
    };

    onSave(bookToSave);

    setFormData(defaultBook);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
