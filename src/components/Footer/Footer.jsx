import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';


const footer = () => {
  return (


<div className={styles.container}>
      <div> @Abhinav Singh</div>

  <div>
    <div  className={styles.imgcont}>

      <div className={styles.imgwrap}>
      <Link href="https://www.facebook.com/profile.php?id=100007152017429" passHref>
      <div className={styles.imgwrap} >  <Image src="/1.png"  fill={true}  alt = "logo1"></Image>  </div>
      </Link>
      </div>


      <div className={styles.imgwrap}>
      <Link href="https://www.instagram.com/01abhiinav/" passHref>
      <div className={styles.imgwrap} >  <Image src="/2.png"  fill={true}  alt = "logo1"></Image>  </div>
      </Link>
      </div>
     
     
      <div className={styles.imgwrap}>
      <Link href="https://x.com/01Abhiinav" passHref>
      <div className={styles.imgwrap} >  <Image src="/1.png"  fill={true}  alt = "logo1"></Image>  </div>
      </Link>
      </div>
      
      
      <div className={styles.imgwrap}>
      <Link href="https://www.youtube.com/channel/UCTenzH7X1Rhpgm0z2858-7w" passHref>
      <div className={styles.imgwrap} >  <Image src="/4.png"  fill={true}  alt = "logo1"></Image>  </div>
      </Link>
      </div>

    
    </div>
  </div>
</div>
  );
};

export default footer
