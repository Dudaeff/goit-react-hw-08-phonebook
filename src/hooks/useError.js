import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import { selectContactsError } from 'redux/contacts/selectors';

export const useError = () => {
  return {
    contactsError: useSelector(selectContactsError),
    authError: useSelector(selectAuthError),
  };
};
