import React from "react";
import { connect } from "react-redux";
import TodoItem from "../../componenst/TodoItem";
import { useSelector } from "react-redux";

interface Props {
  todoList: [
    key: {
      id: number;
      payload: string;
      completed: boolean;
    }
  ];
}
const TodoList = ({ todoList }: Props) => {
  const currentFilter = useSelector((store: any) => store.currentFilter);
  const storeFiltered = (store: any, currentState: string) => {
    let arrStore;
    currentState === "all"
      ? (arrStore = store)
      : (arrStore = store.filter((item: any) => {
          return item.completed === (currentState === "completed");
        }));

    return arrStore;
  };

  return (
    <div className="list">
      {storeFiltered(todoList, currentFilter).map((item: any) => (
        <TodoItem key={item.id} itemObj={item} />
      ))}
    </div>
  );
};
const mapStateToProps = (store: any) => {
  return {
    todoList: store.todoList,
  };
};
export default connect(mapStateToProps)(TodoList);
