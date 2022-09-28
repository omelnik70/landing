import React from 'react';

import styles from './style.module.scss';

function Line() {

  return (
    <div className={styles.lineBox}>
      <div className={styles.line}></div>
      <div className={styles.circle}></div>
      <div className={styles.line}></div>
  </div>
  );
}

export default Line;