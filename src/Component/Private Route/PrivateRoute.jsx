import { useContext } from "react";
import { authContext } from "../../Auth Provider/AuthContext.jsx";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
};
