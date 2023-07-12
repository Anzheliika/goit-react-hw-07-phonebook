import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contactsSlice';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filteredContact = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredContact.toLowerCase())
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return <Contact key={nanoid()} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
