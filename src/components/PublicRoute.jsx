import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import PropTypes from 'prop-types';

export default function PublicRoute({
    children,
    navigateTo
    }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
            {isLoggedIn ? <Navigate to={navigateTo} /> : children}
        </>
    );
};

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
    navigateTo: PropTypes.string,
};