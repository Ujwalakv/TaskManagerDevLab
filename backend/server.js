const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// temporary in-memory data
let tasks = [
  { id: 1, text: "Learn Docker" },
  { id: 2, text: "Learn Jenkins" }
];

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// POST new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    text: req.body.text
  };

  tasks.push(newTask);
  res.json(newTask);
});

// serve React static build files
app.use(express.static(path.join(__dirname, "public")));

// fallback route for React
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});