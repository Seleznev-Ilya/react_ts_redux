import React, { memo } from "react";

import QuantityActive from "../QuantityActive";
import Completed from "../Completed";
import Filter from "../Filter";

const FooterComponent = () => {
  return (
    <div className="footer">
      <QuantityActive />
      <Filter />
      <Completed />
    </div>
  );
};
const Footer = memo(FooterComponent);
export default Footer;
