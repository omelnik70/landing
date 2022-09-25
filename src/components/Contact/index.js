import React, { useContext } from 'react';

import Logo from '../Logo';
import Context from '../../Context';
import Icons from "../Icons";
import Button from '../Button';

import styles from './style.module.scss';

function Contact() {
  const { state } = useContext(Context);
  const { lang, ua, ru, screenwidth, telegram } = state;

  const info = lang ? ru.footer : ua.footer;
  const btn = lang ? ru.btn : ua.btn;
  const { link, img } = telegram;

  let date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.containerBox}>
      <div className={styles.rowBox}>
        {screenwidth >= 576 && (<Logo 
            styleContact={{
            fontFamily: "'Lobster', cursive",
            fontSize: "35px",
            color: "black", 
            border: "solid 2px black", 
            padding: "15px", 
            display: "inline-block"
            }}
        />)}
        {screenwidth < 576 && (<Logo 
          styleContact={{
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
                <p>{item.text_4}</p>
              </div>
            ))}
            {img && (<a href={link}><img src={img} alt="" /></a>)}
          </div>
          <div className={styles.map}>
            <iframe 
              title="Карта Микуличина" 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42388.067698048915!2d24.60721155!3d48.394060700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1663943121430!5m2!1sru!2sua" 
              width="100%" 
              height="300px" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
        <div className={styles.info}>
          <Icons 
            style={{
            height: "auto",
            width: "10%"
            }} 
          />
        </div>
        <div className={styles.line}></div>
        <div className={styles.advertising}>
          <h3>{btn.text}</h3>
          <div className={styles.btn}></div>
            <Button 
              isPhone={false} 
              link={btn.emailLink} 
              content={btn.email} 
            />
            <Button 
              isPhone={true} 
              src={btn.img} 
              //text={btn.text} 
              content={btn.phone} 
              link={btn.phoneLink} 
            />
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