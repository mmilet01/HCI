import React from "react";
import { Link, navigate } from "gatsby";
import styles from "./styles.module.css";
import { handleRegister, isLoggedIn } from "../../../utils/auth";
import RegisterForm from "./RegisterForm";
import Layout from "../../Layout";

class Login extends React.Component {
  state = {
    username: ``,
    email: ``,
    password: ``,
    repeatPassword: ``
  };

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    handleRegister(this.state);
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/account/profile`);
    }

    return (
      <Layout>
        <div className={styles.registerForm}>
          <RegisterForm
            handleUpdate={e => this.handleUpdate(e)}
            handleSubmit={e => this.handleSubmit(e)}
          />
          <Link to="/account/login" className={styles.registerLink}>
            Already have an account? Login now!
          </Link>
        </div>
      </Layout>
    );
  }
}

export default Login;
