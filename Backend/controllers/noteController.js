import asyncHandler from "express-async-handler";
import { Note } from "../models/todoModel.js";

const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find();
    res.status(200).json({
        notes: notes.map(note => ({
            id: note._id,
            text: note.text,
        }))
    });
});

const addNote = asyncHandler(async(req,res)=>{
    const note = await Note.create({
        heading:req.body.heading,
        text:req.body.text
    });
    res.status(200).json(note);
});

const editNote = asyncHandler(async(req,res)=>{
    const note = await Note.findOne({_id:req.params.id});
    if(!note){
        res.status(404);
        throw new Error("Note Found");
    }
    note.text = req.body.text || note.text;
    note.heading = req.body.heading || note.heading;
    await note.save();
    res.status(200).json({note});
});

const deleteNote = asyncHandler(async(req,res)=>{
    const note = await Note.findOne({_id:req.params.id});
    if(!note){
        res.status(404);
        throw new Error("Note Found");
    }
    await note.deleteOne();
    res.status(200).json({message:"Note Deleted"});
});

export {
    getNotes,
    addNote,
    deleteNote,
    editNote
}