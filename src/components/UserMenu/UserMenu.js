import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { NavigationList } from 'components/CommonStyles/NavigationList.styled';
import { UserEmailText } from './UserMenu.styled';
import { Button } from 'components/CommonStyles/Button.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <NavigationList>
      <li>
        <UserEmailText>Email: {user?.email}</UserEmailText>
      </li>
      <li>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </li>
    </NavigationList>
  );
};
