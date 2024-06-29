import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    text:{
        type:String,
        required:true
    }
}, {
    timestamps: true
});

const Todo = mongoose.model("Todo", todoSchema)


export default Todo