import React, { Component } from "react";
import styles from "./styles.module.css";
import { Link } from "gatsby";

class CityList extends Component {
  state = {
    search: ""
  };

  render() {
    var { cities } = this.props;
    const { search } = this.state;

    const cityList = cities
      .filter(city => {
        return city.node.frontmatter.title
          .toUpperCase()
          .includes(search.toUpperCase());
      })
      .map(city => {
        return (
          <div key={city.node.id} className={styles.post}>
            <h1 className={styles.title}>{city.node.frontmatter.title}</h1>
            <h4>{city.node.frontmatter.date}</h4>
            <div className={styles.postContainer}>
              <p>{city.node.excerpt}</p>
              <img
                src={city.node.frontmatter.image.publicURL}
                className={styles.postImage}
                alt="Destination"
              />
            </div>
            
            <div className={styles.divbutton}>
              <Link className={styles.links} to={city.node.frontmatter.path}>
                <button type="button" className={styles.button}>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        );
      });
    return (
      <div>
        <input
          type="search"
          value={this.state.search}
          onChange={e => this.setState({ search: e.target.value })}
          placeholder="Search"
        />
        <div className={styles.cityList}>{cityList}</div>
      </div>
    );
  }
}

export default CityList;
