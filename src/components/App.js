import React, { Component, Suspense, lazy } from 'react';
import HeaderBar from './Header/HeaderBar/HeaderBar';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { getCurrentUser } from '../redux/auth/authOperations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LogInPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurUser();
  }

  render() {
    return (
      <>
        <HeaderBar />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/contacts" component={ContactsPage} />
            <PublicRoute
              exact
              restricted
              redirectTo="/contacts"
              path="/register"
              component={RegistrationPage}
            />
            <PublicRoute
              exact
              restricted
              redirectTo="/contacts"
              path="/login"
              component={LoginPage}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = { onGetCurUser: getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
