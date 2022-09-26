import React from 'react';

import styles from './style.module.scss';

const Image = ({ imageData }) => {
  const { small, medium, large, title = "", alt = "" } = imageData;

  //пример работы с объектом данных для Image
  // const imageData = {
  //   small: "", ссылка на изображение шириной 300px мобильный
  //   medium: "", ссылка на изображение шириной 768px планшет
  //   large: "", ссылка на изображение шириной 1280px компьютер
  //   alt: "",
  //   title: "",
  // }

  //<Image imageData={imageData} />
  
  return (
    <img 
      className={styles.image} 
      src={small} 
      srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} 
      alt={alt}
      title={title}
    />
  );
}

export default Image;