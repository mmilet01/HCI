import React from 'react'
import Layout from '../../../components/layout'
import {handleLogin}  from "../../../utils/auth"
import {navigate} from "gatsby"



class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
    bShowError: false
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if(!handleLogin(this.state)){
      this.setState({
        bShowError: true
      })
    }
    else{
      navigate(`/account/profile`)
    }
  }

  
  render() {
    return(
      <Layout>
        <form
          method="post"
          onSubmit={event => { this.handleSubmit(event) }} 
          onChange={e => this.handleUpdate(e)}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
          />
          <input type="submit" value="Login" />
        </form>
      </Layout>
    )
  }
}
export default Login
