import { NavLink } from 'react-router-dom';
import ProfileInfo from 'components/ProfileInfo';
import OfferBlock from 'components/OfferBlock';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ProfileInfo />
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
      <OfferBlock />
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>
          <NavLink
            className={`${styles.menuList__link} ${styles.menuList__link_type_vacation}`}
            to="/"
          >
            Уйти в отпуск
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink
            className={`${styles.menuList__link} ${styles.menuList__link_type_profile}`}
            to="/"
          >
            Инфо профиля
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink
            className={`${styles.menuList__link} ${styles.menuList__link_type_exit}`}
            to="/"
          >
            Выход
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
