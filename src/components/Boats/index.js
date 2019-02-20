import React from 'react'
import styles from './styles.module.css'
import { Link } from 'gatsby'


export default ({ data }) => {
  const boatList = data.allMarkdownRemark.edges.map(boat => {
    const { id, excerpt } = boat.node
    const { type, name, path } = boat.node.frontmatter
    return (
      <section key={id} className={styles.boat}>
        <h2>{type}</h2>
        <img src={boat.node.frontmatter.image.publicURL}
        className={styles.boatImg}/>
        <p>{name}</p>
        <p>{excerpt}</p>
        <p>Path : {path}</p>
        <Link to={path}>
                <button type="button">
                  Read More
                </button>
        </Link>
      </section>
    )
  })
  return boatList
}
