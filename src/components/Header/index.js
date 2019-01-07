/* import { Link } from 'gatsby'
 */ import React from 'react'
/* import cn from 'classnames'
 */ import styles from './styles.module.css'
import SetSail from './SetSail'
import Nav from './Nav'
/* import Image from '../image'
 */
export default () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <SetSail />
      <Nav />
    </div>
  </header>
)
