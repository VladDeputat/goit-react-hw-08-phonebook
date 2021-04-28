import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/authOperations';
import RegistrationForm from '../components/Main/Form/RegistrationForm';

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
      <RegistrationForm
        name={this.state.name}
        email={this.state.email}
        password={this.state.password}
        onHandleSubmit={this.onHandleSubmit}
        onHandleChange={this.onHandleChange}
      />
    );
  }
}

const mapDispatchToProps = { onRegister: register };

export default connect(null, mapDispatchToProps)(RegistrationPage);
