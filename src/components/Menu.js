import React, { useState } from "react";
import Category from "./Category";
import Categoryitems from "./Categoryitems";

const Menu = () => {
  const [categoryClickedIndex, setCategoryClickedIndex] = useState(null);
  const onClick = (index) => setCategoryClickedIndex(index);

  return (
    <div>
      <Category onClick={onClick} />
      <Categoryitems categorySelectedIndex={categoryClickedIndex} />
    </div>
  );
};

export default Menu;
