import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader';
import AppBar from './AppBar';
import s from './App.module.css';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/auth/auth-operations';
import { useEffect } from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <AppBar />
       <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' end element={<HomeView />}/>
          <Route path='/register' element={
            <PublicRoute navigateTo='/contacts'>
              <RegisterView />
            </PublicRoute>
          }/>
          <Route path='/login' element={
            <PublicRoute navigateTo='/contacts'>
              <LoginView />
            </PublicRoute>
          }/>
          <Route path='/contacts' element={
            <PrivateRoute>
              <ContactsView />
            </PrivateRoute>
          }/>
        </Routes>
      </Suspense>
    </div>
  );
};