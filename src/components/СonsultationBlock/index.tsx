import CustomButton from 'components/CustomButton';
import styles from './ConsultationBlock.module.scss';

function ConsultationBlock() {
  return (
    <section className={styles.consultationBlock}>
      <h3 className={styles.consultationBlock__title}>
        Приходи, если сложно оценить свои навыки
      </h3>
      <p className={styles.consultationBlock__description}>
        Вместе за час разберём твою ситуацию и составим план, куда и как
        двигаться дальше
      </p>
      <p className={styles.consultationBlock__price}>4000 ₽</p>
      <CustomButton variant="dark">Записаться на консультацию</CustomButton>
    </section>
  );
}

export default ConsultationBlock;
