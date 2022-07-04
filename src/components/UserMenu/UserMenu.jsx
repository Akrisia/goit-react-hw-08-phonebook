import s from './UserMenu.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../images/defaultAvatar.png';
import { logOut } from '../../redux/auth/auth-operations';


export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const avatar = defaultAvatar;

    return (
        <div className={s.container}>
            <img src={avatar} alt='avatar' width='32' className={s.avatar} />
            <span className={s.name}>Hello, {name}</span>
            <button type='button' className={s.button} onClick={() => dispatch(logOut())}>
                Log out
            </button>
        </div>
    )
}