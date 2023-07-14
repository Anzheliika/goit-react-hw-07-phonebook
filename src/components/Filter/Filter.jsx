import { Label, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';



const Filter = () => {
 const dispatch = useDispatch();

 const changeFilter = e => {
   const filterValue = e.target.value.toLowerCase();

   dispatch(filterContact(filterValue));
 };

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={changeFilter} />
    </Label>
  );
};

export default Filter;
