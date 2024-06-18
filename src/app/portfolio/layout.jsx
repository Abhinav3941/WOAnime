import React from 'react'
import styles from '@/app/portfolio/page.module.css'

const layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.maintitle}>Our Work</h1>
      {children}
    </div>
  )
}

export default layout
