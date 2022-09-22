import React, { useContext } from 'react';

import Carousel from '../Carousel';
import Context from "../../Context";
import CartBlog from './components/CartBlog';
import Content from "./components/Content";
import { modalActivBlog, contentCurrentBlog } from '../../store/actions';
import Modal from "../Modal";

import styles from './style.module.scss';

function Blog() {
  const { state, dispatch } = useContext(Context);
  const { lang, ua, ru, modalBlog, screenwidth } = state;
  const blog = lang ? ru.blog : ua.blog;

  const sliderProps = {
    delayOffset: 3000, //скорость скольжения в мс
    delayInterval: 10000, //задержка в мс перед скольжением
    manual: false, //ручное переслистование слайдов (true), автоматическое (false)
    hoverStop: true, //(true) - при наведении мышки на блок, слайдер в авто режиме останавливается, (false) - игнорируется
    slidesInBlock: screenwidth >= 992 ? 4 : 
    screenwidth >= 576 ?
    2 :
    1, //количество видимых слайдов в блоке
  };

  const handleClik = (content) => {
    dispatch(modalActivBlog(!modalBlog));
    dispatch(contentCurrentBlog(content));
  };

  return (
    <div className={styles.containerBox}>
      <Modal active={modalBlog} modalActiv={modalActivBlog}><Content /></Modal>
      <Carousel value={sliderProps}>
        {/* здесь вставляете слыйды любым способом в любом формате*/}
        {blog.map((item, index) => (
          <div  key={index} className={styles.slide}>
            <CartBlog 
              handleClik={() => handleClik(item.content)}
              title={item.title} 
              img={item.img} />
          </div>
        ))}
        {/* ========================== */}
      </Carousel>
    </div>
  );
}

export default Blog;