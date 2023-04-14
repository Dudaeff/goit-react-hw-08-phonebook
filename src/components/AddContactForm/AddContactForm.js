import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContact } from 'redux/contacts';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContacts } from 'hooks';
import {
  ModalForm,
  ModalFormList,
} from 'components/CommonStyles/ModalForm.styled';
import {
  FormListInput,
  FormListLabel,
} from 'components/CommonStyles/FormList.styled';
import { Button } from 'components/CommonStyles/Button.styled';

const notify = () =>
  toast('This contact is already in your contacts!', {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

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

    if (isAlreadyInContacts) return notify();

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
    <ModalForm onSubmit={handleFormSubmit}>
      <ModalFormList>
        <li>
          <FormListLabel>
            Name:
            <FormListInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormListLabel>
        </li>
        <li>
          <FormListLabel>
            Number:
            <FormListInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormListLabel>
        </li>
        <li>
          <Button type="submit">Add contact</Button>
        </li>
      </ModalFormList>
    </ModalForm>
  );
};

AddContactForm.propTypes = {
  closeOnSubmit: PropTypes.func.isRequired,
};
