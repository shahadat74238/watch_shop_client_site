import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <div>
        <span className="loading loading-dots loading-lg"></span>
          <h1 className="text-2xl text-center font-semibold">Loading data.....!</h1>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signIn"></Navigate>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
