import Navigation from './Navigation';
import AuthNav from './AuthNav';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <div className={s.list}>
          <Navigation />
          <AuthNav />
    </div>
  );
};