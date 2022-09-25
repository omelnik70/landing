import React from 'react';

import styles from './style.module.scss';

function Rating({ rating }) {

  return (
      <div className={styles.rating}>
        {rating.map((item, index) => (<i key={index}></i>))}
      </div>
  );
}

export default Rating;