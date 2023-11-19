import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedin } from 'redux/selectors';
//import styled from 'styled-components';
// const StyledLink = styled(NavLink)`
//   color: black;
//   margin-left: 35px;
//   text-decoration: none;
//   &.active {
//     color: cadetblue;
//   }
// `;

export const Navigation = () => {
  const isloggedIn = useSelector(selectIsLoggedin);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isloggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
