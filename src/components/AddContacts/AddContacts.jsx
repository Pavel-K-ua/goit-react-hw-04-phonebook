import React from 'react';
import PropTypes from 'prop-types';

class AddContacts extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Name</h3>
        <input
          onChange={this.handleChangeInput}
          value={name}
          type="text"
          name="name"
          required
        />
        <input
          onChange={this.handleChangeInput}
          value={number}
          type="tel"
          name="number"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

AddContacts.propTypes = {
  addContact: PropTypes.func,
};

export default AddContacts;
