import styles from './LinkBack.module.scss';

function LinkBack() {
  return (
    <section className={styles.linkBack}>
      <a className={styles.linkBack__link} href="/">
        <img
          className={styles.linkBack__image}
          src="/src/assets/images/back_icon.svg"
          alt=""
        />
      </a>
    </section>
  );
}

export default LinkBack;
