import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import SetLoader from "../loader/SetLoader";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <SetLoader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRoutes;
