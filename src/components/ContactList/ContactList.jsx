import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const ContactsList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
