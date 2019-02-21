import React from "react";
/* import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image' */
import styles from "./styles.module.css";

export default () => (
  <div className={styles.filter}>
    <select className={styles.option}>
      <option value="volvo">Duration</option>
      <option value="saab">3 days</option>
      <option value="opel">7 days</option>
      <option value="audi">14 days</option>
    </select>

    <select className={styles.option}>
      <option value="volvo">Min Capacity</option>
      <option value="saab">8</option>
      <option value="opel">10</option>
      <option value="audi">12</option>
    </select>

    <select className={styles.option}>
      <option value="volvo">Max price</option>
      <option value="saab">2500</option>
      <option value="opel">3500</option>
      <option value="audi">4500</option>
    </select>

    <select className={styles.option}>
      <option value="volvo">Type</option>
      <option value="saab">Monohull</option>
      <option value="opel">Catamaran</option>
      <option value="audi">Motorboat</option>
    </select>

    <select className={styles.option}>
      <option value="volvo">Model</option>
      <option value="saab">Sun Odyssey</option>
      <option value="opel">Oceanis</option>
      <option value="audi">Bavaria</option>
    </select>

    <select className={styles.option}>
      <option value="volvo">Cabins</option>
      <option value="saab">2</option>
      <option value="opel">3</option>
      <option value="audi">4</option>
      <option value="audi">5</option>
    </select>
  </div>
);
