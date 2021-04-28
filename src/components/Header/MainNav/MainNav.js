import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './MainNav.module.scss';

const MainNav = () => {
  const isAuth = useSelector(state => state.auth.token);
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink exact to="/" activeClassName={styles.activeLink}>
            Home
          </NavLink>
        </li>
        {isAuth && (
          <li className={styles.navItem}>
            <NavLink to="/contacts" activeClassName={styles.activeLink}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNav;
