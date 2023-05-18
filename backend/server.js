import express from "express";
import cors from "cors"
import Todos from "./utils/todolist.js";
import todoroute from "./routes/todoRoutes.js";
const app=express();

app.use(cors())

// root endpoint
app.get("/",(req,res)=>{

    res.json(Todos)
})

//User Get Todo 

app.use("/",todoroute)

const PORT=5000; //const 
app.listen(PORT,()=>{
    console.log(`Server is runing on port ${PORT}`)
})