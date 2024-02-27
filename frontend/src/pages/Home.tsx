import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col">
          <p>Specify ID in URL or click below</p>
          <Link
            to={"/1"}
            className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded"
          >
            Click
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
