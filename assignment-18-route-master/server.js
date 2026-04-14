const express = require("express");

const app = express();
const PORT = 3000;

// Sample Data
const books = [
  { id: 1, title: "JavaScript Basics" },
  { id: 2, title: "Node.js Guide" }
];

const authors = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" }
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

// Get All Authors
app.get("/authors", (req, res) => {
  res.json(authors);
});

// Get Author by ID
app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));

  if (!author) {
    return res.status(404).send("Author not found");
  }

  res.json(author);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});