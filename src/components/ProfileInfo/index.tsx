import styles from './ProfileInfo.module.scss';

function ProfileInfo() {
  return (
    <section className={styles.profileInfo}>
      <header className={styles.profileInfo__header}>
        <img
          className={styles.profileInfo__avatar}
          src="/src/assets/images/no-photo-icon.png"
          alt=""
        />
        <h3 className={styles.profileInfo__title}>Виталий</h3>
      </header>
      <div className={styles.profileInfo__flexContainer}>
        <div className={styles.profileInfo__stageContainer}>
          <h4 className={styles.profileInfo__stageTitle}>Текущий этап</h4>
          <a className={styles.profileInfo__stageLink} href="/">
            Акселерация
          </a>
        </div>
        <a href="/" className={styles.profileInfo__profileLink}>
          <img src="/src/assets/images/arrow_icon.svg" alt="" />
        </a>
      </div>
    </section>
  );
}

export default ProfileInfo;
