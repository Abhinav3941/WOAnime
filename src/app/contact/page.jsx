import React from 'react';
import styles from './page.module.css';
import Image from "next/image";
import Sai from "/public/sai.png"
import Buton from '@/components/buton/buton';
const Contacts = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch </h1>
      <div className={styles.content}>
      <div className={styles.img_cont}>
        
        <Image
        src={Sai}
        alt="contacts"
        fill ={true}
        className={styles.imag}
         />

      </div>

      <form className={styles.form} >
        <input type="text" placeholder="name" className={styles.input} /> 
        <input type="text" placeholder="email" className={styles.input} /> 
        <input type="number" placeholder="Phone no." className={styles.input} />
        <textarea className={styles.textarea}  placeholder="message" cols="30"  rows="10"/> 
        <Buton url="#" text="send" />
      </form>
      </div>
    </div>
  );
};

export default Contacts;
