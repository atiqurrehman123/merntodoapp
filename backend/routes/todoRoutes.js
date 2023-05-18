import express from "express";
import Todos from "../utils/todolist.js";
// Router creation
const route=express.Router();

route.get("/userTodo", (req, res) => {
    // res.send("User Todo list")
    res.json(Todos)
})
// User Post Todo
route.post("/userTodo", (req, res) => {
    res.send("New Item added into Todo")
})

// User Update Todo
route.put("/userTodo", (req, res) => {
    res.send("Item has been Change")
})

// User Delete Todo
route.delete("/userTodo", (req, res) => {
    res.send("Item delted from Todo record")
})
export default route;