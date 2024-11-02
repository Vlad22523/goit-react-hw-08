import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/" state={location} />;
};
