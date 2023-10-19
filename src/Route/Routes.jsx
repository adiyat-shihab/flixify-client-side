import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Page/Home/Home.jsx";
import { Login } from "../Page/Login/Login.jsx";
import { Register } from "../Page/Register/Register.jsx";
import App from "../App.jsx";
import { PrivateLoginRoute } from "../Component/PrivateLoginRoute/PrivateLoginRoute.jsx";
import { AddProduct } from "../Page/Add Product/AddProduct.jsx";
import { PrivateRoute } from "../Component/Private Route/PrivateRoute.jsx";
import { BrandDetails } from "../Page/Brands/BrandDetails.jsx";
import { ProductDetails } from "../Page/Product Details/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://api.npoint.io/6e24854b3d6dc789248d"),
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
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/brandDetails/:name",
        element: (
          <PrivateRoute>
            <BrandDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export const Routes = () => {
  return <>{<RouterProvider router={router} />}</>;
};
