import React, { useContext } from 'react';

import Context from "../../Context";
import CartNumber from './components/CartNumber';

import styles from './style.module.scss';

function Numbers() {
  const { state } = useContext(Context);
  const { lang, ua, ru } = state;
  const numbers = lang ? ru.numbers : ua.numbers;
  const title = lang ? ru.numbersTitle : ua.numbersTitle;
  const text = lang ? ru.numbersText : ua.numbersText;

  return (
    <div className={styles.containerBox}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div> 
      <div className={styles.text}>
        <p>{text}</p>
      </div> 
      <div className={styles.numbers}> 
        {numbers.map((item, index) => (
        <div key={index} className={styles.number}>
          <CartNumber title={item.title} img={item.img} icon={item.icon} description={item.description} />
        </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;