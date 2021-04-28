import styles from './Form.module.scss';

const LogInForm = ({ onHandleSubmit, email, onHandleChange, password }) => {
  return (
    <div className={styles.authFormContainer}>
      <h1 className={styles.heading}>Please, log in.</h1>
      <div>
        <form onSubmit={onHandleSubmit} autoComplete="off">
          <label>
            <p className={styles.subtitle}>Email</p>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={onHandleChange}
              className={styles.input}
            />
          </label>
          <label>
            <p className={styles.subtitle}>Password</p>
            <input
              autoComplete="current-password"
              type="password"
              name="password"
              value={password}
              required
              onChange={onHandleChange}
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
};

export default LogInForm;
