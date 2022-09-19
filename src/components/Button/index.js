import React from 'react';

import styles from './style.module.scss';

const Button = ({ message, style, mail }) => {
  
  return (
    <div style={style} className={styles.message}>
        <a href={mail}>{message}</a>
    </div>
  );
}

export default Button;