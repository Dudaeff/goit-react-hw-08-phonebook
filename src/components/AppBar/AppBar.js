import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';
import { Header, HeaderWrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <HeaderWrapper>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </HeaderWrapper>
    </Header>
  );
};
