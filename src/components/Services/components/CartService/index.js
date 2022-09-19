import React from 'react';

import styles from './style.module.scss';

const CartService = ({ src, title, text }) => {
  
  return (
    <div className={styles.cartServiceBox}>
      <div className={styles.flexBox}>
        <div className={styles.iconBox}>
          <img src={src} alt="" />
        </div>
        <div className={styles.titleBox}>
          <h2>{title}</h2>
        </div>
        <div className={styles.textBox}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CartService;
