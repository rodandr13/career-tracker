import BaseTable from 'components/BaseTable';
import CustomButton from 'components/CustomButton';
import CustomH2 from 'components/CustomH2';
import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.main}>
      <CustomH2>Моя стратегия</CustomH2>
      <CustomButton variant="outline">Изменить стратегию развития</CustomButton>
      <BaseTable />
    </main>
  );
}

export default Main;
