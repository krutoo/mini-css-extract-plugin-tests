import { lazy, useEffect, useState } from 'react';
import { render } from 'react-dom';
import styles from './mobile.module.css';

const Remote = lazy(() => import('./common'));

const MobileApp = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => setState(a => a + 1), 500);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className={styles.mobile}>
      <h1>Mobile app</h1>
      <p>Counter: {state}</p>
      <Suspense fallback={'Loading...'}>
        <Remote />
      </Suspense>
    </div>
  );
};

window.addEventListener('DOMContentLoaded', () => {
  render(<MobileApp />, document.querySelector('#root'));
});
