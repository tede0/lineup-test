import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { User } from "../types/User";

const UserComponent: React.FC = () => {
  const [userData, setUserData] = useState<User>();

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:8000/user/1");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return <>{userData && <UserCard {...userData} />}</>;
};

export default UserComponent;
