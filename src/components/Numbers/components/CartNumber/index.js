import React from 'react';

import CartIcon from '../CartIcon';
import styles from './style.module.scss';

function CartNumber({ title, img, icon, description  }) {

  return (
    <>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div> 
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.iconsBox}>
        <CartIcon icon={icon} />
      </div>
      <div className={styles.text}>
        <p>{description}</p>
      </div>
    </>
  );
}

export default CartNumber;