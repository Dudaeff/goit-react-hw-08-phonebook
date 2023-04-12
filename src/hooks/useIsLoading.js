import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

export const useIsLoading = () => useSelector(selectIsLoading);
