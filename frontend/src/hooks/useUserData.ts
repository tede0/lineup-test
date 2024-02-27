import { useQuery } from "react-query";
import { User } from "../types/User";

const fetchUserData = async (userId: number): Promise<User> => {
  const baseUrl =
    import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
  const response = await fetch(`${baseUrl}/user/${userId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useUserData = (userId: number) => {
  return useQuery<User, Error>(["user", userId], () => fetchUserData(userId));
};
