import React from "react";
import { navigate } from "@reach/router";
import styles from "./styles.module.css";
import { getCurrentUser, logout } from "../../../utils/auth";
import Layout from "../../Layout";

export default () => {
  const {
    username,
    firstName,
    lastName,
    email,
    dob,
    pictureUrl,
    job
  } = getCurrentUser();

  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.left}>
          <img
            className={styles.profilePicture}
            src={pictureUrl}
            alt="profilePicture"
          />
          {/*           <p className={styles.bio}>{bio}</p>
           */}{" "}
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <div className={styles.labels}>
              <p>username</p>
              <p>first name</p>
              <p>last name</p>
              <p>email</p>
              <p>date of birth</p>
              <p>job</p>
            </div>
            <div className={styles.data}>
              <p>{username}</p>
              <p>{firstName}</p>
              <p>{lastName}</p>
              <p>{email}</p>
              <p>{dob}</p>
              <p>{job}</p>
            </div>
          </div>
          <a
            href="/"
            className={styles.logout}
            onClick={event => {
              event.preventDefault();
              logout(() => navigate(`/account/login`));
            }}
          >
            Log out
          </a>
        </div>
      </div>
    </Layout>
  );
};
