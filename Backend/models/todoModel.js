import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text field'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model('Todo', todoSchema);

const noteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    required: true
  },
})

const Note = mongoose.model('Note',noteSchema)

export { Todo, Note };
