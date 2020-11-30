import React, { memo } from "react";
import { useSelector } from "react-redux";
const QuantityActiveNum = () => {
  const itemlist = useSelector((store: any) => store.todoList);

  const number = () => {
    return itemlist.filter((todo: any) => todo.completed === false).length;
  };
  return (
    <p className="quantity_items">
      <b>
        <span>{number()} &nbsp;</span>
      </b>
      items&nbsp;left
    </p>
  );
};
const QuantityActive = memo(QuantityActiveNum);
export default QuantityActive;
