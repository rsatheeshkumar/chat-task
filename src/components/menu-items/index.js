import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Items = ({ menu }) => {
  return (
    <div className="items">
      {menu.map((menu) => (
        <Link
          key={menu.path}
          to={`/dashboard/menu/${menu.path}`}
          className="items-list"
        >
          <span className="list">{menu.name}</span>
          <span className="list">{menu.count}</span>
        </Link>
      ))}
    </div>
  );
};

export default Items;
