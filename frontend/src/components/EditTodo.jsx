import React from "react";
import { RiEditLine } from "react-icons/ri";
import Button from "../assets/Button";


const EditTodo = ({ id, onEditTodo }) => {
  const handleEdit = () => {
    onEditTodo(id);
  };

  return (
    <Button color="cyan" size="md" onClick={handleEdit}>
      <RiEditLine />
    </Button>
  );
};

export default EditTodo;
