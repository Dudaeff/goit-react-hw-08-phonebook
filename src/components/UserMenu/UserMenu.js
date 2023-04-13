import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { NavigationList } from 'components/Navigation/NavigationList.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <NavigationList>
      <li>
        <p>{user.email}</p>
      </li>
      <li>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </li>
    </NavigationList>
  );
};
