import React, { useState, useContext } from 'react';

import { currentLang } from '../../store/actions';
import uaFlag from "../../assets/icons/ua.png";
import ruFlag from "../../assets/icons/ru.png";
import Context from "../../Context";
import phoneImg from "../../assets/icons/phone.webp"
import Logo from '../Logo';

import styles from './style.module.scss';

const Header = ({ top }) => {
  const [focus, setFocus] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { lang, ru, ua, currentScroll } = state;

  const phone = lang ? ru.phone : ua.phone;
  const nav = lang ? ru.nav : ua.nav;
  
  return (
    <div className={
      `${styles.containerBox} ${currentScroll ?  styles.containerBoxScroll : ""}`}
      >
      <div className={styles.content}>
        <Logo top={top} />
        <div class={styles.rightBlock}>
          <nav class={styles.nav}>
            <ul className={styles.menu}>
              {nav.map((item, index) => (<li key={index}><a href={item.link}>{item.text}</a></li>))}
            </ul>
          </nav>
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