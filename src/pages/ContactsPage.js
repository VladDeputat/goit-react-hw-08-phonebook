import Form from '../components/Main/Form/Form';
import ContactsList from '../components/Main/ContactsList/ContactsList';
import FilterContacts from '../components/Main/FilterContacts/FilterContacts';

const ContactsPage = () => {
  return (
    <div>
      <h1>ContactsPage</h1>
      <Form />
      <FilterContacts />
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
