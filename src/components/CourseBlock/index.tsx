import styles from './CourseBlock.module.scss';

function CourseBlock() {
  return (
    <article className={styles.courseBlock}>
      <div className={styles.courseBlock__shadow}>
        <span className={styles.courseBlock__label}>
          Кем стать в IT • С нуля
        </span>
        <h3 className={styles.courseBlock__title}>Тест профориентации</h3>
        <p className={styles.courseBlock__description}>
          Получите подробные результаты и разберетесь, что вам подходит
        </p>
        <div className={styles.courseBlock__imageContainer}>
          <img src="src/assets/images/proforientation.svg" alt="" />
        </div>
        <span className={styles.courseBlock__labelFree}>Бесплатно</span>
      </div>
    </article>
  );
}

export default CourseBlock;
