import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import Todos from "./utils/todolist.js";
import todoroute from "./routes/todoRoutes.js";
import DatabseConnected from "./config/db.js";
const app=express();
// pass:umlUwPYP5tv3qvTj
// admin

DatabseConnected()
app.use(cors())
app.use(express.json())

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