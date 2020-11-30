import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStateFilter } from "../../actions";

interface Props {
  title: string;
}
const SubFilter = ({ title }: Props) => {
  const dispatch = useDispatch();

  const currentFilter = useSelector((store: any) => store.currentFilter);
  const handleSelect = useCallback(() => {
    dispatch(setStateFilter(title));
  }, [title]);
  switch (currentFilter) {
    case title:
      return (
        <div className="subFilter active" onClick={handleSelect}>
          <p>{title}</p>
        </div>
      );
    default:
      return (
        <div className="subFilter" onClick={handleSelect}>
          <p>{title}</p>
        </div>
      );
  }
};
export default SubFilter;
