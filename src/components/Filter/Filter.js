import React from 'react';

const Filter = ({ value, onChange }) => {
  // state = {
  //   filter: '',
  // };
  //*  очищаем   сбрасываем   форму  //
  // reset = () => {
  //   this.setState({ filter: '' });
  // };

  // changeFilter = e => {
  //     this.setState({ filter: e.currentTarget.value });
  // };
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChange}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Filter"
          required
        />
      </label>
    </form>
  );
};

export default Filter;
