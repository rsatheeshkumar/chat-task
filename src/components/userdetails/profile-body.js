import React from "react";

const ProfileBody = ({ user }) => {
  return (
    <div className="d-flex flex-column px-3">
      <img className="rounded-3" src={user.picture} alt={user.name} />
      <p className="px-5 my-2 ">{user.name}</p>
      <hr />
      <div className="d-flex flex-column">
        <span>Nick Name : {user.nickName}</span>
        <span>Tel : {user.phone}</span>
        <span>Dob : {user.dob}</span>
        <span>Gender : {user.gender}</span>
        <span>Language : {user.language}</span>
      </div>
    </div>
  );
};

export default ProfileBody;
