import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import Todos from "./utils/todolist.js";
import todoroute from "./routes/todoRoutes.js";
const app=express();
// pass:umlUwPYP5tv3qvTj
// admin
const DatabseConnected=async()=>{
    try {
        let connected =await mongoose.connect('mongodb+srv://admin:umlUwPYP5tv3qvTj@cluster0.w1saqqf.mongodb.net/?retryWrites=true&w=majority');
        console.log("Database connected successfully")
    }
    catch (error) {
        console.log("err", error)
    }
}
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