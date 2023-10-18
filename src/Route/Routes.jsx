import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Page/Home/Home.jsx";
import { Login } from "../Page/Login/Login.jsx";
import { Register } from "../Page/Register/Register.jsx";
import App from "../App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
export const Routes = () => {
  return <>{<RouterProvider router={router} />}</>;
};
