import React, { useReducer } from 'react';

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
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM готов!");
  });

  const value = {state, dispatch};

  return (
    <Context.Provider value={value}>
      <div className={styles.containerBox}>
        <Header />
        <div className='carouselBox'>
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
