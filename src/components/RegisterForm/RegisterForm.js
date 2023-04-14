import {
  FormList,
  FormListButton,
  FormListInput,
  FormListLabel,
} from 'components/CommonStyles/FormList.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
            Name:
            <FormListInput type="text" name="name" required />
          </FormListLabel>
        </li>
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

      <FormListButton type="submit">Signup</FormListButton>
    </form>
  );
};
