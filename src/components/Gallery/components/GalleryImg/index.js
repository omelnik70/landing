import React from 'react';

import Image from '../../../Image';

import styles from './style.module.scss';

function GalleryImg({ src, title }) {
  const { src_300, src_768, src_1280 } = src;

  const imageData = {
    small: src_300, //ссылка на изображение шириной 300px мобильный
    medium: src_768, //ссылка на изображение шириной 768px планшет
    large: src_1280, //ссылка на изображение шириной 1280px компьютер
    alt: "Image Gallery",
    title: {title},
  };

  return (
    <div className={styles.img}>
      <Image imageData={imageData} />
    </div>
  );
}

export default GalleryImg;