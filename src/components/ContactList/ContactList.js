import { ContactCard } from 'components/ContactCard/ContactCard';
import React from 'react';
import { List, ListItem } from './ContactList.Style';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilterContact } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactSlice';


export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(selectContacts);
  
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchContacts());
  }, [dispatch]);

  const filterContact = useSelector(selectFilterContact).toLowerCase().trim();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContact)
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactCard contact={contact} onDeleteContact={onDeleteContact} />
        </ListItem>
      ))}
    </List>
  );
};
