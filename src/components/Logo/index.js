import React, { useContext } from 'react';

import Context from "../../Context";
import { handleShow } from '../../store/helper';

import styles from './style.module.scss';

const Logo = ({ styleContact, top }) => {
  const { state } = useContext(Context);
  const { lang, ru, ua } = state;

  const logo = lang ? ru.logoSite : ua.logoSite;
  
  return (
    <div class={styles.logo}>
      <h2 style={styleContact} onClick={() => handleShow(top)}>{logo}</h2>
    </div>
  );
}

export default Logo;