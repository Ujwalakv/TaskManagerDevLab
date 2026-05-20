const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, text: "Learn Docker" },
  { id: 2, text: "Learn Jenkins" }
];

// get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// add task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    text: req.body.text
  };

  tasks.push(newTask);
  res.json(newTask);
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);