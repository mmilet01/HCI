import React from 'react'
/* import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image' */
import Image1 from './image1'
import Image2 from './image2'
import Image3 from './image3'
import styles from './styles.module.css'
import { Link } from 'gatsby'

export default () => (
  <div>
    <h1 className={styles.boatOffer}>Boat Offer</h1>

    <div className={styles.ImageContainer}>

      <div className={styles.singleImage}>
    
      <Link to="monohullpage">
      <p className={styles.boatName}>Monohull</p>
        <Image1 />
      </Link>
        
      </div>

      <div className={styles.singleImage}>

      <Link to="/catamaranpage">
      <p className={styles.boatName}>Catamaran</p>

        <Image2 />
      </Link>
        
      </div>

      <div className={styles.singleImage}>

        <Link to="/motorboatpage">
          <p className={styles.boatName}>Motorboat</p>
          <Image3 />
        </Link>

      </div>
    </div>
  </div>
)
