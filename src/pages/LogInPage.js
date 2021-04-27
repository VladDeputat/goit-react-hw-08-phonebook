import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';

class LogInPage extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div>
        <h1>LoginPage</h1>
        <div>
          <form onSubmit={this.onHandleSubmit} autoComplete="off">
            <label>
              <p>Email deputat@mail.com john@gmail.com</p>
              <input
                type="email"
                name="email"
                value={this.state.email}
                required
                onChange={this.onHandleChange}
              />
            </label>
            <label>
              <p>Password deputat johnjohn</p>
              <input
                type="text"
                name="password"
                value={this.state.password}
                required
                onChange={this.onHandleChange}
              />
            </label>
            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { onLogin: logIn };

export default connect(null, mapDispatchToProps)(LogInPage);
