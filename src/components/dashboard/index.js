import { useState } from "react";

import Applications from "../applications";
import MenuItems from "../menu";
import Users from "../user";
import UserMessage from "../user-message";
import UserDetail from "../userdetails";

import { chatData } from "../../data/chat-data";

import "./index.scss";

const DashBoard = () => {
  const [data, setData] = useState(chatData);
  const [currentUser, setCurrentUser] = useState(null);

  const selectUser = (id) => {
    const user = data.filter((user) => user.id === id)[0];
    setCurrentUser(user);
  };

  const setDetails = (list) => {
    setData(list);
    setCurrentUser(list[0]);
  };

  const onSearch = (e) => {
    const filterValue = e.target.value;
    if (e.target.value === "") {
      setDetails(chatData);
    } else {
      const filteredList = chatData.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
      setDetails(filteredList);
    }
  };

  return (
    <div className="row">
      <div className="col-1 page-scroll">
        <Applications />
      </div>
      <div className="col-2 page-scroll">
        <MenuItems />
      </div>
      <div className="col-3 page-scroll">
        <Users data={data} selectUser={selectUser} onSearch={onSearch} />
      </div>
      <div className="col-4 page-scroll">
        <UserMessage user={currentUser} />
      </div>
      <div className="col-2 page-scroll">
        <UserDetail user={currentUser} />
      </div>
    </div>
  );
};

export default DashBoard;
