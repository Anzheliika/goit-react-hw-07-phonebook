import { Label, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact, getFilter } from 'redux/contactsSlice';

const Filter = () => {
  const filteredContact = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
   return dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filteredContact} onChange={changeFilter} />
    </Label>
  );
};

export default Filter;
