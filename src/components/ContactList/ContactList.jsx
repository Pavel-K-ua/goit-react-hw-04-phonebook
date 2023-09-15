import React from 'react';
import { ContactItem } from './ContactItem';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            {...contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
