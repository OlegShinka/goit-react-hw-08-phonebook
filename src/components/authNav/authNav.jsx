import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: cadetblue;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/registration">Registration</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};
