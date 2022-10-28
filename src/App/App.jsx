// import { render } from "@testing-library/react";
import React, {Component } from "react";




 // //*      Root      //
class App extends Component {
 state = {
  contacts: [],
  filter: '',
  name: '',
  number: ''
}


  render() {
    
    return (
      <>
        <h1>Phonebook</h1>
        <div class = "ContactForm">
        <div class = "itemName">
          <h2>Name</h2>
          <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name"
  required
/>
        </div>
        <div class = "itemNumber">
          <h2>Name</h2>
          <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        <button type = "button">Add contact</button>
          </div>
          </div>
        <div class = "contactsList">
          <h2>Contacts</h2>
        </div>


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