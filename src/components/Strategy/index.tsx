import StrategyTable from 'components/StrategyTable';
import SkillsTable from 'components/SkillsTable';
import StrategyHeader from 'components/StrategyHeader';
import styles from './Strategy.module.scss';

function Strategy() {
  return (
    <section className={styles.strategy}>
      <StrategyHeader />
      <StrategyTable parentClasses={styles.strategy__table} />
      <SkillsTable parentClasses={styles.strategy__table} />
    </section>
  );
}

export default Strategy;
