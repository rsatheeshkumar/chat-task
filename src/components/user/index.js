import UserList from "../user-list";
import SearchBox from "../search-user";
import "./index.scss";

const Users = ({ data, selectUser, onSearch }) => {
  return (
    <div className="user">
      <SearchBox placeholder="search users" handleChange={onSearch} />
      <UserList data={data} selectUser={selectUser} />
    </div>
  );
};

export default Users;
