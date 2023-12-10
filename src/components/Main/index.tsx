import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.scss';
import Strategy from '../../pages/Strategy';
import SkillsAssessment from '../../pages/SkillsAssessment';
import HelpDecide from '../../pages/HelpDecide';

function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Strategy />} />
        <Route path="/" element={<SkillsAssessment />} />
        <Route path="/" element={<Strategy />} />
        <Route path="/" element={<HelpDecide />} />
      </Routes>
    </main>
  );
}

export default Main;
