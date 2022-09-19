import React, { useContext } from 'react';

import Context from "../../Context";

import styles from './style.module.scss';

const Logo = ({ style }) => {
  const { state } = useContext(Context);
  const { lang, ru, ua } = state;

  const logo = lang ? ru.logoSite : ua.logoSite;
  
  return (
    <div class={styles.logo}>
      <a style={style} href="/">{logo}</a>
    </div>
  );
}

export default Logo;