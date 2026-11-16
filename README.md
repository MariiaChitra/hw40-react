# My Library — Digital Book Catalog

A React application built with Vite that displays a digital library catalog with genre-based filtering, library statistics, and conditional availability indicators.

This project demonstrates core React concepts without state hooks (`useState`, `useEffect`) or event handlers:

* Functional components and modular architecture
* Passing data via `props` and wrapper layouts using `children`
* Rendering and filtering arrays with `map()`, `filter()`, and unique `key` props
* Conditional rendering with `&&`, ternary operators, and `if` statements

## Features

* **Library Overview:** Displays the total number of titles in the catalog and how many are currently available for checkout.
* **Full Catalog & Genre Sections:** Renders the complete book collection alongside dedicated sections for *Fiction*, *Educational*, *Children's Literature*, *Non-Fiction*, and *Popular Science*.
* **Book Details:** Each book card displays the title, author, publication year, genre, and available copy count.
* **Status & Edition Badges:**
    * Automatically labels books published before 2000 as a **Classic Edition**.
    * Displays a green **Available** badge when copies are in stock (`copies > 0`) or a red **Out of stock** badge otherwise.
    * Handles empty genre categories gracefully with a fallback message.

## Project Structure

```text
my-library/
├── src/
│   ├── components/
│   │   ├── AvailabilityBadge.jsx
│   │   ├── BookCard.jsx
│   │   ├── BookList.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── LibraryStats.jsx
│   ├── data/
│   │   └── books.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) installed on your machine.

### Installation & Running Locally

1. **Navigate to the project directory:**

   ```bash
   cd my-library
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit the local URL shown in the terminal (typically `http://localhost:5173`).

### Build for Production

To create an optimized production bundle:

```bash
npm run build
```