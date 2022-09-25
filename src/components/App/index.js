import React, { useReducer, useEffect } from 'react';

import Gallery from '../Gallery';
import Store from '../../store/store';
import reducer from '../../store/reducer';
import Context from '../../Context';
import Services from '../Services';
import Header from '../Header';
import About from '../About';
import Reviews from '../Reviews';
import Hotels from '../Hotels';
import Blog from '../Blog';
import Contact from '../Contact';
import Slider from '../Slider';
import { handleShow } from '../../store/helper';
import { 
  currentActionScroll,
  isTop,
  isBlog,
  isContact,
  isAbout,
  isHotels,
  isGallery,
  isScreenWidth,
} from '../../store/actions';

import styles from './style.module.scss';

const App = () => {
  const [state, dispatch] = useReducer(reducer, Store);
  const { lang, ru, ua, arrow, arrow_top, top, currentScroll, screenwidth } = state;
  
  const mainTitle = lang ? ru.logoSite : ua.logoSite;
  const subTitle = lang ? ru.subTitle : ua.subTitle;
  const description = lang ? ru.description : ua.description;
  const metaDescription = lang ? ru.metaDescription : ua.metaDescription;
  const metaKeywords = lang ? ru.metaKeywords : ua.metaKeywords;

  const handleScroll = () => {
    dispatch(currentActionScroll(window.scrollY))
  };

  const handleScreenWidth = () => {
    dispatch(isScreenWidth(window.screen.width));
  };

useEffect(() => {
  window.addEventListener("resize", handleScreenWidth);
  return () => window.removeEventListener("resize", handleScreenWidth);
});

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const title = document.querySelector('title');
    const metaDesc = document.querySelectorAll('meta')[1];
    const metaKeyw = document.querySelectorAll('meta')[2];
    const scrollTop = document.getElementById('top');
    const scrollContact = document.getElementById('contact');
    const scrollGallery = document.getElementById('gallery');
    const scrollBlog = document.getElementById('blog');
    const scrollAbout = document.getElementById('about');
    const scrollHotels = document.getElementById('hotels');

    dispatch(isTop(scrollTop));
    dispatch(isContact(scrollContact));
    dispatch(isGallery(scrollGallery));
    dispatch(isAbout(scrollAbout));
    dispatch(isHotels(scrollHotels));
    dispatch(isBlog(scrollBlog));
    
    title.textContent = `${mainTitle} | ${description}`;
    metaDesc.content = metaDescription;
    metaKeyw.content = metaKeywords;
  }, [
    mainTitle, 
    description, 
    metaDescription, 
    metaKeywords
  ]);

  const value = {state, dispatch};

  return (
    <Context.Provider value={value}>
      <div id="top" className={styles.containerBox}>
      {(currentScroll >= 1800) && (screenwidth >= 678) && (
      <div onClick={() => handleShow(top)} className={styles.arrowTop}>
        <img src={arrow_top} alt="" />
      </div>
      )}
        <Header />
        <div className={styles.carouselBox}>
          <Slider />
          <div className={styles.mainText}>
            <h1>{mainTitle}</h1>
            <h2>{subTitle}</h2>
            <p>{description}</p>
          </div>
          {!currentScroll && (<div className={styles.arrow}>
            <img src={arrow} alt="" />
          </div>)}
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
        <div id="hotels" className={styles.hotels}>
          <Hotels />
        </div>
        <div id="blog" className={styles.blog}>
          <div className={styles.background}></div>
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
