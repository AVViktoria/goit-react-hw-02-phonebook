import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

const ContactList = ({ contacts, onDeleteContactItem }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteContactItem(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
