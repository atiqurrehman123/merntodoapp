import express from "express";
import Todos from "../utils/todolist.js";
import TodoModal from "../models/todoModel.js";
// Router creation
const route=express.Router();

route.get("/userTodo", async(req, res) => {
    // res.send("User Todo list")
    const getTodolist=await TodoModal.find();
    res.send(getTodolist)
})
// User Post Todo
route.post("/userTodo", async(req, res) => {
    const {title}=req.body;
    if(!title){
        res.send("Plz enter title")
    }
    const AddnewItem=await TodoModal.create({title:title})


    res.send(AddnewItem)
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