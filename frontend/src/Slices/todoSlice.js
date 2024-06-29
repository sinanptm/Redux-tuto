import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: action.payload.id, text: action.payload.text });
      localStorage.setItem('todoList', JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
      localStorage.setItem('todoList', JSON.stringify(state.todos));
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
      localStorage.setItem('todoList', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, editTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
