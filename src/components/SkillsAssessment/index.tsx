import SkillsTable from 'components/SkillsTable';
import CustomH2 from 'components/CustomH2';
import ConsultationBlock from 'components/СonsultationBlock';
import styles from './skillsAssessment.module.scss';

function SkillsAssessment() {
  return (
    <section className={styles.skillsAssessment}>
      <CustomH2 parentClasses={styles.skillsAssessment__subtitle}>
        Шаг 2 – Оцени свои навыки
      </CustomH2>
      <ul className={styles.skillsAssessment__list}>
        <li className={styles.skillsAssessment__listItem}>
          → от 0 до 3 – новичок;
        </li>
        <li className={styles.skillsAssessment__listItem}>
          → от 4 до 6 – средний;
        </li>
        <li className={styles.skillsAssessment__listItem}>
          → от 7 до 8 – эксперт;
        </li>
        <li className={styles.skillsAssessment__listItem}>
          → от 9 до 10 – мастер.
        </li>
      </ul>
      <p className={styles.skillsAssessment__description}>
        Позже, ты сможешь скорректировать оценки.
      </p>
      <SkillsTable />
      <ConsultationBlock />
    </section>
  );
}

export default SkillsAssessment;
