import { User } from "../types/User";

const UserCard = (user: User) => {
  return (
    <div className="max-w-96 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <img
        className="w-full h-auto rounded-t-xl"
        src={user.avatar}
        alt="Image Description"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {user.first_name} {user.last_name}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
