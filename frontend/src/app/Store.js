import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice.js';
import { apiSlice } from '../slices/apiSlice.js';
import themReducer from '../slices/themeSlice.js';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        theme: themReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});
