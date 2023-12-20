import { ContactCard } from 'components/ContactCard/ContactCard';
import React from 'react';
import { List, ListItem } from './ContactList.Style';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilterContact } from '../../redux/selectors';

export const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filterContact = useSelector(selectFilterContact).toLowerCase().trim();

  console.log(contacts)
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
