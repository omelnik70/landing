import React from 'react';

import styles from './style.module.scss';

function ListHotels({ hotels }) {
  
  return (
    <div className={styles.containerBox}>
      {hotels.map((item, index) => (
        <div 
          key={index}
          className={styles.contantBox}
        >
          <div 
            className={styles.titleBox}
          >
            <h3><a href={item.link}>{`"${item.title}"`}</a></h3>
            <p><a href={`tel:${item.phone}`}>{item.phone}</a></p>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ListHotels;