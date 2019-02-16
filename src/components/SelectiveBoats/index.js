import React from 'react'
import styles from './styles.module.css'

export default ({ data }) => {
  const boatList = data.allMarkdownRemark.edges.map(boat => {
    const { id, excerpt } = boat.node
    const { type, name, path } = boat.node.frontmatter
    return (
      <section key={id} className={styles.boat}>
        <h2>{type}</h2>
        <p>{name}</p>
        <p>{excerpt}</p>
        
      </section>
    )
  })
  return boatList
}
