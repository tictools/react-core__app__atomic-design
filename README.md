# 📚 Book Tracker App

A basic application to manage read books, created with [Vite](https://vitejs.dev/), [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/).

The main goal is to practise separation of concerns within the project structure, inspired by Domain-Driven Design (DDD) principles, although not applied formally.

## 🏗️ Project Structure

The project is divided into two main folders:

```
📦src
 ┣ 📂app       ← UI layer
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂BookCard
 ┃ ┃ ┣ 📂BookForm
 ┃ ┃ ┗ 📂BookList
 ┃ ┗ 📜App.tsx
 ┣ 📂core      ← Domain layer (not strict DDD, but inspired)
 ┃ ┣ 📂domain
 ┃ ┃ ┗ 📜book.ts
 ┃ ┣ 📂mappers
 ┃ ┃ ┗ 📜book.mapper.ts
 ┃ ┗ 📂requests
 ┃   ┗ 📜book.requests.ts
 ┣ 📜main.tsx
 ┗ 📜index.css
```

### `/app`: User Interface

Contains rendering and interaction logic, developed with React. Each component has its own encapsulated style using CSS Modules. The `BookForm` form is used for both adding and editing books.

### `/core`: Domain Logic

Inspired by DDD structure, but simplified:

- `domain/`: defines the main `Book` type, equivalent to the domain entity.
- `mappers/`: transforms data between formats (e.g., from backend to domain and vice versa). This would be the equivalent of the application layer.
- `requests/`: contains backend calls (`json-server`). This part would correspond to infrastructure.

## 🚀 How to Run the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the frontend

```bash
npm run dev
```

### 3. Start the backend with `json-server`

```bash
npm run backend
```

Make sure the `db.json` file exists at the root and contains initial data:

```json
{
  "books": []
}
```

## 🧱 Technologies Used

- Vite
- React
- TypeScript
- CSS Modules
- json-server (REST backend simulation)

## 🔍 Learning Objectives

- Separate concerns between domain logic and UI
- Build reusable components
- Use forms to create and edit entities
- Simulate a domain-oriented architecture without fully applying DDD

## 📂 Possible Future Improvements

- Add validation with value objects
- Introduce `zustand` or `tanstack-query` for state and data management
- Write tests with Vitest + Testing Library
- Deploy to Netlify or Vercel

## ✍️ Author

Initial project created for client-side development practice.
