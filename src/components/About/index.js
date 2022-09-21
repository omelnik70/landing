import React, { useContext } from 'react';

import Context from '../../Context';
import Icons from '../Icons';

import styles from './style.module.scss';

function About() {
const { state } = useContext(Context);
const { lang, ua, ru } = state;
const aboutText = lang ? ru.aboutText : ua.aboutText;
const aboutTitle = lang ? ru.aboutTitle : ua.aboutTitle;

  return (
      <div className={styles.containerBox}>
        <div className={styles.rowBox}>
          <div className={styles.textBox}>
            <h2>{aboutTitle}</h2>
            <p>{aboutText}</p>
          </div>
          <div className={styles.iconsBox}>
            <Icons />
          </div>
        </div>
      </div>
  );
}

export default About;