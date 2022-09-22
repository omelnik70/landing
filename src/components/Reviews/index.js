import React, { useContext } from 'react';

import Carousel from '../Carousel';
import Context from "../../Context";
import CartReview from './components/CartReview';

import styles from './style.module.scss';

function Reviews() {
  const { state } = useContext(Context);
  const { lang, ua, ru, screenwidth } = state;
  const review = lang ? ru.review : ua.review;
  
  const sliderProps = {
    delayOffset: 3000, //скорость скольжения в мс
    delayInterval: 10000, //задержка в мс перед скольжением
    manual: false, //ручное переслистование слайдов (true), автоматическое (false)
    hoverStop: true, //(true) - при наведении мышки на блок, слайдер в авто режиме останавливается, (false) - игнорируется 
    slidesInBlock: 
    (screenwidth >= 992) ? 
      3 : 
    (screenwidth >= 576) ?
      2 : 
      1, //количество видимых слайдов в блоке
  };

return (
  <div className={styles.containerBox}>
    <Carousel value={sliderProps}>
      {/* здесь вставляете слыйды любым способом в любом формате*/}
      {review.map((item, index) => (
        <div key={index} className={styles.slide}>
          <CartReview title={item.title} text={item.text} img={item.img} auhtor={item.auhtor} />
        </div>
      ))}
      {/* ========================== */}
    </Carousel>
  </div>
);
}

export default Reviews;