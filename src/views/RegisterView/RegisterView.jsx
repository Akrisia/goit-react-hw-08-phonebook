import s from './RegisterView.module.css';
import { useDispatch } from "react-redux";
import { register } from 'redux/auth/auth-operations';

export default function RegisterView() {
    const dispatch = useDispatch();

    const onAddUser = event => {
        event.preventDefault();
        const form = event.currentTarget;

        const user = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        };

        dispatch(register(user));
        form.reset();
    };

    return (
    <form onSubmit={onAddUser} className={s.form}>
      <label className={s.input}>
        Name
        <input
            type="text"
            name="name"
            placeholder="Name"
            required
        />
      </label>
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
        Sign up
      </button>
    </form>
    );
};