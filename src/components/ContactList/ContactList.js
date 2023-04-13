import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '@mui/material';
import { useVisibleContacts } from 'hooks';
import { deleteContact } from 'redux/contacts';
import { updateContact } from 'redux/contacts/operations';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';

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

    if (isAlreadyInContacts)
      return alert('This contact is already in your contacts.');

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
      <ul>
        {visibleContacts &&
          visibleContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>{name}: </p>
                <p>{number}</p>
                <button type="button" onClick={() => handleUpdate(id)}>
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
      <Modal open={isModalOpen} onClose={handleClose}>
        <>
          <UpdateContactForm onSubmit={handleSubmit} />
        </>
      </Modal>
    </>
  );
};
