import React, { useContext, useState } from 'react';

import { modalActivGallery } from '../../store/actions';
import Context from '../../Context';
import GalleryImg from './components/GalleryImg';
import Modal from '../Modal';

import styles from './style.module.scss';

function Gallery() {
const { state, dispatch } = useContext(Context);
const [children, setChildren] = useState();
const { lang, ua, ru, modalGallery } = state;
const gallery = lang ? ru.gallery : ua.gallery;

const handleClik = (e) => {
  setChildren(e.target.currentSrc);
  dispatch(modalActivGallery(!modalGallery));
};

  return (
      <div 
        onClick={(e) => handleClik(e)}
        className={styles.containerBox}>
        <Modal active={modalGallery} modalActiv={modalActivGallery}><img src={children} alt="" /></Modal>
        {gallery.map((item, index) => (<GalleryImg key={index} src={item.src} title={item.title} />))}
      </div>
  );
}

export default Gallery;