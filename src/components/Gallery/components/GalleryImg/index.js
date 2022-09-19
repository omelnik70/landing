import React from 'react';

import styles from './style.module.scss';

function GalleryImg({ src, title }) {

  return (
    <img className={styles.img} src={src} title={title} alt="" />
  );
}

export default GalleryImg;