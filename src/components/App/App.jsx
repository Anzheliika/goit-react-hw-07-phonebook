import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Phonebook } from './App.styled';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #F65B5B',
            padding: '20px',
            color: '#F65B5B',
          },
        }}
      />
      <h2>Contacts</h2>
      <Filter />
      <ContactList
      />
    </Phonebook>
  );
}

export default App;
