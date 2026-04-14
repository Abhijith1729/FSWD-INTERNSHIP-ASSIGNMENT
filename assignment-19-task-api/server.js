const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Task Data
let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Build API", completed: false }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Task API is running");
});

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET task by ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  res.json(task);
});

// POST create task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.json(newTask);
});

// PUT update task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (!task) {
    return res.status(404).send("Task not found");
  }

  task.title = req.body.title ?? task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  const exists = tasks.some(t => t.id == req.params.id);

  if (!exists) {
    return res.status(404).send("Task not found");
  }

  tasks = tasks.filter(t => t.id != req.params.id);

  res.send("Task deleted successfully");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});