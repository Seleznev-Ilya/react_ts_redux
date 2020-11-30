import React from "react";
import { FILTER } from "../../constants/filter";
import SubFilter from "../SubFilter";

const FooterFilter = () => {
  return (
    <div className="filters">
      {Object.values(FILTER).map((title, index) => {
        return <SubFilter key={index} title={title} />;
      })}
    </div>
  );
};
const Filter = React.memo(FooterFilter);
export default Filter;
