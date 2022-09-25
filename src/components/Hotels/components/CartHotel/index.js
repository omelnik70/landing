import React from 'react';

import Button from '../../../Button';
import Rating from '../../../Rating';

import styles from './style.module.scss';

function CartHotel({ 
  title, 
  link, 
  lable, 
  phone, 
  img, 
  btnText, 
  rating,
  description, 
  screenwidth, 
}) {
  
  const styleHotelText = {
    fontSize: "10px"
  };

  const styleHotelBtn = {
    minWidth: "100px",
    height: "30px"
  };
  
  return (
    <div className={styles.containerBox}>
      <div className={styles.imageHotel}>
        {img && (<img src={img} alt="" />)}
        <div className={styles.titleBox}>
          <h2>{title}</h2>
          <Rating rating={rating} />
        </div>
        <h3><a href={`tel:${phone}`}>{phone}</a></h3>
          {lable.map((item, index) => (
          <div key={index} className={styles.lable}>
            {item.new && (<p className={styles.new}>{item.new}</p>)}
            {item.hot && (<p className={styles.hot}>{item.hot}</p>)}
            {item.other && (<p className={styles.other}>{item.other}</p>)}
          </div>
          ))}
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.btnBox}>
            <Button 
              styleHotelText={screenwidth < 576 ? styleHotelText : {}} 
              styleHotelBtn={screenwidth < 576 ? styleHotelBtn : {}}
              link={link} 
              content={btnText} 
            />
          </div>
      </div>
    </div>
  );
}

export default CartHotel;