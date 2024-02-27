import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
