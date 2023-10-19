import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <div>
            <h1>Loading data.</h1>
        </div>
    }
    if(user){
        return children;
    }

    return (
        <Navigate state={location.pathname} to="/signIn">
            
        </Navigate>
    );
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivetRoute;