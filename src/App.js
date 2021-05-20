import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import { ToastContainer } from 'react-toastify';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import routes from './routes';
import Spinner from './components/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);
const Contacts = lazy(() =>
  import('./views/Contacts' /* webpackChunkName: "contacts" */),
);
const Register = lazy(() =>
  import('./views/Register' /* webpackChunkName: "register" */),
);
const Login = lazy(() =>
  import('./views/Login' /* webpackChunkName: "login" */),
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
            component={Register}
          />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
            component={Login}
          />
          <PrivateRoute
            path={routes.contacts}
            redirectTo={routes.login}
            component={Contacts}
          />
        </Switch>
      </Suspense>

      <ToastContainer />
    </>
  );
}
