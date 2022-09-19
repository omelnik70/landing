import React, { useContext } from 'react';

import Logo from '../Logo';
import Context from '../../Context';
import Icons from "../Icons";
import Button from '../Button';

import styles from './style.module.scss';

function Contact() {
  const { state } = useContext(Context);
  const { lang, ua, ru } = state;
  const info = lang ? ru.footer : ua.footer;
  const message = lang ? ru.message : ua.message;

  let date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.containerBox}>
      <div className={styles.rowBox}>
        <Logo 
          style={{
          fontSize: "35px",
          color: "black", 
          border: "solid 2px black", 
          padding: "15px", 
          display: "inline-block"
          }} 
        />
        <div className={styles.infoBox}>
          {info.map((item, index) => (
            <div key={index} className={styles.info}>
              <h3>{item.title}</h3>
              <p>{item.text_1}</p>
              <p>{item.text_2}</p>
              <p>{item.text_3}</p>
            </div>
          ))}
          <div className={styles.info}>
            <h3>{"Email:"}</h3>
            <p>{"test@gmail.com"}</p>
            <Button 
              style={{
                marginLeft: "0"
              }} 
              message={message}
            />
          </div>
          <Icons 
            style={{
              height: "100%",
              width: "30%"
            }} />
        </div>
      </div>
      <div className={styles.copyrightBox}>
        <p className={styles.copyright}>{"Copyright ©"}</p>
        <p className={styles.date}>{currentYear}</p>
        <p className={styles.text}>{"Creation of React applications"}</p>
        <a href="https://www.facebook.com/sergejomelnik/">{"Serhii Omelnik"}</a>
      </div>
    </div>
  );
}

export default Contact;