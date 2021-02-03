import React from "react";

const ChatBody = ({ chats }) => {
  return (
    <div className="d-flex flex-column">
      {chats.map((chat) => {
        const isCurrentUser = chat.sendBy.name === "me";
        return (
          <div
            key={chat.id}
            className={`d-flex my-3 ${
              isCurrentUser ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="image-wrapper">
              <img
                className="profile-img"
                src={chat.sendBy.picture}
                alt={chat.sendBy.name}
              />
              <span>{chat.sendBy.received}</span>
            </div>
            <span
              className={`chat-message ${
                isCurrentUser ? "bg-success text-white" : "bg-white"
              }`}
            >
              {chat.message}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBody;
