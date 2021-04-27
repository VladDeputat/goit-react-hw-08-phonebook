import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addContact } from '../../../redux/contacts/contactsOperations';
import { contactsSelector } from '../../../redux/contacts/contactsSelectors';
import styles from './Form.module.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.props.contacts.items.find(item => item.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
    } else {
      this.props.addContact(this.state);
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  nameFormId = uuidv4();
  numberFormId = uuidv4();

  render() {
    return (
      <div className={styles.formContainer}>
        <form onSubmit={this.onHandleSubmit} className={styles.form}>
          <label htmlFor={this.nameFormId}>
            <p className={styles.subtitle}>Name</p>
            <input
              id={this.nameFormId}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              autoComplete="off"
              required
              onChange={this.onHandleChange}
            />
          </label>
          <label htmlFor={this.numberFormId}>
            <p className={styles.subtitle}>Number</p>
            <input
              id={this.numberFormId}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
              autoComplete="off"
              onChange={this.onHandleChange}
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: contactsSelector(state),
});

export default connect(mapStateToProps, { addContact })(Form);
