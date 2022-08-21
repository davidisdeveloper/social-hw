import styles from './App.module.css';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import React from 'react';

function App() {
  const [number, setNumber] = React.useState(1);

  const countUp = () => {
    setNumber(number + 1)
    if(number >= 5) {
      setNumber(1)
    }
  }

  return (
    <div className={styles.app}>

      {number === 1 ? <One /> : null}
      {number === 2 ? <Two />: null}
      {number === 3 ? <Three /> : null}
      {number === 4 ? <Four /> : null}
      {number === 5 ? <Five /> : null}
      <div class={styles.btnBox}>
        <button className={styles.btn} onClick={countUp}>Next</button>
      </div>
      
    </div>
  );
}

export default App;
