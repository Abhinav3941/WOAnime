import React from 'react'

import styles from '@/components/buton/buton.module.css'
import Link from 'next/link'

const Buton = ({text , url}) => {
  return (
    <Link href={url}>
    <button  className={styles.container}>{text}</button>
    </Link>
  )
}

export default Buton;
