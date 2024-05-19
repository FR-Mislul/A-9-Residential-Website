import { useContext } from "react";
import { AuthContext } from "../../Shared/AuthProvider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {

    const { user } = useContext(AuthContext);

    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.object,
}

export default PrivetRoute;