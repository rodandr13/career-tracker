import CustomH2 from 'components/CustomH2';
import ProgressCircle from 'components/ProgressCircle';
import styles from './StrategyHeader.module.scss';

function StrategyHeader() {
  return (
    <header className={styles.strategyHeader}>
      <div className={styles.strategyHeader__titleContainer}>
        <CustomH2>Цель →</CustomH2>
      </div>
      <div className={styles.strategyHeader__subheader}>
        <h3 className={styles.strategyHeader__subheaderTitle}>Web-дизайнер</h3>
        <p className={styles.strategyHeader__subheaderCaption}>Middle</p>
      </div>
      <ProgressCircle />
    </header>
  );
}

export default StrategyHeader;
