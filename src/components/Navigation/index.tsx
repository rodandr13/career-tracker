import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>
          <NavLink
            className={`${styles.menuList__link} ${styles.menuList__link_type_vacancies}`}
            to="/"
          >
            Вакансии
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink
            className={`${styles.menuList__link} ${styles.menuList__link_type_workshop}`}
            to="/"
          >
            Мастерская
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink
            className={`${styles.menuList__link} ${styles.menuList__link_type_diary}`}
            to="/"
          >
            Дневник
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink
            className={({ isActive }) =>
              [
                `${styles.menuList__link} ${styles.menuList__link_type_progressTracker}`,
                isActive ? `${styles.menuList__link_active}` : '',
              ].join(' ')
            }
            to="/progress-tracker"
          >
            Трекер развития
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink
            className={`${styles.menuList__link} ${styles.menuList__link_type_contacts}`}
            to="/"
          >
            Контакты
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink
            className={`${styles.menuList__link} ${styles.menuList__link_type_feed}`}
            to="/"
          >
            Лента
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
