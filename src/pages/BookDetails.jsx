import { useParams, Link } from "react-router-dom";
// import booksData from "../data/books";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
 const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <h2 className="p-6">Book not found</h2>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <p className="text-lg mb-2">Author: {book.author}</p>
      <p className="mb-4">
        This is a sample description for the book.
      </p>
      <p className="mb-4">⭐ Rating: 4.5</p>

      <Link
        to="/books"
        className="text-blue-500 hover:underline"
      >
        ← Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;