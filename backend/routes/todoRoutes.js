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
route.put("/userTodo/:id",async (req, res) => {
    const id = req.params.id;
    const {title,completed}=req.body

    const resdata = await TodoModal.findByIdAndUpdate(id,{title:title,completed:completed});
    res.send("ITem has been updated")

    // res.end(resdata)
   
})

// User Delete Todo
route.delete("/userTodo/:id", async(req, res) => {
    const itemId=req.params.id;
    const deleteTodoItem=await TodoModal.deleteOne({_id:itemId})
    res.send("Item delted from Todo record")
})
export default route;