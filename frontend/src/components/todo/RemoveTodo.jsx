import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "../../assets/Button";

const RemoveTodo = ({ id, onRemoveTodo }) => {
  const handleRemove = () => {
    onRemoveTodo(id);
  };

  return (
    <Button color="red" size="md" onClick={handleRemove}>
      <RiDeleteBinLine />
    </Button>
  );
};

export default RemoveTodo;
