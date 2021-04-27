import { NavLink } from 'react-router-dom';
import styles from '../HeaderBar.module.scss';

const AuthNav = () => {
  return (
    <div className={styles.authBox}>
      <ul className={styles.authNavList}>
        <li className={styles.navItem}>
          <NavLink to="/register" activeClassName={styles.activeLink}>
            Registration
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/login" activeClassName={styles.activeLink}>
            Log in
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
