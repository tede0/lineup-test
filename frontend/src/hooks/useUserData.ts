import { useQuery } from "react-query";
import { User } from "../types/User";

const fetchUserData = async (userId: number): Promise<User> => {
  const response = await fetch(`http://localhost:8000/user/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useUserData = (userId: number) => {
  return useQuery<User, Error>(["user", userId], () => fetchUserData(userId));
};
