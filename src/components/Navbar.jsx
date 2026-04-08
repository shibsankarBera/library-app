import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between mt-4">
      <h1 className="text-xl font-bold">Library</h1>

      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">
          Home
        </Link>
        <Link to="/books" className="hover:text-yellow-400">
          Browse Books
        </Link>
        <Link to="/add-book" className="hover:text-yellow-400">
          Add Book
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
