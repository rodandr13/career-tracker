import LinkBack from 'components/LinkBack';
import CustomH2 from 'components/CustomH2';
import CourseBlocksContainer from 'components/CourseBlocksContainer';
import ConsultationBlock from 'components/СonsultationBlock';
import styles from './HelpDecide.module.scss';

function HelpDecide() {
  return (
    <section className={styles.helpDecide}>
      <LinkBack />
      <CustomH2>Важно правильно выбрать профессию!</CustomH2>
      <p className={styles.helpDecide__text}>
        Для начала рекомендуем пройти тест профориентации, если совсем не
        знаешь, где хочешь развиваться.
      </p>
      <CourseBlocksContainer />
      <ConsultationBlock />
    </section>
  );
}

export default HelpDecide;
