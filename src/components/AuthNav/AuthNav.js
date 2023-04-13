import { StyledLink } from 'components/Navigation/NavigationList.styled';

export const AuthNav = () => {
  return (
    <ul>
      <li>
        <StyledLink to="/login">Log In</StyledLink>
      </li>
      <li>
        <StyledLink to="/register">Registration</StyledLink>
      </li>
    </ul>
  );
};
