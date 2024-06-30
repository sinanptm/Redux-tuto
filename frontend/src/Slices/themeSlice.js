import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem("theme") ? localStorage.getItem('theme') : 'light'
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload.theme
            localStorage.setItem('theme', state.theme)
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer