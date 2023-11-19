import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedin } from 'redux/selectors';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 35px;
  text-decoration: none;
  &.active {
    color: cadetblue;
  }
`;

export const Navigation = () => {
  const isloggedIn = useSelector(selectIsLoggedin);
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isloggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
