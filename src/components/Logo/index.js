import React, { useContext } from 'react';

import Context from "../../Context";
import { handleShow } from '../../store/helper';

import styles from './style.module.scss';

const Logo = ({ style, top }) => {
  const { state } = useContext(Context);
  const { lang, ru, ua } = state;

  const logo = lang ? ru.logoSite : ua.logoSite;
  
  return (
    <div class={styles.logo}>
      <p style={style} onClick={() => handleShow(top)}>{logo}</p>
    </div>
  );
}

export default Logo;