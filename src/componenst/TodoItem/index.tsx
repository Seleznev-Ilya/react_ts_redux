import React, { useState } from "react";
import InputMain from "../InputMain";

import { connect } from "react-redux";
import { toggleTodo } from "../../actions";
import { editTodo } from "../../actions";
import { deletTodo } from "../../actions";

import checkImg from "../../asset/images/check.svg";
import uncheckImg from "../../asset/images/uncheck.svg";
import crossImg from "../../asset/images/cross.svg";

interface Props {
  itemObj: any;
  dispatch: any;
}

const TodoItemTask = ({ itemObj, dispatch }: Props) => {
  const [edir, setEdit] = useState<boolean>(true);

  const toggleHendel = () => {
    dispatch(toggleTodo(itemObj.id));
  };

  const toggleTitleState = () => {
    setEdit(!edir);
  };

  const deleteHendler = () => {
    dispatch(deletTodo(itemObj.id));
  };

  return (
    <div className={`item underline ${edir ? "" : " focus"}`}>
      <div className="checkbox" onClick={toggleHendel}>
        <img
          src={`${itemObj.completed ? uncheckImg : checkImg}`}
          alt="checkImg"
        />
      </div>
      <div className="title">
        {edir ? (
          <p className="title_p" onDoubleClick={toggleTitleState}>
            {itemObj.payload}
          </p>
        ) : (
          <div>
            <InputMain
              placeHolder={""}
              action={editTodo}
              actionArguments={itemObj}
              toggleTitleState={toggleTitleState}
              deleteHendler={deleteHendler}
            />
          </div>
        )}
      </div>
      <div className="cross" onClick={deleteHendler}>
        <img src={crossImg} alt="crossImg" />
      </div>
    </div>
  );
};
const TodoItem = React.memo(TodoItemTask);
export default connect()(TodoItem);
