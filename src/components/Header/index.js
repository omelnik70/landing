import React, { useState, useEffect, useContext } from 'react';

import { currentLang } from '../../store/actions';
import uaFlag from "../../assets/icons/ua.png";
import ruFlag from "../../assets/icons/ru.png";
import Context from "../../Context";
import phoneImg from "../../assets/icons/phone.webp"
import Logo from '../Logo';
import Button from '../Button';

import styles from './style.module.scss';

const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [focus, setFocus] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { lang, ru, ua } = state;

  const message = lang ? ru.message : ua.message;
  const phone = lang ? ru.phone : ua.phone;
  const nav = lang ? ru.nav : ua.nav;
  
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className={
      `${styles.containerBox} ${scroll ?  styles.containerBoxScroll : ""}`}
      >
      <div className={styles.content}>
        <Logo />
        <div class={styles.rightBlock}>
          <nav class={styles.nav}>
            <ul className={styles.menu}>
              {nav.map((item, index) => (<li key={index}><a href={item.link}>{item.text}</a></li>))}
            </ul>
          </nav>
          <Button message={message} />
          <div className={styles.phone}>
            <img src={phoneImg} alt="phone" />
            <span><a className={styles.phoneLink} href={`tel:${phone}`}>{phone}</a></span>
          </div>
          <div 
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={()=> setFocus(false)}
            onClick={() => dispatch(currentLang(!lang))}
            className={styles.lang}>
            {lang ? (<img src={ruFlag} alt="lang" />) :
            (<img src={uaFlag} alt="lang" />)}
            
            {focus && <span className={styles.langList}>
            {!lang ? (<img src={ruFlag} alt="lang" />) :
              (<img src={uaFlag} alt="lang" />)}
            </span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;