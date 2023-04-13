import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationList = styled.ul`
  @media screen and (min-width: 480px) {
    display: flex;
    column-gap: 10px;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: black;
  transition: color 250ms ease-out;

  &:hover {
    color: orangered;
  }

  &.active {
    color: orangered;
  }
`;

export { NavigationList, StyledLink };
