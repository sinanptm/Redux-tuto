import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ text: action.payload});
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text;
                }
                return todo;
            });
        },
        setTodos: (state, action) => {
            state.todos = action.payload;
        }
    }
});

export const { addTodo, editTodo, removeTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
