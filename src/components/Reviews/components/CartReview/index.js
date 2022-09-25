import React from 'react';

import Rating from '../../../Rating';

import styles from './style.module.scss';

function CartReview({ title, text, img, auhtor, rating }) {

  return (
    <div className={styles.containerBox}>
      <div className={styles.ratingBox}>
        <Rating rating={rating} />
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
      <div className={styles.auhtor}>
        <p>{auhtor}</p>
      </div>
    </div>
  );
}

export default CartReview;