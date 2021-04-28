import React, { Component } from 'react';
import styles from '../components/Main/Form/Form.module.scss';
import { connect } from 'react-redux';
import { register } from '../redux/auth/authOperations';

class RegistrationPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    return (
      <div className={styles.authFormContainer}>
        <h1 className={styles.heading}>Please, register!</h1>
        <div>
          <form onSubmit={this.onHandleSubmit} autoComplete="off">
            <label>
              <p className={styles.subtitle}>Name</p>
              <input
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.onHandleChange}
                className={styles.input}
              />
            </label>
            <label>
              <p className={styles.subtitle}>Email</p>
              <input
                type="email"
                name="email"
                value={this.state.email}
                required
                onChange={this.onHandleChange}
                className={styles.input}
              />
            </label>
            <label>
              <p className={styles.subtitle}>Password</p>
              <input
                type="password"
                name="password"
                value={this.state.password}
                required
                onChange={this.onHandleChange}
                className={styles.input}
              />
            </label>

            <button type="submit" className={styles.btn}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { onRegister: register };

export default connect(null, mapDispatchToProps)(RegistrationPage);
