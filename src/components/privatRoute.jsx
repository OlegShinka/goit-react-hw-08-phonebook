import { useSelector } from 'react-redux';
import { selectIsLoggedin, selectIsRefresh } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export const PrivatRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  const isRefresh = useSelector(selectIsRefresh);

  const shouldRedirect = !isLoggedIn && !isRefresh;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
