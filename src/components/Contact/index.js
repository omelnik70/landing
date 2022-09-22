import React, { useContext } from 'react';

import Logo from '../Logo';
import Context from '../../Context';
import Icons from "../Icons";
import Button from '../Button';

import styles from './style.module.scss';

function Contact() {
  const { state } = useContext(Context);
  const { lang, ua, ru, mail, screenwidth } = state;
  const info = lang ? ru.footer : ua.footer;
  const message = lang ? ru.message : ua.message;

  let date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.containerBox}>
      <div className={styles.rowBox}>
      {screenwidth >= 576 && (<Logo 
          style={{
          fontFamily: "'Lobster', cursive",
          fontSize: "35px",
          color: "black", 
          border: "solid 2px black", 
          padding: "15px", 
          display: "inline-block"
          }}
        />)}
        {screenwidth < 576 && (<Logo 
          style={{
          fontFamily: "'Lobster', cursive",
          fontSize: "28px",
          color: "black", 
          border: "solid 2px black", 
          padding: "15px", 
          display: "inline-block"
          }}
        />)}
        <div className={styles.infoBox}>
          <div className={styles.infoContainer}>
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
                mail={mail}
              />
            </div>
          </div>
          <Icons 
            style={{
              height: "100%",
              width: "30%"
            }} />
        </div>
      </div>
      <div className={styles.copyrightBox}>
        <p className={styles.copyright}>{"Copyright ©"}
          <span className={styles.date}>{currentYear}</span>
        </p>
        <p className={styles.text}>{"Creation of React applications"}
          <a href="https://www.facebook.com/sergejomelnik/">{"Serhii Omelnik"}</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;