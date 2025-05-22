import { Route, Routes } from "react-router-dom";
import App from "./pages/todos/App";
import Routers from "./pages/Routers";
import Login from "./pages/auth/login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<h1> 404 <a href="/" >back</a> </h1>} />
    </Routes>
  );
};
export default AppRouter;
