import ChatHeader from "./chat-header";
import ChatBody from "./chat-body";
import "./index.scss";

const UserMessage = ({ user }) => {
  if (!user) return null;
  return (
    <div className="user-message">
      <ChatHeader user={user} />
      <hr />
      <ChatBody chats={user.chats} />
    </div>
  );
};

export default UserMessage;
