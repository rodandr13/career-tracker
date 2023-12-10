import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './Main.module.scss';
import Strategy from '../../pages/Strategy';
import SkillsAssessment from '../../pages/SkillsAssessment';
import HelpDecide from '../../pages/HelpDecide';

function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/progress-tracker/strategy" replace />}
        />
        <Route
          path="/progress-tracker/*"
          element={
            <Routes>
              <Route index element={<Navigate to="strategy" replace />} />
              <Route path="strategy" element={<Strategy />} />
              <Route path="skills-assessment" element={<SkillsAssessment />} />
              <Route path="help-decide" element={<HelpDecide />} />
            </Routes>
          }
        />
      </Routes>
    </main>
  );
}

export default Main;
