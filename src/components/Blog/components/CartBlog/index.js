import React from 'react';

import Image from '../../../Image';

import styles from './style.module.scss';

function CartBlog({ title, img, handleClik }) {
  const { img_1280, img_768, img_300 } = img;

  const imageData = {
    small: img_300, //ссылка на изображение шириной 300px мобильный
    medium: img_768, //ссылка на изображение шириной 768px планшет
    large: img_1280, //ссылка на изображение шириной 1280px компьютер
    title: title,
  };
  
  return (
    <div 
      onClick={handleClik}
      className={styles.containerBox}>
      <div className={styles.slide}>
        <Image imageData={imageData} />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default CartBlog;