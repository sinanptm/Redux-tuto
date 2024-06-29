import React, { useState } from "react";
import Button from "../../assets/Button";

const EditModel = ({ id, todos, editTodo, setEditModel }) => {
  const todoToEdit = todos.find((todo) => todo.id === id);
  const [input, setInput] = useState(todoToEdit.text);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await editTodo({ id, text: input });
      setEditModel({ show: false, id: "" });
    } catch (error) {
      console.error("Failed to edit todo:", error);
    }
  };

  const handleReset = () => {
    setInput(todoToEdit ? todoToEdit.text : "");
  };

  const handleCancel = () => {
    setEditModel({ show: false, id: "" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-lg backdrop-opacity-100">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
        <form onSubmit={handleEdit}>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex justify-end space-x-4">
            <Button color="cyan" size="md" onClick={handleReset}>
              Reset
            </Button>
            <Button color="red" size="md" onClick={handleCancel}>
              Cancel
            </Button>
            <Button color={"blue"} size={"md"} onClick={handleEdit}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModel;
