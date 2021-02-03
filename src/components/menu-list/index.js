import React from "react";
import Items from "../menu-items";
import { menusList } from "../../data/menu-data";

const MenuList = () => {
  return (
    <div>
      <Items menu={menusList.menu1} />
      <hr />
      <Items menu={menusList.menu2} />
      <hr />
      <Items menu={menusList.menu3} />
    </div>
  );
};

export default MenuList;
