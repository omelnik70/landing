import React, { useContext } from 'react';

import Image from '../../../Image';
import Context from "../../../../Context";
import styles from './style.module.scss';

function Content() {
  const { state } = useContext(Context);
  const { contentCurrentBlog } = state;

  return (
    <div className={styles.containerBox}>
      {contentCurrentBlog.map((item, index) => (
      <div key={index} className={styles.slide}>
        {item.h2 && (<h2>{item.h2}</h2>)}
        <Image imageData={{small: item.img.img_300, medium: item.img.img_768, large: item.img.img_1280, title: item.h2}} />
        {item.p && (<p>{item.p}</p>)}
      </div>))}
    </div>
  );
}

export default Content;