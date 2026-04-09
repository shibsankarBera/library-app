import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";


function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Hide Navbar on unknown routes */}
      {location.pathname !== "/not-found" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}





function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600 text-center mt-10">
        Online Library System
      </h1>
      <BrowserRouter>
         <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
