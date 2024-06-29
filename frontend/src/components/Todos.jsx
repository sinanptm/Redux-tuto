import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAddTodoMutation, useRemoveTodoMutation, useEditTodoMutation, useGetTodosQuery } from "../slices/apiSlice";
import { addTodo, editTodo, removeTodo } from "../slices/todoSlice";
import AddTodo from "../components/todo/AddTodo";
import RemoveTodo from "../components/todo/RemoveTodo";
import EditTodo from "../components/todo/EditTodo";
import Spinner from "../assets/Spinner";
import EditModel from "../components/todo/EditModel";

const Todos = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch } = useGetTodosQuery();
  const [addTodoMutation] = useAddTodoMutation();
  const [removeTodoMutation] = useRemoveTodoMutation();
  const [editTodoMutation] = useEditTodoMutation();
  const [editModel, setEditModel] = useState({ show: false, id: "" });
  const [todos,setTodos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
        if( data!==undefined){
          setTodos(data.todos)
          console.log(data.todos);
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, [refetch,data]);

  const handleAddTodo = async (text) => {
    try {
      const newTodo = await addTodoMutation(text).unwrap();
      dispatch(addTodo(newTodo.todo));
      await refetch();
    } catch (err) {
      console.error("Failed to add todo:", err);
    }
  };

  const handleRemoveTodo = async (id) => {
    try {
      await removeTodoMutation(id);
      dispatch(removeTodo({ id }));      await refetch();
      await refetch();
    } catch (err) {
      console.error("Failed to remove todo:", err);
    }
  };

  const handleEditTodo = async ({ id, text }) => {
    try {
      await editTodoMutation({ id, text });
      dispatch(editTodo({ id, text }));
      await refetch();
    } catch (err) {
      console.error("Failed to edit todo:", err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold">Todo List</h2>
      </div>
      <AddTodo onAddTodo={handleAddTodo} />
      {isLoading&&<Spinner />}
      {error&&<p className="text-red-500">{error.message}</p>}
      {editModel.show && <EditModel id={editModel.id} todos={todos} editTodo={handleEditTodo} setEditModel={setEditModel} />}
      <div className="mt-8">
        {todos.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {todos.map((todo, i) => (
              <li key={todo.id || i} className="flex items-center justify-between py-4">
                <span className="text-gray-800">{todo.text}</span>
                <div className="flex space-x-4">
                  <EditTodo onEditTodo={() => setEditModel({ show: true, id: todo.id })} />
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
