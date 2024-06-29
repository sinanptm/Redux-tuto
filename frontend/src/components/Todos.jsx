import React from  'react';
import { useSelector } from 'react-redux';
import AddTodo from '../components/AddTodo.jsx';
import RemoveTodo from '../components/RemoveTodo';

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="container mx-auto px-4 py-8">
      <AddTodo />
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Todos</h2>
        {todos.length !== 0 ? (
          <ul className="divide-y divide-gray-200">
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center justify-between py-4">
                <span className="text-gray-700">{todo.text}</span>
                <RemoveTodo id={todo.id} />
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
