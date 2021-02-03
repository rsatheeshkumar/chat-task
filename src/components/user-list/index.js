import "./index.scss";

const getMessageText = (message, size) => {
  return `${message.slice(0, size)}...`;
};

const UserList = ({ data, selectUser }) => {
  return (
    <div className="user-list">
      {data.map((user) => (
        <div
          key={user.id}
          className="d-flex py-3 pointer"
          onClick={() => selectUser(user.id)}
        >
          <img className="user-img" src={user.picture} alt={user.name} />
          <div className="d-flex flex-column w-100">
            <span className="h6">{user.name}</span>
            <span>
              {getMessageText(user.chats[user.chats.length - 1].message, 45)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
