import React, { useEffect, memo } from "react";
import { useSelector } from "react-redux";

import TodoReceiver from "../../componenst/TodoReceiver";
import TodoList from "../../componenst/TodoList";
import Footer from "../../componenst/Footer";
import "./style.scss";

const Main = () => {
  const todoList = useSelector((store: any) => store.todoList);

  return (
    <div className="todo__main">
      <TodoReceiver />
      <TodoList />
      {todoList.length ? <Footer /> : null}
    </div>
  );
};

export default memo(Main);
