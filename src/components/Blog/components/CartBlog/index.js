import React from 'react';

import styles from './style.module.scss';

function CartBlog({ title, img, handleClik }) {
  
  return (
    <div 
      onClick={handleClik}
      className={styles.containerBox}>
      <div className={styles.slide}>
      {img && (<img src={img} alt="" />)}
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default CartBlog;