import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, Text, Button } from './Contact.styled';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li>
        <Item>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Item>
      </li>
    </>
  );
};

export default Contact;
