import StrategyTable from 'components/StrategyTable';
import SkillsTable from 'components/SkillsTable';
import StrategyHeader from 'components/StrategyHeader';
import CustomH2 from 'components/CustomH2';
import CustomButton from 'components/CustomButton';
import LinkBack from 'components/LinkBack';
import styles from './Strategy.module.scss';

function Strategy() {
  return (
    <section className={styles.strategy}>
      <LinkBack />
      <div>
        <StrategyHeader />
        <CustomH2 parentClasses={styles.strategy__subtitle}>
          Моя стратегия
        </CustomH2>
        <StrategyTable parentClasses={styles.strategy__table} />
        <CustomButton variant="outline">
          Изменить стратегию развития
        </CustomButton>
      </div>
      <div>
        <CustomH2 parentClasses={styles.strategy__subtitle}>
          Мои навыки
        </CustomH2>
        <SkillsTable />
        <CustomButton variant="primary">
          Скорректировать свои навыки
        </CustomButton>
      </div>
    </section>
  );
}

export default Strategy;
