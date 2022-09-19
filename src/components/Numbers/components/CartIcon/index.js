import React from 'react';

import styles from './style.module.scss';

function CartIcon({ icon }) {

  return (
    <>
      {icon.map((item, index) => (
        <div key={index} className={styles.containerBox}>
          <img src={item.img} alt="" />
          <p>{item.text}</p>
        </div>
      ))}
    </>
  );
}

export default CartIcon;