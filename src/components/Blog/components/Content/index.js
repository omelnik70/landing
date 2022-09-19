import React, { useContext } from 'react';

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
        {item.img && (<img src={item.img} alt="" />)}
        {item.p && (<p>{item.p}</p>)}
      </div>))}
    </div>
  );
}

export default Content;