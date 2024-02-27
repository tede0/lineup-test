import { User } from "../types/User";

const UserCard = (user: User) => {
  return (
    <div>
      {user ? (
        <div>
          <h1>{`${user.first_name} ${user.last_name}`}</h1>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserCard;
