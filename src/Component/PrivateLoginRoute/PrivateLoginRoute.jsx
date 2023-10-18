import { useContext } from "react";
import { authContext } from "../../Auth Provider/AuthContext.jsx";
import { Navigate } from "react-router-dom";

export const PrivateLoginRoute = ({ children }) => {
  const { user } = useContext(authContext);
  if (!user) {
    return children;
  }
  return <Navigate to={"/"} />;
};
