import React from "react";
import styles from "./styles.module.css";
import { navigate } from "@reach/router";
/* import Layout from "../../../Layout";
 */
export default ({ handleSubmit, handleUpdate }) => (
  <form
    className={styles.form}
    method="post"
    onSubmit={event => {
      handleSubmit(event);
      navigate(`/account/profile`);
    }}
  >
    <div className={styles.tooltip}>
      <input
        className={styles.formInput}
        type="text"
        name="firstName"
        placeholder="First Name"
        autoComplete="off"
        onChange={handleUpdate}
      />
      <span className={styles.tooltiptext} />
    </div>

    <div className={styles.tooltip}>
      <input
        className={styles.formInput}
        type="text"
        name="firstName"
        placeholder="Last Name"
        autoComplete="off"
        onChange={handleUpdate}
      />
      <span className={styles.tooltiptext} />
    </div>

    <div className={styles.tooltip}>
      <input
        className={styles.formInput}
        type="text"
        name="username"
        placeholder="Username"
        autoComplete="off"
        onChange={handleUpdate}
      />
      <span className={styles.tooltiptext}>
        Username needs to be atleast 3 characters long
      </span>
    </div>
    <div className={styles.tooltip}>
      <input
        className={styles.formInput}
        type="email"
        name="email"
        placeholder="E-mail"
        autoComplete="off"
        onChange={handleUpdate}
      />
      <span className={styles.tooltiptext}>@ sign is a must</span>
    </div>
    <div className={styles.tooltip}>
      <input
        className={styles.formInput}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleUpdate}
      />
      <span className={styles.tooltiptext}>
        Password has to be longer than 5 characters
      </span>
    </div>
    <div className={styles.tooltip}>
      <input
        className={styles.formInput}
        type="password"
        name="repeatPassword"
        placeholder="Repeat Password"
        onChange={handleUpdate}
      />
      <span className={styles.tooltiptext}>Passwords must match</span>
    </div>
    <input className={styles.formButton} type="submit" value="Register" />
  </form>
);
