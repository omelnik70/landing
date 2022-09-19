import React, { useContext } from 'react';

import Form from '../Form';
import { modalActivForm } from '../../store/actions';
import Context from '../../Context';
import Modal from '../Modal';
import styles from './style.module.scss';

const Button = ({ message, style }) => {
  const { state, dispatch } = useContext(Context);
  const { modalForm } = state;

  const handleClick = () => {
    console.log("Hi");
    dispatch(modalActivForm(!modalForm))
  };
  
  return (
    <div 
      onClick={handleClick}
      style={style} className={styles.message}>
      <Modal active={modalForm} modalActiv={modalActivForm}><Form /></Modal>
      <span>{message}</span>
    </div>
  );
}

export default Button;