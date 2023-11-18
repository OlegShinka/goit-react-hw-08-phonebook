import { Route, Routes } from 'react-router-dom';
import { Registration } from 'pages/Registration/registration';
import { Login } from 'pages/Login/login';
import NotFound from 'pages/NotFound/notFound';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';
import { selectIsRefresh } from 'redux/selectors';
import { Layout } from './layout';
import { Home } from 'pages/Home/home';
import { RestrictedRoute } from './restrictedRoute';
import { PrivatRoute } from './privatRoute';
import Contacts from 'pages/Contacts/contacts';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefresh);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivatRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
