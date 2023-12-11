import CustomH2 from 'components/CustomH2';
import CurrentProfession from 'components/CurrentProfession';
import styles from './StartingStep.module.scss';

function StartingStep() {
  return (
    <section className={styles.startingStep}>
      <h2>Добро пожаловать!</h2>
      <p>
        Цель этой программы — помочь тебе составить четкий план развития
        карьеры.
      </p>
      <CustomH2>Шаг 1 – от точки А до точки Б</CustomH2>
      <p>
        Чтобы составить эффективную стратегию развития поделись с нами своими
        планами. Если возникнут сомнения жми сюда – поможем определиться!
      </p>
      <CurrentProfession />
    </section>
  );
}

export default StartingStep;
