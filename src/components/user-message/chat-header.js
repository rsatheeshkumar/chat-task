import { AiOutlineStar } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";
import "./index.scss";

const ChatHeader = ({ user }) => {
  return (
    <span className="chat-header px-3 pt-5 pb-3">
      <h4>{user.name}</h4>
      <div className="d-flex">
        <span className="icon">
          <AiOutlineStar />
        </span>
        <span className="icon">
          <FiPhone />
        </span>
        <span className="icon">
          <BsCameraVideo />
        </span>
      </div>
    </span>
  );
};

export default ChatHeader;
