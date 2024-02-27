import { useUserData } from "../hooks/useUserData";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";

const UserProfile = () => {
  const { userId } = useParams();
  const { data, error, isLoading } = useUserData(Number(userId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {data ? <UserCard {...data} /> : null}
      </div>
    </>
  );
};

export default UserProfile;
