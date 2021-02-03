import ProfileHeader from "./profile-header";
import ProfileBody from "./profile-body";
import "./index.scss";

const UserDetail = ({ user }) => {
  if (!user) return null;
  return (
    <div className="user-detail">
      <ProfileHeader name={user.name} />
      <hr />
      <ProfileBody user={user} />
    </div>
  );
};

export default UserDetail;
