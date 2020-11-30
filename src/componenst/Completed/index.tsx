import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { DeleteSelectedTodo } from "../../actions";
const CompletedComponent = () => {
  const dispatch = useDispatch();
  const deleteCompleted = () => {
    dispatch(DeleteSelectedTodo());
  };
  return (
    <p className="completed" onClick={deleteCompleted}>
      Completed items
    </p>
  );
};
const Completed = memo(CompletedComponent);

export default Completed;
