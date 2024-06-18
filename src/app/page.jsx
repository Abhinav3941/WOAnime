"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Gojo from "/public/gojo.jpg"
import Buton from "@/components/Buton/Buton";


export default function Home() {
  return (
    <div  className={styles.container}>
      <div className={styles.items}>
      <h1 className={styles.title}>Unlock a World of Visual Inspiration  </h1>
     <p className={styles.desc}>Dive into our collection of high-quality images,curated to spark creativity and elevate your projects , personal arts and websites.
      </p>
      <Buton text="Explore More" url ="/portfolio" />
      </div>
    <div className={styles.text}>
      </div>
    <div  className={styles.items} >
   <Image
        src={Gojo}
        className={styles.gojo1}
        style={{ transform: 'scale(1)', transition: 'transform 0.3s ease' , height:500 , width : 750  

        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        alt="gojo satoru"
      />
    </div>
   </div>
  );
}
