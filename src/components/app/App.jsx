import css from './App.module.css';
import ContactForm from 'components/contactForm/';
import ContactList from 'components/contactList/';
import Filter from 'components/filter';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSliсe';
// import { selectContacts } from 'redux/selectors';

const App = () => {
  // const contacts = useSelector(selectContacts);
  // const dispatch = useDispatch();


  return (
    <div className={css['phonebook__container']}>
      <h1 className={css['phonebook__title']}>Phonebook</h1>
      <ContactForm />
      <h2 className={css['contacts__title']}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
