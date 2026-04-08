import { Link } from "react-router-dom";
const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "History"];

const popularBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
];

function Home() {
  return (
    <div className="p-6">
      {/* Welcome */}
      <h1 className="text-3xl font-bold mb-4">Welcome to Online Library 📚</h1>

      {/* Categories */}
      <h2 className="text-xl font-semibold mb-2">Categories</h2>
      <div className="flex gap-3 mb-6">
        {categories.map((cat, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Popular Books */}
      <h2 className="text-xl font-semibold mb-3">Popular Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularBooks.map((book) => (
          <div
            key={book.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg"
          >
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>

            <Link
              to="/books"
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
