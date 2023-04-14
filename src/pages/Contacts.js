import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '@mui/material';
import { useIsLoading } from 'hooks';
import { useError } from 'hooks';
import { fetchContacts } from 'redux/contacts';
import { ContactList } from '../components/ContactsList/ContactsList';
import { AddContactForm } from '../components/AddContactForm/AddContactForm';
import { Filter } from '../components/Filter/Filter';
import {
  AddContactBtn,
  ContactsActionsWrapper,
  ContactsTitle,
} from './Contacts.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useIsLoading();
  const error = useError();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    const onKeyClose = e => e.code === 'Escape' && setIsModalOpen(false);
    window.addEventListener('keydown', onKeyClose);

    return () => {
      window.removeEventListener('keydown', onKeyClose);
    };
  });

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ContactsActionsWrapper>
        <Filter />
        <AddContactBtn type="button" onClick={() => setIsModalOpen(true)}>
          Add new contact
        </AddContactBtn>
      </ContactsActionsWrapper>
      <ContactsTitle>Contacts</ContactsTitle>
      {error && <p>{error.massage}</p>}
      {isLoading ? <p>Loading...</p> : <ContactList />}
      <Modal open={isModalOpen} onClose={handleClose}>
        <>
          <AddContactForm closeOnSubmit={handleClose} />
        </>
      </Modal>
    </>
  );
};

export default ContactsPage;
