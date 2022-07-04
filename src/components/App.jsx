import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader';
import AppBar from './AppBar';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../redux/auth/auth-operations';
import { getIsGettingCurrentUser } from '../redux/auth/auth-selectors';
import { useEffect } from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));

export function App() {
  const dispatch = useDispatch();
  const isGettingCurrentUser = useSelector(getIsGettingCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isGettingCurrentUser &&
      <div className={s.container}>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' end element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            } />
            <Route path='/register' element={
              <PublicRoute navigateTo='/contacts' restricted>
                <RegisterView />
              </PublicRoute>
            } />
            <Route path='/login' element={
              <PublicRoute navigateTo='/contacts' restricted>
                <LoginView />
              </PublicRoute>
            } />
            <Route path='/contacts' element={
              <PrivateRoute>
                <ContactsView />
              </PrivateRoute>
            } />
          </Routes>
        </Suspense>
      </div>
  );
};