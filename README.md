# Online Library System 📚

This is a simple online library system project built using React. The main idea of this project is to allow users to browse books, see details, and also add new books.

I made this project as part of my assignment using Vite, React Router, Redux Toolkit, and Tailwind CSS.

---

## 🔗 GitHub Repository

https://github.com/shibsankarBera/library-app.git

---

## 🚀 Features

* Home page with some book categories
* List of popular books
* Browse books with category filter
* Search books by title or author
* View book details
* Add new books using a form
* Newly added books show instantly
* 404 page for wrong routes

---

## 🛠️ Technologies Used

* React (Vite)
* React Router DOM
* Redux Toolkit
* Tailwind CSS

---

## 📁 Project Structure

```id="m7p2pw"
src/
 ├── components/
 │    └── Navbar.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── BrowseBooks.jsx
 │    ├── BookDetails.jsx
 │    ├── AddBook.jsx
 │    └── NotFound.jsx
 │
 ├── redux/
 │    ├── store.js
 │    └── bookSlice.js
 │
 ├── data/
 │    └── books.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## ⚙️ How to Run

```bash id="8g17tn"
git clone https://github.com/your-username/online-library-system.git
cd online-library-system
npm install
npm run dev
```

Then open the link shown in terminal (usually http://localhost:5173)

---

## 📌 Some Notes

* I used dummy data at first, then switched to Redux for managing books
* New books are added to the top of the list
* Search works for both title and author
* Routing is handled using React Router

---

##  Author

SHIBSANKAR BERA

---


