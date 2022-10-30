import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
export default function ContactList({ contacts, onDeleteContactItem }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {/* <p>
            {name} : {number}
          </p> */}
          <p>
            id ={id}
            name = {name}
            number = {number}
            onDeleteItem = {onDeleteContactItem}
          </p>
          <button type="button" onClick={() => onDeleteContactItem(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
