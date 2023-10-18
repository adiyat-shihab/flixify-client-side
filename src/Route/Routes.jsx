import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Page/Home/Home.jsx";
import { Login } from "../Page/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Login />,
  },
]);
export const Routes = () => {
  return <>{<RouterProvider router={router} />}</>;
};
