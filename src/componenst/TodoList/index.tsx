import React, { memo } from "react";
import TodoItem from "../../componenst/TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const currentFilter = useSelector((store: any) => store.currentFilter);
  const todoList = useSelector((store: any) => store.todoList);
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

export default memo(TodoList);
