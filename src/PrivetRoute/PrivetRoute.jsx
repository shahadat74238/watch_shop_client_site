import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { PropTypes } from 'prop-types';

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