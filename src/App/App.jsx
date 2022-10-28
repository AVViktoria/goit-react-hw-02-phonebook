// import { render } from "@testing-library/react";
import React, { Component } from 'react';
import ContactList from 'components/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';


// //*      Root      //
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  //*  удаляем контакт из инпута фильтра   //
  deleteContactItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  //*                              //
  formSubmitHandler = data => {
    console.log(data);
}
//*                              //

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <Filter/>
          <ContactList
            contacts={contacts}
            onDeleteContactItem={this.deleteContactItem}
          />
       
      </>
    );
  }
}

export default App;

//<div>
//  <h1>Phonebook</h1>
//  <ContactForm ... />
//
// <h2>Contacts</h2>
//  <Filter ... />
//  <ContactList ... />
//</div>


//   handleInputName = evt => {
//     console.log(evt.currentTarget.name);
//     this.setState({ name: evt.currentTarget.name });
//   };
// handleInputNumber = evt => {
//     console.log(evt.currentTarget.number);
//     this.setState({ number: evt.currentTarget.number });
// };
//   handleInputFilter = evt => {
//     console.log(evt.currentTarget.filter);
//     this.setState({ filter: evt.currentTarget.filter });
//   };