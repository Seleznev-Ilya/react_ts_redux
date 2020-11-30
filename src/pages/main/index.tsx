import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import { connect } from "react-redux";

import TodoReceiver from "../../componenst/TodoReceiver";
import TodoList from "../../componenst/TodoList";
import Footer from "../../componenst/Footer";
import "./style.scss";

interface Props {
  todoList: [
    key: {
      id: number;
      payload: string;
      completed: boolean;
    }
  ];
}

const Main = ({ todoList }: Props) => {
  const currentStore = useSelector((store: any) => store);

  useEffect(() => {
    localStorage.setItem("STORE", JSON.stringify(currentStore));
  }, [currentStore]);

  return (
    <div className="todo__main">
      <TodoReceiver />
      <TodoList />
      {todoList.length ? <Footer /> : null}
    </div>
  );
};
const mapStateToProps = (store: any) => {
  return {
    todoList: store.todoList,
  };
};
export default connect(mapStateToProps)(Main);
