import { lazy, Suspense, useEffect, useState } from 'react';
import { render } from 'react-dom';
import styles from './desktop.module.css';

const Remote = lazy(() => import('./common'));

const DesktopApp = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => setState(a => a + 1), 500);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className={styles.desktop}>
      <h1>Desktop app</h1>
      <p>Counter: {state}</p>
      <Suspense fallback={'Loading...'}>
        <Remote />
      </Suspense>
    </div>
  );
};

window.addEventListener('DOMContentLoaded', () => {
  render(<DesktopApp />, document.querySelector('#root'));
});
