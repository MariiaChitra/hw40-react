import Header from "./components/Header";
import Footer from "./components/Footer";
import LibraryStats from "./components/LibraryStats";
import BookList from "./components/BookList";
import { books } from "./data/books";
import "./App.css";

const genres = [
  "Fiction",
  "Educational",
  "Children's Literature",
  "Non-Fiction",
  "Popular Science"
];

function App() {
  return (
      <div className="app">
        <Header />

        <main className="container main-content">
          <LibraryStats books={books} />

          <section className="catalog-section">
            <h2>Full Book Catalog</h2>
            <BookList books={books} />
          </section>

          {genres.map((genre) => (
              <section key={genre} className="catalog-section">
                <h2>{genre}</h2>
                <BookList books={books} genre={genre} />
              </section>
          ))}
        </main>

        <Footer />
      </div>
  );
}

export default App;