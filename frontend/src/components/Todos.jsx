import React, { useEffect, useState } from "react";
import { useAddTodoMutation, useRemoveTodoMutation, useEditTodoMutation } from "../slices/apiSlice";
import axios from "axios";
import AddTodo from "../components/todo/AddTodo";
import RemoveTodo from "../components/todo/RemoveTodo";
import EditTodo from "../components/todo/EditTodo";
import Spinner from "../assets/Spinner";
import EditModel from "../components/todo/EditModel";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [addTodo] = useAddTodoMutation();
  const [removeTodo] = useRemoveTodoMutation();
  const [editTodo] = useEditTodoMutation();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [editModel, setEditModel] = useState({ show: false, id: "" });

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api/todos");
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
      console.error("Failed to add todo:", err);
    }
  };

  const handleRemoveTodo = async (id) => {
    try {
      await removeTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Failed to remove todo:", err);
    }
  };

  const handleEditTodo = async ({ id, text }) => {
    try {
      await editTodo({ id, text });
      const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
      setTodos(updatedTodos);
    } catch (error) {
        throw new Error(error)
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold">Todo List</h2>
      </div>
      <AddTodo onAddTodo={handleAddTodo} />
      {editModel.show && <EditModel id={editModel.id} todos={todos} editTodo={handleEditTodo} setEditModel={setEditModel} />}
      <div className="mt-8">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : todos.length !== 0 ? (
          <ul className="divide-y divide-gray-200">
            {todos.map((todo, i) => (
              <li key={todo.id || i} className="flex items-center justify-between py-4">
                <span className="text-gray-800"> {todo.text}</span>
                <div className="flex space-x-4">
                  <EditTodo
                    onEditTodo={() => setEditModel({ show: true, id: todo.id })}
                  />
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