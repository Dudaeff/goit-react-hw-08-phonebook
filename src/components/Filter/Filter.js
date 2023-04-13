import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <label>
      Find contact by name
      <input type="text" onChange={handleFilterInput} />
    </label>
  );
};
