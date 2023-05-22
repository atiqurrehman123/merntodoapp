import mongoose from "mongoose";

// Defining Schema
const TodoSchema=mongoose.Schema({
    title:{type:String,required:true},
    completed: {type:Boolean,default:false}
})

const TodoModal=mongoose.model("TodoModal",TodoSchema);

export default TodoModal;