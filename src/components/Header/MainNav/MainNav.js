import { NavLink } from 'react-router-dom';
import styles from '../HeaderBar.module.scss';

const MainNav = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink exact to="/" activeClassName={styles.activeLink}>
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/contacts" activeClassName={styles.activeLink}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
