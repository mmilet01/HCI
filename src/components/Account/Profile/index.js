import React from 'react'
import Layout from '../../../components/layout'
import {logout} from '../../../utils/auth'
import {navigate} from "gatsby"


const Profile = () => (
  <Layout>
    <div>
      <h1>Profile</h1>
    </div>

    <a
      href="/"
      onClick={event => {
        event.preventDefault()
        logout(() => navigate(`/account/login`))
      }}
    >
      Log out
    </a>


  </Layout>
)
export default Profile
