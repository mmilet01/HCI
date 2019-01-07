import React from 'react'
import Image from '../image'
import styles from './styles.module.css'

export default () => (
  <div className={styles.SetSail}>
    <h1>SET SAIL</h1>
    {/* <img className={styles.img} src="./images/rad.png" /> */}
    <div className={styles.logo}>
      <Image />
    </div>
  </div>
)
