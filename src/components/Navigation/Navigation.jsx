import { NavLink, Outlet } from 'react-router-dom';
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
  return (
    <div>
      <header>
        <nav>
          <StyledLink to="/contacts">CONTACTS</StyledLink>
          <StyledLink to="/registration">REGISTRATION</StyledLink>
          <StyledLink to="/login">LOGIN IN</StyledLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
export default Navigation;
