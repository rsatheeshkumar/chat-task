import { IoMdNotificationsOutline } from "react-icons/io";
import "./index.scss";

const ProfileHeader = ({ name }) => {
  return (
    <span className="chat-header px-3 pt-5 pb-3">
      <span className="icon">
        <IoMdNotificationsOutline />
      </span>
      <span className="user-name">{name}</span>
    </span>
  );
};

export default ProfileHeader;
