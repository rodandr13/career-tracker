import CourseBlock from 'components/CourseBlock';
import styles from './CourseBlocksContainer.module.scss';

function CourseBlocksContainer() {
  return (
    <section className={styles.courseBlocksContainer}>
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
      <CourseBlock />
    </section>
  );
}

export default CourseBlocksContainer;
