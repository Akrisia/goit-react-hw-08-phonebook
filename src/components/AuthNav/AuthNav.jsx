import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css';

const className = ({ isActive }) => (isActive ? s.active : s.link);

export default function AuthNav() {
    return (
        <nav className={s.list}>
            <NavLink to='/register' className={className}>Registration</NavLink>
            <NavLink to='/login' className={className}>Login</NavLink>
        </nav>
    )
};