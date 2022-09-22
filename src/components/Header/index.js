import React, { useState, useContext, useRef } from 'react';

import { currentLang } from '../../store/actions';
import uaFlag from "../../assets/icons/ua.png";
import ruFlag from "../../assets/icons/ru.png";
import Context from "../../Context";
import phoneImg from "../../assets/icons/phone.webp"
import Logo from '../Logo';
import { handleShow, changeStyle } from '../../store/helper';

import styles from './style.module.scss';

const Header = () => {
  const [focus, setFocus] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { 
    lang, 
    ru, 
    ua, 
    currentScroll, 
    top, 
    about, 
    gallery, 
    numbers, 
    contact,
    screenwidth,
  } = state;
  const currentDiv = useRef();
  const mobileContainer = useRef();

  const phone = lang ? ru.phone : ua.phone;
  const nav = lang ? ru.nav : ua.nav;

  const handleClik = () => {
    changeStyle(mobileContainer, styles.active);
  };
  
  return (
    <div className={
      `${styles.containerBox} ${currentScroll ?  styles.containerBoxScroll : ""}`}
      >
      <div
        ref={mobileContainer} 
        className={styles.mobileMenuContainer}
      >
        <p onClick={() => handleShow(about, () => changeStyle(currentDiv, styles.change, handleClik))}>{nav.about}</p>
        <p onClick={() => handleShow(numbers,  () => changeStyle(currentDiv, styles.change, handleClik))}>{nav.numbers}</p>
        <p onClick={() => handleShow(gallery,  () => changeStyle(currentDiv, styles.change, handleClik))}>{nav.gallery}</p>
        <p onClick={() => handleShow(contact,  () => changeStyle(currentDiv, styles.change, handleClik))}>{nav.contact}</p>
        {(screenwidth < 576) && (
          <>
            <div className={styles.line}></div>
            <p>Реклама на сайте: +3807610748</p>
          </>
        )}
      </div>
      <div className={styles.content}>
        <Logo top={top} />
        <div class={styles.rightBlock}>
          <nav class={styles.nav}>
          {(screenwidth > 991) && (
            <div className={styles.menu}>
              <p onClick={() => handleShow(about)}>{nav.about}</p>
              <p onClick={() => handleShow(numbers)}>{nav.numbers}</p>
              <p onClick={() => handleShow(gallery)}>{nav.gallery}</p>
              <p onClick={() => handleShow(contact)}>{nav.contact}</p>
            </div>
            )}
            {(screenwidth < 992) && (
            <div 
              ref={currentDiv} 
              onClick={() => changeStyle(currentDiv, styles.change, handleClik)} 
              className={styles.mobileMenu}
            >
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
            </div>
            )}
          </nav>
          {(screenwidth >= 576) && (
          <div className={styles.phone}>
            <img src={phoneImg} alt="phone" />
            <span><a className={styles.phoneLink} href={`tel:${phone}`}>{phone}</a></span>
          </div>
          )}
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