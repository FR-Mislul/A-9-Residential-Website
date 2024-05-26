import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    

    if(loading){
        return <span className="loading loading-spinner loading-lg h-screen my-auto ml-[50%]"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.object,
}

export default PrivetRoute;