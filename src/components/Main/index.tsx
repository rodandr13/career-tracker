import BaseTable from 'components/BaseTable';
import CustomButton from 'components/CustomButton';
import styles from './Main.module.scss';

function Main() {
  return (
    <main className={styles.main}>
      Main
      <CustomButton variant="outline">Изменить стратегию развития</CustomButton>
      <BaseTable />
    </main>
  );
}

export default Main;
