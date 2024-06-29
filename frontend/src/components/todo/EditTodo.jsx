import React from "react";
import { BiSolidEdit  } from "react-icons/bi";
import Button from "../../assets/Button";


const EditTodo = ({ onEditTodo }) => {
  return (
    <Button color="cyan" size="md" onClick={onEditTodo}>
      <BiSolidEdit  />
    </Button>
  );
};

export default EditTodo;
