import React, { useState, useContext, useRef } from 'react';

import { currentLang } from '../../store/actions';
import uaFlag from "../../assets/icons/ua.png";
import ruFlag from "../../assets/icons/ru.png";
import Context from "../../Context";
import Button from '../Button';
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
    hotels,
    blog, 
    contact,
    screenwidth,
  } = state;
  const currentDiv = useRef();
  const mobileContainer = useRef();

  const btn = lang ? ru.btn : ua.btn;
  const nav = lang ? ru.nav : ua.nav;

  const { img, text, phone, phoneLink } = btn;

  const handleClik = () => {
    changeStyle(mobileContainer, styles.active);
  };

  const callbackStyle = () => changeStyle(currentDiv, styles.change, handleClik);
  
  return (
    <div className={
      `${styles.containerBox} ${currentScroll ?  styles.containerBoxScroll : ""}`}
      >
      <div
        ref={mobileContainer} 
        className={styles.mobileMenuContainer}
      >
        <p onClick={() => handleShow(about, callbackStyle)}>{nav.about}</p>
        <p onClick={() => handleShow(hotels,  callbackStyle)}>{nav.hotels}</p>
        <p onClick={() => handleShow(blog,  callbackStyle)}>{nav.blog}</p>
        <p onClick={() => handleShow(gallery,  callbackStyle)}>{nav.gallery}</p>
        <p onClick={() => handleShow(contact,  callbackStyle)}>{nav.contact}</p>
        {(screenwidth < 576) && (
          <>
            <div className={styles.line}></div>
            <p>{`${text} ${phone}`}</p>
          </>
        )}
      </div>
      <div className={styles.content}>
        <Logo top={top} />
        <div className={styles.rightBlock}>
          <nav className={styles.nav}>
          {(screenwidth > 991) && (
            <div className={styles.menu}>
              <p onClick={() => handleShow(about)}>{nav.about}</p>
              <p onClick={() => handleShow(hotels)}>{nav.hotels}</p>
              <p onClick={() => handleShow(blog)}>{nav.blog}</p>
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
          <Button 
            src={img} 
            text={text} 
            content={phone} 
            link={phoneLink} 
          />
          )}
          <div 
            onMouseEnter={() => setFocus(true)}
            onMouseLeave={()=> setFocus(false)}
            onClick={() => dispatch(currentLang(!lang))}
            className={styles.lang}>
            {lang ? (
            <img src={ruFlag} alt="lang" />
            ) :
            (
            <img src={uaFlag} alt="lang" />
            )}
            
            {focus && <span className={styles.langList}>
            {!lang ? (
              <img src={ruFlag} alt="lang" />
            ) :
              (
                  <img src={uaFlag} alt="lang" />
              )}
            </span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;