import React, { useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, ...props }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
     children ? children : <Outlet />
  ) : (
    <Navigate to="/" />
  );
}

export default ProtectedRoute;
