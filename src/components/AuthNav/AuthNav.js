import { StyledLink } from 'components/CommonStyles/Links.styled';
import { AuthListStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthListStyled>
      <li>
        <StyledLink to="/login">Log In</StyledLink>
      </li>
      <li>
        <StyledLink to="/register">Registration</StyledLink>
      </li>
    </AuthListStyled>
  );
};
