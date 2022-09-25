import React from 'react';

import styles from './style.module.scss';

const Button = ({ src, link, text, content, styleHotelText, styleHotelBtn }) => {
  
  return (
    <div 
      className={styles.btn}
      style={styleHotelBtn}
    >
      {text && (
        <span>{text}</span>
      )}
      <div className={styles.contentBox}>
        {src && (
        <img src={src} alt="" />
        )}
        <a 
          href={link}
          style={styleHotelText}
        >
          {content}
        </a>
      </div>
    </div>
  );
}

export default Button;