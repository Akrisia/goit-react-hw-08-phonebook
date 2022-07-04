import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from '../redux/auth/auth-selectors';
import PropTypes from 'prop-types';

export default function PublicRoute({
    children,
    restricted = false,
    navigateTo = '/'
    }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
            {isLoggedIn && restricted ? <Navigate to={navigateTo} /> : children}
        </>
    );
};

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
    navigateTo: PropTypes.string,
    restricted: PropTypes.bool
};