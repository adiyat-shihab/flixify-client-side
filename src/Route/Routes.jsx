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
import { MyCart } from "../Page/My Cart/MyCart.jsx";
import { Error } from "../Page/Error Page/Error.jsx";
import { Update } from "../Page/Update/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        path: "/product/:id/:brand",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            {" "}
            <MyCart />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5001/products"),
      },
      {
        path: "/update/:id/:brand",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export const Routes = () => {
  return <>{<RouterProvider router={router} />}</>;
};
