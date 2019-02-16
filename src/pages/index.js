import React from 'react'
/* import { Link } from 'gatsby'
 */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Layout from '../components/layout'
import BoatOffer from '../components/BoatOffer'
import CrewOffer from '../components/CrewOffer'

import styles from '../styles/pages/naslovna.module.css'

import Image1 from '../components/Slideshow/image1'
import Image2 from '../components/Slideshow/image2'
import Image3 from '../components/Slideshow/image3'
import Image4 from '../components/Slideshow/image4'
import Image5 from '../components/Slideshow/image5'

// import SEO from '../components/seo'
export default () => {
  const carousel = [
    <Image1 />,
    <Image2 />,
    <Image3 />,
    <Image4 />,
    <Image5 />,
  ].map(element => (
    <div key={element} className={styles.ImageContainer}>
      <div className={styles.singleImage}>{element}</div>
    </div>
  ))

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Layout>
      {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
      <h1>Welcome to SET SAIL</h1>
      <p>Take a look at some of moments</p>

      <div>
        <Slider {...sliderConfig} slidesToShow={1}>
          {carousel}
        </Slider>
      </div>

      <h3>A perfect place to to turn your dreams into reality</h3>
      <h3>No time to waste !!</h3>
      <h3>Book a boat, hire the crew and SET SAIL</h3>

      <div>
        <BoatOffer />
        <CrewOffer />
      </div>
    </Layout>
  )
}
