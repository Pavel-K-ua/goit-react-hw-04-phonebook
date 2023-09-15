import React from 'react';
import AddContacts from './AddContacts/AddContacts';
import { ContactList } from './ContactList/ContactList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { nanoid } from 'nanoid';
// import { Statistics, Notification } from './Statistics/Statistics.jsx';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    console.log(name, number);
    const contact = {
      name,
      id: nanoid(),
      number,
    };

    const item = this.state.contacts.find(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (item) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prev => ({
        contacts: [...prev.contacts, contact],
      }));
    }
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContactsArr = (data, filter) => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      window.localStorage.setItem('Contacts', JSON.stringify(contacts));
    }
  }

  componentDidMount() {
    const items = JSON.parse(window.localStorage.getItem('Contacts'));
    if (items?.length) {
      this.setState({ contacts: items });
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filteredContactsArr(contacts, filter);
    return (
      <>
        <h1>Phonebook</h1>
        <AddContacts addContact={this.handleAddContact} contacts={contacts} />
        <h2>Contacts</h2>
        <FilterContacts
          takeData={this.handleChangeFilter}
          filteredContacts={this.filteredContactsArr}
        />

        <ContactList
          contacts={filteredContacts}
          deleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
