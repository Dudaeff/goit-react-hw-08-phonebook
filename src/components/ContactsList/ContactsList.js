import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useVisibleContacts } from 'hooks';
import { deleteContact } from 'redux/contacts';
import { updateContact } from 'redux/contacts/operations';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';
import {
  ContactsDeleteBtn,
  ContactWrapper,
  ContactsList,
  ContactsListItem,
  ContactsUpdateBtn,
  ContactsInfo,
} from './ContactsList.styled';

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

export const ContactList = () => {
  const dispatch = useDispatch();
  const [contactId, setContactId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visibleContacts = useVisibleContacts();

  useEffect(() => {
    const onKeyClose = e => e.code === 'Escape' && setIsModalOpen(false);
    window.addEventListener('keydown', onKeyClose);

    return () => {
      window.removeEventListener('keydown', onKeyClose);
    };
  });

  const handleUpdate = id => {
    setContactId(id);
    setIsModalOpen(true);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const isAlreadyInContacts = visibleContacts.find(
      contact =>
        contact.name.toLowerCase() === form.elements.name.value.toLowerCase()
    );

    if (isAlreadyInContacts) return notify();

    visibleContacts.forEach(({ id, name, number }) => {
      if (id === contactId) {
        dispatch(
          updateContact({
            id: contactId,
            name: form.elements.name.value || name,
            number: form.elements.number.value || number,
          })
        );
      }
    });

    form.reset();
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ContactsList>
        {visibleContacts.length > 0 ? (
          visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactsListItem key={id}>
                <ContactWrapper>
                  <ContactsInfo>{name}: </ContactsInfo>
                  <ContactsInfo>{number}</ContactsInfo>
                </ContactWrapper>
                <ContactWrapper>
                  <ContactsUpdateBtn
                    type="button"
                    onClick={() => handleUpdate(id)}
                  >
                    Update
                  </ContactsUpdateBtn>
                  <ContactsDeleteBtn
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </ContactsDeleteBtn>
                </ContactWrapper>
              </ContactsListItem>
            );
          })
        ) : (
          <li>
            <b>There is no contacts while.</b>
          </li>
        )}
      </ContactsList>

      <Modal open={isModalOpen} onClose={handleClose}>
        <>
          <UpdateContactForm onSubmit={handleSubmit} />
        </>
      </Modal>
    </>
  );
};
