import styles from './App.module.scss';
import Navigation from '../Navigation';
import Main from '../Main';
import Header from '../Header';

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
