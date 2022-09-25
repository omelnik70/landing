import React from 'react';

import styles from './style.module.scss';

const Button = ({ src, link, text, content }) => {
  
  return (
    <div className={styles.btn}>
      {text && (
        <span>{text}</span>
      )}
      <div className={styles.contentBox}>
        {src && (
        <img src={src} alt="" />
        )}
        <a href={link}>{content}</a>
      </div>
    </div>
  );
}

export default Button;