import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import { selectAllTodo } from "../../actions";

import Textinput from "../TextInput";
import selectImg from "../../asset/images/select.svg";
import unselectImg from "../../asset/images/unselect.svg";

const TodoReceiver = () => {
  const todoList = useSelector((store: any) => store.todoList);
  const dispatch = useDispatch();
  const [selectButton, setSelectButton] = useState(true);

  const selectButtonHendel = () => {
    setSelectButton(!selectButton);
    dispatch(selectAllTodo());
  };
  return (
    <div className="receiver">
      <img
        onClick={selectButtonHendel}
        className={`select ${todoList.length ? "" : " opacity"}`}
        src={selectButton ? unselectImg : selectImg}
        alt="selectImg"
      />
      <Textinput placeHolder={"Add task here"} action={addTodo} />
    </div>
  );
};

export default memo(TodoReceiver);
