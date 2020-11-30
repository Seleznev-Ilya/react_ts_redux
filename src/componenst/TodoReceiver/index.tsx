import React, { useState } from "react";

import { connect } from "react-redux";
import { addTodo } from "../../actions";
import { selectAllTodo } from "../../actions";

import InputMain from "../InputMain";

import selectImg from "../../asset/images/select.svg";
import unselectImg from "../../asset/images/unselect.svg";

interface Props {
  dispatch: any;
  todoList: [
    key: {
      id: number;
      payload: string;
      completed: boolean;
    }
  ];
}
const TodoReceiverComponent = ({ todoList, dispatch }: Props) => {
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
      <InputMain placeHolder={"Add task here"} action={addTodo} />
    </div>
  );
};
const mapStateToProps = (store: any) => {
  return {
    todoList: store.todoList,
  };
};
const TodoReceiver = React.memo(TodoReceiverComponent);
export default connect(mapStateToProps)(TodoReceiver);
