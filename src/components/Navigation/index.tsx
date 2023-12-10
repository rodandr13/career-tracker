import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>
          <NavLink className={styles.menuList__link} to="/">
            Вакансии
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink className={styles.menuList__link} to="/">
            Мастерская
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink className={styles.menuList__link} to="/">
            Дневник
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink className={styles.menuList__link} to="/">
            Трекер развития
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink className={styles.menuList__link} to="/">
            Контакты
          </NavLink>
        </li>
        <li className={styles.menuList__item}>
          <NavLink className={styles.menuList__link} to="/">
            Лента
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
