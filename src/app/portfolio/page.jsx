import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallary</h1>
      <div className={styles.items}  >
        <Link href="/portfolio/illustraions"  className={styles.item}>
        <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/Anime" className={styles.item}>
        <span className={styles.title}>Anime</span>
        </Link>
        <Link href="/portfolio/Wallpaper"  className={styles.item}>
        <span className={styles.title}>Wallpaper</span>
        </Link>

        </div> 
   
    </div>
  );
};

export default portfolio;
