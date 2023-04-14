import { useAuth } from 'hooks';
import { NavigationList } from 'components/CommonStyles/NavigationList.styled';
import { StyledLink } from 'components/CommonStyles/Links.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        {isLoggedIn && (
          <li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </li>
        )}
      </NavigationList>
    </nav>
  );
};
