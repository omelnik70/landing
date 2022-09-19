import React, { useContext } from 'react';

import Context from '../../Context';
import CartService from './components/CartService';
import styles from './style.module.scss';

function Services() {
const { state } = useContext(Context);
const { lang, ua, ru } = state;
const service = lang ? ru.service : ua.service; 

  return (
      <div className={styles.containerBox}>
        <div className={styles.rowBox}>
          {service.map((item, index) => (<CartService key={index} src={item.src} title={item.title} text={item.text} />))}
        </div>
      </div>
  );
}

export default Services;