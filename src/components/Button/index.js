import React from 'react';

import styles from './style.module.scss';

const Button = ({ message, style, mail }) => {
  
  return (
    <div style={style} className={styles.message}>
        <span><a href={mail}>{message}</a></span>
    </div>
  );
}

export default Button;