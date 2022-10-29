import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  // nameInputId = nanoid();
  // numberInputId = nanoid();

  //*  прописываем  внутри инпута   //
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  //*  слушатель событий по кнопке  //
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  //*  очищаем   сбрасываем   форму  //
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name"
            required
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Number"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
