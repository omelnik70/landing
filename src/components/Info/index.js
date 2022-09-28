import React from 'react';

import Image from '../Image';
import styles from './style.module.scss';

function Info({ info }) {

  const { title, content } = info;

  return (
    <div className={styles.containerBox}>
      <h2 className={styles.title}>
        {title}
      </h2>
      {content.map((item, index) => (
        <div key={index} className={styles.infoBox}>
          <h3 className={styles.subTitle}>
            {item.h2}
          </h3>
          <div key={index} className={styles.contentBox}>
            {(item.img && (
              <div className={styles.imageBox}>
                <Image imageData={{small: item.img.img_300, medium: item.img.img_768, large: item.img.img_1280, title: item.h2}} />
              </div>
            ))}
            <p className={item.img ? styles.text : styles.textWithoutPicture}>
              {item.p}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Info;