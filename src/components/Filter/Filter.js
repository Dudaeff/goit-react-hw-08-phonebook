import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filter/filterSlice';
import { FilterInput, FilterLabel, FilterWrapper } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contact by name</FilterLabel>
      <FilterInput
        placeholder="Type name.."
        type="text"
        id="filter"
        onChange={handleFilterInput}
      />
    </FilterWrapper>
  );
};
