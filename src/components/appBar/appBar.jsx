import { AuthNav } from 'components/authNav/authNav';
import { Navigation } from 'components/navigationS/navigation';
import { HeaderBar } from './appBar.styled';
import { UserMenu } from 'components/userMenu/userMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedin } from 'redux/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedin);
  return (
    <HeaderBar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderBar>
  );
};
