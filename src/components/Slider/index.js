import React from 'react';

import carousel_1 from "../../assets/image/carousel/carousel_1.webp";
import carousel_2 from "../../assets/image/carousel/carousel_2.webp";
import carousel_3 from "../../assets/image/carousel/carousel_3.webp";
import Carousel from 'react-bootstrap/Carousel';

import './style.module.scss';

function CarouselBox() {
  return (
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={carousel_1}
            alt="Красоты Микуличина"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={carousel_2}
            alt="Красоты Микуличина"
          />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={carousel_3}
            alt="Красоты Микуличина"
          />
        </Carousel.Item>
      </Carousel>
  );
}

export default CarouselBox;