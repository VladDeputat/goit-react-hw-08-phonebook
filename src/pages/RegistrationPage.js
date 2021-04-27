import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  register,
  // logIn,
  // logOut,
  // getCurrentUser,
} from '../redux/auth/authOperations';

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
      <div>
        <h1>RegistrationPage</h1>
        <div>
          <form onSubmit={this.onHandleSubmit} autoComplete="off">
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.onHandleChange}
              />
            </label>
            <label>
              <p>Email</p>
              <input
                type="email"
                name="email"
                value={this.state.email}
                required
                onChange={this.onHandleChange}
              />
            </label>
            <label>
              <p>Password</p>
              <input
                type="text"
                name="password"
                value={this.state.password}
                required
                onChange={this.onHandleChange}
              />
            </label>

            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { onRegister: register };

export default connect(null, mapDispatchToProps)(RegistrationPage);
