import PropTypes from 'prop-types';
import { Button } from 'components/CommonStyles/Button.styled';
import {
  FormListInput,
  FormListLabel,
} from 'components/CommonStyles/FormList.styled';
import {
  ModalForm,
  ModalFormList,
} from 'components/CommonStyles/ModalForm.styled';

export const UpdateContactForm = ({ onSubmit }) => {
  return (
    <ModalForm onSubmit={onSubmit}>
      <ModalFormList>
        <li>
          <FormListLabel>
            Name:
            <FormListInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
            />
          </FormListLabel>
        </li>
        <li>
          <Button type="submit">Update contact</Button>
        </li>
      </ModalFormList>
    </ModalForm>
  );
};

UpdateContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
