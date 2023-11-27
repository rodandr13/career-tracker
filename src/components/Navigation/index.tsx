import styles from './Navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menuList}>
        <li className={styles.menuList__item}>
          <a className={styles.menuList__link} href="/">
            Вакансии
          </a>
        </li>
        <li className={styles.menuList__item}>
          <a className={styles.menuList__link} href="/">
            Мастерская
          </a>
        </li>
        <li className={styles.menuList__item}>
          <a className={styles.menuList__link} href="/">
            Дневник
          </a>
        </li>
        <li className={styles.menuList__item}>
          <a className={styles.menuList__link} href="/">
            Трекер развития
          </a>
        </li>
        <li className={styles.menuList__item}>
          <a className={styles.menuList__link} href="/">
            Контакты
          </a>
        </li>
        <li className={styles.menuList__item}>
          <a className={styles.menuList__link} href="/">
            Лента
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
