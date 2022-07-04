import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({children}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
            {isLoggedIn ? children : <Navigate to='/login' />}
        </>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};