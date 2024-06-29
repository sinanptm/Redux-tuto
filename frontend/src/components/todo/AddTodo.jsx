import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAddTodo(text);
            setText('');
        }
    };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-4 mb-8">
      <input
        type="text"
        className="rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-gray-200 py-2 px-4 leading-tight focus:outline-none"
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg focus:outline-none"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
