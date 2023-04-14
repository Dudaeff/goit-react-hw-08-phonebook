import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Hero, HeroTitle } from './Home.styled';

const HomePage = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <Hero>
      <HeroTitle>
        Welcome to Phonebook{user.name && ', '}
        {user.name && user.name}!
      </HeroTitle>
      {!isLoggedIn && <AuthNav />}
    </Hero>
  );
};

export default HomePage;
