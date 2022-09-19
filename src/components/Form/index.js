import React, { useState } from 'react';

import styles from './style.module.scss';

const Form = () => {
  const [name, setName] = useState("Введите Ваше имя");
  const [email, setEmail] = useState("Введите Ваш email");
  const [message, setMessage] = useState("Ваше сообщение");
  
  return (
    <div className={styles.formBox}>
      <form action={`mail${email}`} method="post">
        <h3>{name}</h3>
        <input 
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder={"Введите Ваше имя"} />
        <h3>{email}</h3>
        <input 
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder={"Введите Ваш email"} />
          <h3>{message}</h3>
        <textarea 
          onChange={(e) => setMessage(e.target.value)}
          placeholder={"Ваше сообщение"}
          rows="5"
        />
        <p><input type="submit" /></p>
      </form>
  </div>
  );
}

export default Form;