import React from 'react';

import styles from './style.module.scss';

function CartReview({ title, text, img, auhtor }) {

  return (
    <div className={styles.containerBox}>
      <div className={styles.rating}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div> 
      <div className={styles.text}>
        <p>{text}</p>
      </div>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.text}>
        <p>{auhtor}</p>
      </div>
    </div>
  );
}

export default CartReview;