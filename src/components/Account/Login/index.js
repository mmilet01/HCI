import React from "react";
import Layout from "../../../components/Layout";
import { handleLogin, isLoggedIn } from "../../../utils/auth";
import { Link, navigate } from "gatsby";
import styles from "./styles.module.css";
import cn from "classnames";

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    bShowError: false
  };

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!handleLogin(this.state)) {
      this.setState({
        bShowError: true
      });
    } else {
      navigate(`/account/profile`);
    }
  }

  render() {
    const status = this.state.bShowError ? "open" : "closed";
    if (isLoggedIn()) {
      navigate(`/account/profile`);
    }
    return (
      <Layout>
        <div className={styles.loginForm}>
          <div className={cn(styles[status], styles.error)}>
            Invalid username or password. Try again.
          </div>
          <form
            className={styles.form}
            method="post"
            onSubmit={event => {
              this.handleSubmit(event);
            }}
            onChange={e => this.handleUpdate(e)}
          >
            <input
              className={styles.formInput}
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              /* onChange={handleUpdate} */
            />
            <input
              className={styles.formInput}
              type="password"
              name="password"
              placeholder="Password"
              /* onChange={handleUpdate} */
            />
            <input className={styles.formButton} type="submit" value="Login" />
          </form>
          <Link to="/account/register" className={styles.registerLink}>
            Don't have an account? Register now!
          </Link>
        </div>
      </Layout>
    );
  }
}
export default Login;
