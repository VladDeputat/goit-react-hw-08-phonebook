import React, { Component } from 'react';
import HeaderBar from './Header/HeaderBar/HeaderBar';
import { Redirect, Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import ContactsPage from '../pages/ContactsPage';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LogInPage';
import { connect } from 'react-redux';
import { getCurrentUser } from '../redux/auth/authOperations';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurUser();
  }

  render() {
    return (
      <>
        <HeaderBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contacts" component={ContactsPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/login" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = { onGetCurUser: getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
