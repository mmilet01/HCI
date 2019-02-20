import React from 'react'
import styles from './styles.module.css'

export default ({ data }) => {
  const boatList = data.allMarkdownRemark.edges.map(boat => {
    const { id, excerpt } = boat.node
    const { type, name, path, image } = boat.node.frontmatter
    return (
      <section key={id} className={styles.boat}>
        <h2>{name}</h2>
        <img src={image.publicURL}
        className={styles.boatImg} />
        <p>{excerpt}</p>
        
      </section>
    )
  })
  return boatList
}
