import React from 'react'
import { Router } from "@reach/router"
import Account  from '../components/Account'
import Login  from '../components/Account/Login'
import Profile  from '../components/Account/Profile'
import Register from '../components/Account/Register'
//import { Account, Login, Profile, Register } from "../components"
import {Helmet} from "react-helmet";

const AccountPage = () => (
  <>
   <Helmet>
      <title>Set Sail - Account</title>
    </Helmet> 
  <Router>
    <Account path="/account/profile" component={Profile} />
    <Register path="/account/register" />
    <Login path="/account/login" />
  </Router>
  </>
)

export default AccountPage