import { useEffect, useState } from "react";
import type { Book } from "../types/Book";

const defaultBook: Omit<Book, "id"> = {
  title: "",
  author: "",
  year: "",
  status: "pending",
};

type UseBookFormParams = {
  book?: Book | null;
  onSave: (book: Book) => void;
};

export const useBookForm = ({ book, onSave }: UseBookFormParams) => {
  const [formData, setFormData] = useState<Omit<Book, "id">>(defaultBook);

  useEffect(() => {
    if (book) {
      setFormData((prevBook) => ({
        ...prevBook,
        title: book.title,
        author: book.author,
        year: book.year,
        status: book.status,
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
