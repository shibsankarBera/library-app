import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600 text-center mt-10">
        Online Library System
      </h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<h1 className="p-5">Add Book</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
