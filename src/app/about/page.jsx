import React from 'react'
import Image from "next/image";
import styles from './page.module.css'
import Tokyo from "/public/tokyo.jpg"
import Buton from '@/components/buton/buton';

const about = () => {
  return (
    <div className={styles.container}>
    <div className={styles.tokyo_cont}>
      <Image src={Tokyo} fill={true} alt="tokyo ghoul" className={styles.tokyo}></Image>
    <div className={styles.tokyo_txt}>
      <h1 className={styles.h1txt}>Digital Universe </h1>
      <h2 className={styles.h2txt}>Experience the world of Art</h2>
    </div>
    </div>
    <div className={styles.txt_cont}>
    <div className={styles.txt_item}>
      <h1 className={styles.text_title}>
    Who Are We?</h1>
      <p className={styles.text_desc}>Welcome to PIXHIVE, your ultimate destination for discovering, sharing, and downloading high-quality images. We are a passionate team of photographers, designers, and tech enthusiasts who believe in the power of visual storytelling. Our mission is to create a vibrant community where creativity flourishes and inspiration is found in every corner. Our journey began with a simple idea: to build a platform where everyone, from professional photographers to casual enthusiasts, can share their work with the world</p>
    </div>



    <div className={styles.txt_item}>
    <h1 className={styles.text_title}>
    What Do We Do?</h1>
      <p className={styles.text_desc}>
      At PIXHIVE, we offer a comprehensive platform for exploring, sharing, and downloading images. We provide an easy-to-use interface for photographers and artists to upload their work. Whether you’re a professional or a hobbyist, you can showcase your photos to a global audience and gain recognition for your talent. Our curated collections and advanced search features make it simple to find the images you’re looking for. Browse through categories, discover trending photos, and get inspired by the work of other creatives
      </p>
      <Buton url="./contact" text ="Contact" />
      
    </div>
     </div>
     </div>
   
  )
}

export default about
