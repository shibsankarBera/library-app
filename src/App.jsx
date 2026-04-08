import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600 text-center mt-10">
        Online Library System
      </h1>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/books" element={<h1 className="p-5">Browse Books</h1>} />
        <Route path="/add-book" element={<h1 className="p-5">Add Book</h1>} />
      </Routes>
     </BrowserRouter>
     
    </>
  );
}

export default App;
