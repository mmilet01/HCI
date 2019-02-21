import React from "react";
import Container from "../../Container";
import Nav from "./Nav";
import NavLink from "./NavLink";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import navLinks from "../../../config/menu";
import SetSail from "../Header/SetSail";
/* import { PrivateRoute } from "components";
 */
export default () => {
  const nav = navLinks.map(link => {
    if (link.private) {
      return (
        /*   <PrivateRoute
          key={link.path}
          render={() => (
            <NavLink
              key={link.path}
              to={link.path}
              className={styles.PrivateLink}
              activeClassName={styles.PrivateLink_active}
            >
              {link.text}
            </NavLink>
          )}
        /> */
        <div />
      );
    }

    return (
      <NavLink key={link.path} to={link.path}>
        {link.text}
      </NavLink>
    );
  });

  return (
    <header className={styles.headerr}>
      <Container className={styles.containerr}>
        <SetSail />
        <Nav>{nav}</Nav>
      </Container>
    </header>
  );
};
