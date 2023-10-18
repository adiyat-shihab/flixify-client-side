import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Page/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
export const Routes = () => {
  return <>{<RouterProvider router={router} />}</>;
};
