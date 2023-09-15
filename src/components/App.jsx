import React, { useEffect, useState } from 'react';
import AddContacts from './AddContacts/AddContacts';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('Contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');
  console.log(contacts);
  const handleAddContact = ({ name, number }) => {
    console.log(name, number);
    const contact = {
      name,
      id: nanoid(),
      number,
    };
    const item = contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (item) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, contact]);
    }
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContactsArr = (data, filter) => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = filteredContactsArr(contacts, filter);

  return (
    <>
      <h1>Phonebook</h1>
      <AddContacts addContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <FilterContacts
        takeData={handleChangeFilter}
        filteredContacts={filteredContactsArr}
      />

      <ContactList
        contacts={filteredContacts}
        deleteContact={handleDeleteContact}
      />
    </>
  );
};

export default App;
