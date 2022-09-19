import React, { useContext } from 'react';

import Context from "../../Context";

import styles from './style.module.scss';

const Icons = ({ style }) => {
  const { state } = useContext(Context);
  const { lang, ua, ru } = state;
  const aboutImg = lang ? ru.aboutImg : ua.aboutImg;
  
  return (
    <div style={style} className={styles.iconBox}>
      {aboutImg.map((item, index) => (<img key={index} src={item.src} title={item.title} alt="" />))}
    </div>
  );
}

export default Icons;