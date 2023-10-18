import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Page/Home/Home.jsx";
import { Login } from "../Page/Login/Login.jsx";
import { Register } from "../Page/Register/Register.jsx";
import App from "../App.jsx";
import { PrivateLoginRoute } from "../Component/PrivateLoginRoute/PrivateLoginRoute.jsx";

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
        element: (
          <PrivateLoginRoute>
            <Register />
          </PrivateLoginRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PrivateLoginRoute>
            <Login />
          </PrivateLoginRoute>
        ),
      },
    ],
  },
]);
export const Routes = () => {
  return <>{<RouterProvider router={router} />}</>;
};
