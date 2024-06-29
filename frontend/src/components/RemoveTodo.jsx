import React from "react";
import { useDispatch } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";
import { removeTodo } from "../Slices/todoSlice";
import Button from "../assets/Button";

const RemoveTodo = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo({ id }));
  };

  return (
    <Button
      color="red" 
      size="md"
      onClick={handleRemove}
    >
      <RiDeleteBinLine />
    </Button>
  );
};

export default RemoveTodo;
