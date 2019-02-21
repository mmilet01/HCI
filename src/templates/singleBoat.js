import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styles from "./styles.module.css";

import Slider from "react-slick";

import Image1 from "../components/Slideshow/image6";
import Image2 from "../components/Slideshow/image7";
import Image3 from "../components/Slideshow/image8";
import Image4 from "../components/Slideshow/image9";
import Image5 from "../components/Slideshow/image10";
import Image6 from "../components/Slideshow/image11";

export default ({ data }) => {
  const post = data.markdownRemark;

  const carousel = [
    <Image1 />,
    <Image2 />,
    <Image3 />,
    <Image4 />,
    <Image5 />,
    <Image6 />
  ].map(element => (
    <div key={element} className={styles.ImageContainer}>
      <div className={styles.singleImage}>{element}</div>
    </div>
  ));

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Layout>
      <h1 className={styles.title}>{post.frontmatter.name}</h1>
      <div className={styles.singleBoat}>
        <img
          src={post.frontmatter.image.publicURL}
          className={styles.mainBoatImage}
        />

        <div className={styles.details}>
          <h4>Capacity: {post.frontmatter.capacity} people</h4>
          <h4>Air Conditioning: {post.frontmatter.airCond}</h4>
          <h4>Price: {post.frontmatter.price} €</h4>
          <h4>Year of production: {post.frontmatter.yearOfProduction}</h4>
          <h4>Number of cabins: {post.frontmatter.cabins}</h4>
          <button className={styles.button}>Book</button>
        </div>
      </div>

      <div className={styles.slider}>
        <Slider {...sliderConfig} slidesToShow={3}>
          {carousel}
        </Slider>
      </div>
    </Layout>
  );
};

export const postQuery = graphql`
  query BoatsQueryByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        type
        name
        path
        capacity
        airCond
        price
        yearOfProduction
        cabins
        image {
          publicURL
        }
      }
    }
  }
`;
