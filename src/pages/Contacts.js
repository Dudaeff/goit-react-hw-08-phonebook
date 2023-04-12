import { useIsLoading } from 'hooks';
import { useError } from 'hooks';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';

const ContactsPage = () => {
  const isLoading = useIsLoading();
  const error = useError();

  error && console.error(error);
  return (
    <>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <p>{error.massage}</p>}
      {isLoading ? <p>Loading...</p> : <ContactList />}
    </>
  );
};

export default ContactsPage;
