import { useAuth } from 'hooks';
import {
  NavigationList,
  StyledLink,
} from 'components/Navigation/NavigationList.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </li>
      </NavigationList>
    </nav>
  );
};
