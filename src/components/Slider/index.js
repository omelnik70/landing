import React, { useContext } from 'react';

import Image from '../Image';
import Carousel from '../Carousel';
import Context from "../../Context";

import styles from './style.module.scss';

function Slider() {
  const { state } = useContext(Context);
  const { slider } = state;
  
  const sliderProps = {
    delayOffset: 500, //скорость скольжения в мс
    delayInterval: 5000, //задержка в мс перед скольжением
    manual: false, //ручное переслистование слайдов (true), автоматическое (false)
    hoverStop: false, //(true) - при наведении мышки на блок, слайдер в авто режиме останавливается, (false) - игнорируется
    slidesInBlock: 1, //количество видимых слайдов в блоке
  };

return (
  <div className={styles.containerBox}>
    <Carousel value={sliderProps}>
      {/* здесь вставляете слыйды любым способом в любом формате*/}
      {slider.map((item, index) => (
        <div key={index} className={styles.slide}>
          <Image imageData={{small: item.img.img_300, medium: item.img.img_768, large: item.img.img_1280}} />
        </div>
      ))}
      {/* ========================== */}
    </Carousel>
  </div>
);
}

export default Slider;