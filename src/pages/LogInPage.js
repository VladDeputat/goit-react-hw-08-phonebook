import React, { Component } from 'react';
import styles from '../components/Main/Form/Form.module.scss';
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
      <div className={styles.authFormContainer}>
        <h1 className={styles.heading}>Please, log in.</h1>
        <div>
          <form onSubmit={this.onHandleSubmit} autoComplete="off">
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
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { onLogin: logIn };

export default connect(null, mapDispatchToProps)(LogInPage);
