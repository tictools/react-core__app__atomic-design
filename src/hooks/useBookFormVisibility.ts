import { useState } from "react";

export const useBookFormVisibility = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return {
    isFormOpen,
    handleOpenForm,
    handleCloseForm,
    toggleForm,
  };
};
