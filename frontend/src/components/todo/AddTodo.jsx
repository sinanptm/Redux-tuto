import React, { useState } from 'react';

const AddTodo = ({ onAddTodo, theme }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  const themeStyles = {
    input: theme === 'dark' ? 'bg-gray-700 text-gold' : 'bg-gray-200 text-black',
    button: theme === 'dark' ? 'bg-gold hover:bg-gold-dark text-black' : 'bg-black hover:bg-black-dark text-gold',
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-4 mb-8">
      <input
        type="text"
        className={`rounded-l-lg border-t mr-0 border-b border-l py-2 px-4 leading-tight focus:outline-none ${themeStyles.input}`}
        placeholder="Add a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className={`font-bold py-2 px-4 rounded-r-lg focus:outline-none ${themeStyles.button}`}
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
