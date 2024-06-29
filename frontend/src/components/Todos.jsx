import React, { useEffect, useState } from 'react';
import { useAddTodoMutation, useRemoveTodoMutation, useEditTodoMutation } from '../slices/apiSlice';
import AddTodo from '../components/AddTodo';
import RemoveTodo from '../components/RemoveTodo';
import EditTodo from '../components/EditTodo'; 
import axios from 'axios';
import Spinner from '../assets/Spinner';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [addTodo] = useAddTodoMutation();
    const [removeTodo] = useRemoveTodoMutation();
    const [editTodo] = useEditTodoMutation();
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

    const fetchTodos = async () => {
        try {
            const res = await axios.get('/api/todos');
            setTodos(res.data.todos);
            setLoading(false);
        } catch (error) {
            console.error(`Error in fetching todos: ${error}`);
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleAddTodo = async (text) => {
        try {
            const newTodo = await addTodo(text).unwrap();
            setTodos([...todos, newTodo.todo]);
        } catch (err) {
            console.error('Failed to add todo:', err);
        }
    };
    
    const handleRemoveTodo = async (id) => {
        try {
            await removeTodo(id);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (err) {
            console.error('Failed to remove todo:', err);
        }
    };
    
    const handleEditTodo = async (id) => {
        try {
            
        } catch (err) {
            console.error('Failed to edit todo:', err);
        }
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <AddTodo onAddTodo={handleAddTodo} />
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Todos</h2>
                {isLoading && <Spinner />}
                {error && <p className="text-red-500">{error}</p>}
                {todos.length !== 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {todos.map((todo, i) => (
                            <li key={todo.id || i} className="flex items-center justify-between py-4">
                                <span className="text-gray-700">{todo.text}</span>
                                <div className="flex space-x-2">
                                    <EditTodo id={todo.id} onEditTodo={handleEditTodo} />
                                    <RemoveTodo id={todo.id} onRemoveTodo={handleRemoveTodo} />
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No todos yet.</p>
                )}
            </div>
        </div>
    );
};

export default Todos;
