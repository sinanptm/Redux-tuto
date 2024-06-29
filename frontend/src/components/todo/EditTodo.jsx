import React from "react";
import { RiEditLine } from "react-icons/ri";
import Button from "../../assets/Button";


const EditTodo = ({ onEditTodo }) => {
  return (
    <Button color="cyan" size="md" onClick={onEditTodo}>
      <RiEditLine />
    </Button>
  );
};

export default EditTodo;
