const express = require("express");

const app = express();
const PORT = 3000;

// Middleware (IMPORTANT for POST)
app.use(express.json());

// Sample Data
let books = [
  { id: 1, title: "JavaScript Basics" },
  { id: 2, title: "Node.js Guide" }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Bookstore API");
});

// Get All Books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get Book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));

  if (!book) {
    return res.status(404).send("Book not found");
  }

  res.json(book);
});

// ➕ Add New Book (POST)
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// ❌ Delete Book
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const bookExists = books.some(b => b.id === bookId);

  if (!bookExists) {
    return res.status(404).send("Book not found");
  }

  books = books.filter(b => b.id !== bookId);

  res.send("Book deleted successfully");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});