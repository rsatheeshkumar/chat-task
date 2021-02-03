import React from "react";
import { ImWhatsapp } from "react-icons/im";
import { SiGmail, SiSlack } from "react-icons/si";
import { AiFillSkype } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./index.scss";

const Applications = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/menu">
          <span className="nav-image">
            <ImWhatsapp color="green" size="50" />
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/menu">
          <span className="nav-image">
            <SiGmail color="red" size="50" />
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/menu">
          <span className="nav-image">
            <AiFillSkype color="skyblue" size="50" />
          </span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/menu">
          <span className="nav-image">
            <SiSlack color="orangered" size="50" />
          </span>
        </Link>
      </li>
    </ul>
  );
};
export default Applications;
