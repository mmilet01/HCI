import React from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.css'

export default () => (
  <div className={styles.nav}>
    <Link className={styles.links} to="/">
      Home
    </Link>
{/*     <Link className={styles.links} to="/about">
      About
    </Link>
    <Link className={styles.links} to="/boats">
      Boats
    </Link>
    <Link className={styles.links} to="/crew">
      Crew
    </Link> */}
    <Link className={styles.links} to="/blog">
      Destinations
    </Link>
    <Link className={styles.links} to="/account/profile">
      Account
    </Link>
  </div>
)
