import React from 'react'
import styles from './styles.module.css'
import Image from '../image'

export default () => (
  <footer className={styles.footer}>
    <p className={styles.footerp}>SET SAIL &copy; 2018</p>
    <div className={styles.logo2}>
      <Image />
    </div>
  </footer>
)
