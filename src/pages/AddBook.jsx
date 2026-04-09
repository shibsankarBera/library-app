import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.author || !form.category) {
      alert("All fields are required");
      return;
    }

    dispatch(
      addBook({
        id: Date.now(),
        ...form,
      })
    );

    navigate("/books");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Author"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, author: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Category"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;