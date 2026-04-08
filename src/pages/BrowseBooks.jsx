import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import booksData from "../data/books";

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  let filteredBooks = booksData;

  // filter by category
  if (category) {
    filteredBooks = filteredBooks.filter(
      (book) => book.category === category
    );
  }

  // search filter
  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Books</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or author..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Book List */}
      <div className="grid md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div key={book.id} className="border p-4 rounded shadow">
            <h2 className="font-bold">{book.title}</h2>
            <p>{book.author}</p>
            <p className="text-sm text-gray-500">{book.category}</p>

            <Link
              to={`/book/${book.id}`}
              className="text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;