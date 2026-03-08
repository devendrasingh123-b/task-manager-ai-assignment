// AI-generated, reviewed and modified

const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// in-memory database
let tasks = [];

let nextId = 1;

// -----------------------------------
// GET TASKS (with optional filtering)
// -----------------------------------

app.get("/tasks", (req, res) => {
  try {
    const { status } = req.query;

    let result = tasks;

    if (status === "completed") {
      result = tasks.filter((task) => task.completed === true);
    }

    if (status === "active") {
      result = tasks.filter((task) => task.completed === false);
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// -----------------------------------
// ADD TASK
// -----------------------------------

app.post("/tasks", (req, res) => {
  try {
    const { title, priority } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTask = {
      id: nextId++,
      title,
      priority: priority || "low",
      completed: false,
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// -----------------------------------
// UPDATE TASK
// -----------------------------------

app.patch("/tasks/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (req.body.completed !== undefined) {
      task.completed = req.body.completed;
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// -----------------------------------
// DELETE TASK
// -----------------------------------

app.delete("/tasks/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    const index = tasks.findIndex((t) => t.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Task not found" });
    }

    const deletedTask = tasks.splice(index, 1);

    res.json({
      message: "Task deleted successfully",
      deletedTask,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// -----------------------------------

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});