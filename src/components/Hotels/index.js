import React, { useContext } from 'react';

import Carousel from '../Carousel';
import Context from "../../Context";
import CartHotel from './components/CartHotel';
import ListHotels from './components/ListHotels';
import { modalActivHotel } from '../../store/actions';
import Modal from "../Modal";

import styles from './style.module.scss';

function Hotels() {
  const { state, dispatch } = useContext(Context);
  const { lang, ua, ru, modalHotel, screenwidth } = state;
  const hotels = lang ? ru.hotels : ua.hotels;
  const btnText = lang ? ru.btn.hotel : ua.btn.hotel;
  const title = lang ? ru.hotelsTitle : ua.hotelsTitle;
  const hotelOpenList = lang ? ru.hotelOpenList : ua.hotelOpenList;

  const sliderProps = {
    delayOffset: 3000, //скорость скольжения в мс
    delayInterval: 10000, //задержка в мс перед скольжением
    manual: false, //ручное переслистование слайдов (true), автоматическое (false)
    hoverStop: true, //(true) - при наведении мышки на блок, слайдер в авто режиме останавливается, (false) - игнорируется
    slidesInBlock: screenwidth >= 992 ? 2 : 1 //количество видимых слайдов в блоке
  };

  const handleClik = () => {
    dispatch(modalActivHotel(!modalHotel));
  };

  return (
    <div className={styles.containerBox}>
      <div className={styles.titleBox}>
        <p className={styles.title}>{title}</p>
        <button onClick={() => handleClik()}>{hotelOpenList}</button>
      </div>
      <Modal active={modalHotel} modalActiv={modalActivHotel}><ListHotels hotels={hotels} /></Modal>
      <div className={styles.sliderBox}>
        <Carousel value={sliderProps}>
          {/* здесь вставляете слыйды любым способом в любом формате*/}
          {hotels.map((item, index) => (
            <div  key={index} className={styles.slide}>
              <CartHotel 
                screenwidth={screenwidth}
                title={item.title} 
                rating={item.rating}
                img={item.img} 
                description={item.description}
                btnText={btnText}
                lable={item.lable}
                phone={item.phone}
                link={item.link}
              />
            </div>
          ))}
          {/* ========================== */}
        </Carousel>
      </div>
    </div>
  );
}

export default Hotels;