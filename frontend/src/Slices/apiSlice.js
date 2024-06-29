import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: '/api'
});

export const apiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({
        addTodo: builder.mutation({
            query: (text) => ({
                url: '/todos',
                method: 'POST',
                body: { text },
            }),
        }),
        removeTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
        }),
        editTodo: builder.mutation({
            query: ({ id, text }) => ({
                url: `/todos/${id}`,
                method: 'PUT',
                body: { text },
            }),
        }),
    }),
});

export const {useAddTodoMutation,useRemoveTodoMutation,useEditTodoMutation,} = apiSlice;
