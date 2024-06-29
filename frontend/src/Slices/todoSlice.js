import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: "Learn redux" },
        { id: 2, text: "Learn react" },
        { id: 3, text: "Learn tailwintcss" },
    ],
}

export const todSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text;
                }
                return todo
            })
        }
    }
})


export const { addTodo, editTodo, removeTodo } = todSlice.actions;
export default todSlice.reducer;