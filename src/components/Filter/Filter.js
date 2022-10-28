import React, { Component } from 'react';

class Filter extends Component {
  state = {
    filter: '',
  };

  //*  прописываем  внутри инпута   //
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: [value] });
  };

  render() {
    return (
      <form>
        <label>
          Find contacts by name
          <input
            type="text"
            value={this.state.filter}
            onChange={this.handleChange}
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Filter"
            required
          />
        </label>
      </form>
    );
  }
}
export default Filter;
//*  очищаем   сбрасываем   форму  //
// reset = () => {
//   this.setState({ filter: '' });
// };
