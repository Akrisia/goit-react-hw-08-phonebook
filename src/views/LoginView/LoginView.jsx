import s from './LoginView.module.css';
import { useDispatch } from "react-redux";
import { logIn } from 'redux/auth/auth-operations';

export default function LoginView() {
    const dispatch = useDispatch();

    const onLoginUser = event => {
        event.preventDefault();
        const form = event.currentTarget;

        const user = {
            email: form.elements.email.value,
            password: form.elements.password.value,
        };

        dispatch(logIn(user));
        form.reset();
    };

    return (
    <form onSubmit={onLoginUser} className={s.form}>
      <label className={s.input}>
        Email
        <input
            type="email"
            name="email"
            placeholder="Email"
            required
        />
      </label>
      <label className={s.input}>
         Password
         <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
      </label>
      <button type="submit" className={s.button}>
        Sign in
      </button>
    </form>
    );
};