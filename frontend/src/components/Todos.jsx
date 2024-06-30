import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [todos, setTodos] = useState([]);
  const theme = useSelector(state => state.theme.theme);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
        if (data !== undefined) {
          setTodos(data.todos);
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, [refetch, data]);

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
      dispatch(removeTodo({ id }));
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

  const themeStyles = {
    container: theme === 'dark' ? 'bg-black text-gold' : 'bg-white text-black',
    title: theme === 'dark' ? 'text-gold' : 'text-black',
    todoText: theme === 'dark' ? 'text-gold' : 'text-black',
    divider: theme === 'dark' ? 'divide-gray-700' : 'divide-gray-300',
    error: theme === 'dark' ? 'text-red-500' : 'text-red-700',
    emptyText: theme === 'dark' ? 'text-text-muted' : 'text-gray-500',
  };

  return (
    <div className={`container mx-auto px-9 py-10 h-screen ${themeStyles.container}`}>
      <div className="flex justify-center">
        <h2 className={`text-2xl font-bold ${themeStyles.title}`}>Todo List</h2>
      </div>
      <AddTodo onAddTodo={handleAddTodo} theme={theme} />
      {isLoading && <Spinner />}
      {error && <p className={themeStyles.error}>{error.message}</p>}
      {editModel.show && <EditModel id={editModel.id} todos={todos} editTodo={handleEditTodo} setEditModel={setEditModel} theme={theme} />}
      <div className="mt-8">
        {todos.length > 0 ? (
          <ul className={`divide-y ${themeStyles.divider}`}>
            {todos.map((todo, i) => (
              <li key={todo.id || i} className="flex items-center justify-between py-4">
                <span className={themeStyles.todoText}>{todo.text}</span>
                <div className="flex space-x-4">
                  <EditTodo onEditTodo={() => setEditModel({ show: true, id: todo.id })} theme={theme} />
                  <RemoveTodo id={todo.id} onRemoveTodo={handleRemoveTodo} theme={theme} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={themeStyles.emptyText}>No todos yet.</p>
        )}
      </div>
    </div>
  );
};

export default Todos;
