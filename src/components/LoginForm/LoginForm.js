import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormList,
  FormListInput,
  FormListLabel,
  FormListButton,
} from 'components/CommonStyles/FormList.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormList>
        <li>
          <FormListLabel>
            Email:
            <FormListInput type="email" name="email" required />
          </FormListLabel>
        </li>
        <li>
          <FormListLabel>
            Password:
            <FormListInput type="password" name="password" required />
          </FormListLabel>
        </li>
      </FormList>
      <FormListButton type="submit">Log In</FormListButton>
    </form>
  );
};
