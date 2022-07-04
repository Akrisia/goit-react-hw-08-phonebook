import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

const className = ({ isActive }) => (isActive ? s.active : s.link);

export default function Navigation() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <nav className={s.list}>
            <NavLink to='/' end className={className}>Home</NavLink>
            {isLoggedIn && <NavLink to='/contacts' className={className}>Contacts</NavLink>}
        </nav>
    )
};