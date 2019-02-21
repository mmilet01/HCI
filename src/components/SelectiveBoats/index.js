import React from "react";
import styles from "./styles.module.css";
import { Link } from "gatsby";

export default ({ data }) => {
  const boatList = data.allMarkdownRemark.edges.map(boat => {
    const { id, excerpt } = boat.node;
    const {
      type,
      name,
      path,
      image,
      capacity,
      price,
      yearOfProduction
    } = boat.node.frontmatter;
    return (
      <section key={id} className={styles.boat}>
        <h2 className={styles.boatTitle}>
          {type} - {name}
        </h2>
        <div className={styles.boatCard}>
          <img src={image.publicURL} className={styles.boatImg} alt="imgg" />
          <div>
            <p>Capacity: {capacity}</p>
            <p>Price per week: {price}€</p>
            <p>Year of production: {yearOfProduction}</p>
            <Link to={path}>
              <button className={styles.button}>Details</button>
            </Link>
          </div>
        </div>
      </section>
    );
  });
  return boatList;
};
