import React, { useReducer, useEffect } from 'react';

import Gallery from '../Gallery';
import Store from '../../store/store';
import reducer from '../../store/reducer';
import Context from '../../Context';
import Services from '../Services';
import CarouselBox from '../Slider';
import Header from '../Header';
import About from '../About';
import Reviews from '../Reviews';
import Numbers from '../Numbers';
import Blog from '../Blog';
import Contact from '../Contact';

import styles from './style.module.scss';

const App = () => {
  const [state, dispatch] = useReducer(reducer, Store);
  const { lang, ru, ua, arrow, arrow_top, currentScroll } = state;

  const mainTitle = lang ? ru.logoSite : ua.logoSite;
  const subTitle = lang ? ru.subTitle : ua.subTitle;
  const description = lang ? ru.description : ua.description;
  const metaDescription = lang ? ru.metaDescription : ua.metaDescription;
  const metaKeywords = lang ? ru.metaKeywords : ua.metaKeywords;

  useEffect(() => {
    const title = document.querySelector('title');
    const metaDesc = document.querySelectorAll('meta')[1];
    const metaKeyw = document.querySelectorAll('meta')[2];
    //console.log(document.querySelectorAll('meta'));
    title.textContent = `${mainTitle} | ${description}`;
    metaDesc.content = metaDescription;
    metaKeyw.content = metaKeywords;
  })

  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM готов!");
  });

  const value = {state, dispatch};

  return (
    <Context.Provider value={value}>
      <div id="top" className={styles.containerBox}>
      {currentScroll >= 1800 && (<div className={styles.arrowTop}>
        <a href="/#top"><img src={arrow_top} alt="" /></a>
      </div>)}
        <Header />
        <div className={styles.carouselBox}>
          <div className={styles.mainText}>
            <h1>{mainTitle}</h1>
            <h2>{subTitle}</h2>
            <p>{description}</p>
          </div>
          {!currentScroll && (<div className={styles.arrow}>
            <img src={arrow} alt="" />
          </div>)}
          <CarouselBox />
        </div>
        <div className={styles.serviceBox}>
          <Services />
        </div>
        <div id="gallery" className={styles.galleryBox}>
          <Gallery />
        </div>
        <div id="about" className={styles.aboutBox}>
          <About />
        </div>
        <div className={styles.reviewsBox}>
          <div className={styles.background}></div>
          <Reviews />
        </div>
        <div id="numbers" className={styles.numbers}>
          <Numbers />
        </div>
        <div className={styles.blog}>
          <Blog />
        </div>
        <div id="contact" className={styles.contact}>
          <Contact />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
