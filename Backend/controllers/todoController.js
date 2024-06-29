import asyncHandler from 'express-async-handler';
import Todo from '../models/todoModel.js'

const getTodos = asyncHandler(async (req, res) => {
  let todos = await Todo.find();
  todos = todos.map(todo=>{
    return {
      id:todo._id,
      text:todo.text,
    }
  })
  res.status(200).json({ todos });
});

const addTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
  });
  res.status(201).json({ message: 'Todo Added', todo });
});

const editTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }
  todo.text = req.body.text;
  await todo.save();
  res.status(200).json({ todo });
});

const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findOne({_id:req.params.id})
  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }
  await todo.deleteOne({_id:todo._id});
  res.status(200).json({ message: 'Todo deleted' });
});

export {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
};
