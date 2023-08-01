import Contact from 'components/contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {    
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  
    return (
      <>
        {contacts.length === 0 ? (
          <p>No contacts available</p>
        ) : (
          <ul>
            {contacts.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
                .map((contact) => (
                  <Contact contact = { contact } key={contact.id} />                
              ))}
          </ul>
        )}
      </>
    );
}



export default ContactList;
