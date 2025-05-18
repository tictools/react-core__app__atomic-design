import { BookForm } from "./components/BookForm/BookForm";
import { BookList } from "./components/BookList/BookList";
import { useBooks } from "./hooks/useBooks";

import styles from "./App.module.css";
import { useBookFormVisibility } from "./hooks/useBookFormVisibility";
function App() {
  const { isFormOpen, handleOpenForm, handleCloseForm, toggleForm } =
    useBookFormVisibility();
  const {
    books,
    handleSave,
    handleEdit,
    handleResetEdit,
    handleDelete,
    isEditingBook,
  } = useBooks();

  const handleToggleForm = () => {
    if (isEditingBook) handleResetEdit();
    toggleForm();
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>My Books Collection</h1>
        <button className={styles.addButton} onClick={handleToggleForm}>
          {isFormOpen ? "Cancel" : "Add New Book"}
        </button>
      </header>
      {isFormOpen && (
        <BookForm
          onSave={handleSave}
          book={isEditingBook}
          onCloseForm={handleCloseForm}
        />
      )}
      <BookList
        books={books}
        isFormOpen={isFormOpen}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onOpen={handleOpenForm}
      />
    </div>
  );
}

export default App;
