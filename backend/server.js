import express from "express";
import cors from "cors"
import Todos from "./utils/todolist.js";
const app=express();

app.use(cors())
// endpoint
app.get("/",(req,res)=>{

    res.json(Todos)
})

//User Get Todo 
app.get("/userTodo",(req,res)=>{
    res.send("User Todo list")
})
// User Post Todo
app.post("/userTodo", (req, res) => {
    res.send("New Item added into Todo")
})

// User Update Todo
app.put("/userTodo", (req, res) => {
    res.send("Item has been Change")
})

// User Delete Todo
app.delete("/userTodo", (req, res) => {
    res.send("Item delted from Todo record")
})

const PORT=5000; //const 
app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})