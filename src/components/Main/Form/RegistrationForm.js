import styles from './Form.module.scss';

const RegistrationForm = ({
  name,
  email,
  password,
  onHandleSubmit,
  onHandleChange,
}) => {
  return (
    <div className={styles.authFormContainer}>
      <h1 className={styles.heading}>Please, register!</h1>
      <div>
        <form onSubmit={onHandleSubmit} autoComplete="off">
          <label>
            <p className={styles.subtitle}>Name</p>
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={onHandleChange}
              className={styles.input}
            />
          </label>
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
              type="password"
              name="password"
              value={password}
              required
              onChange={onHandleChange}
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
};

export default RegistrationForm;
