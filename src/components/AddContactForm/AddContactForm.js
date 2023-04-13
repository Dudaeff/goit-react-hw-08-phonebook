import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from 'redux/contacts';
import { useContacts } from 'hooks';

export const AddContactForm = ({ closeOnSubmit }) => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const isAlreadyInContacts = contacts.find(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isAlreadyInContacts)
      return alert('This contact is already in your contacts.');

    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    closeOnSubmit();
    form.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

AddContactForm.propTypes = {
  closeOnSubmit: PropTypes.func.isRequired,
};
