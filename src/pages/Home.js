import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';

const HomePage = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <section>
      <h1>Welcome to Phonebook, {user.name}!</h1>
      {!isLoggedIn && <AuthNav />}
    </section>
  );
};

export default HomePage;
