import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import LogInForm from '../components/Main/Form/LogInForm';

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
      <LogInForm
        email={this.state.email}
        password={this.state.password}
        onHandleSubmit={this.onHandleSubmit}
        onHandleChange={this.onHandleChange}
      />
    );
  }
}

const mapDispatchToProps = { onLogin: logIn };

export default connect(null, mapDispatchToProps)(LogInPage);
