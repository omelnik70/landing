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
    hoverStop: false, //(true) - при наведении мышки на блок, слайдер в авто режиме останавливается, (false) - игнорируется 
    slidesInBlock: 
    (screenwidth >= 992) ? 
      3 : 
    (screenwidth >= 768) ?
      2 : 
      1, //количество видимых слайдов в блоке
  };

return (
  <div className={styles.containerBox}>
    <p className={styles.titleBox}>
      <a 
        href="https://www.google.com/search?q=%D0%BC%D0%B8%D0%BA%D1%83%D0%BB%D0%B8%D1%87%D0%B8%D0%BD%20%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B&rlz=1C1CHZN_ruUA1000UA1001&sxsrf=ALiCzsb9PTbTmFIjoFBY8Nin0jwJYRuoQQ:1664186424557&ei=KHgxY4ztDNDRqwGN-r7YCQ&oq=%D0%BC%D0%B8%D0%BA%D1%83%D0%BB%D0%B8%D1%87%D0%B8%D0%BD+%D0%B0%D0%B4&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzIGCAAQHhAWMgYIABAeEBYyAggmOgoIABBHENYEELADOg0IABBHENYEELADEMkDOgsILhCABBDHARCvAToFCAAQgARKBAhBGABKBAhGGABQlwVY_ghgqRRoAXABeACAAXqIAe0BkgEDMC4ymAEAoAEByAEIwAEB&sclient=gws-wiz&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=13407530447287683727&lqi=Cj7QvNC40LrRg9C70LjRh9C40L0g0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0LrQvtC90YLQsNC60YLRiyICEAFaRCI-0LzQuNC60YPQu9C40YfQuNC9INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINC60L7QvdGC0LDQutGC0YsqAggDkgEJY2l0eV9oYWxsqgEiEAEqHiIa0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8oDQ&ved=2ahUKEwjQx7PFmbL6AhU3CBAIHQ4TCdoQvS56BAgSEAE&sa=X&rlst=f#rlfi=hd:;si:13407530447287683727,l,Cj7QvNC40LrRg9C70LjRh9C40L0g0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0LrQvtC90YLQsNC60YLRiyICEAFaRCI-0LzQuNC60YPQu9C40YfQuNC9INCw0LTQvNC40L3QuNGB0YLRgNCw0YbQuNGPINC60L7QvdGC0LDQutGC0YsqAggDkgEJY2l0eV9oYWxsqgEiEAEqHiIa0LDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8oDQ;mv:[[48.4521735,24.6438524],[48.3916051,24.5481692]]" 
      >
        Написать отзыв
      </a>
    </p>
    <div className={styles.carouselBox}>
      <Carousel value={sliderProps}>
        {/* здесь вставляете слыйды любым способом в любом формате*/}
        {review.map((item, index) => (
          <div key={index} className={styles.slide}>
            <CartReview title={item.title} text={item.text} img={item.img} auhtor={item.auhtor} rating={item.rating} />
          </div>
        ))}
        {/* ========================== */}
      </Carousel>
    </div>
  </div>
);
}

export default Reviews;