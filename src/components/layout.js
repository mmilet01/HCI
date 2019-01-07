import React from 'react'
/* import { StaticQuery, graphql } from 'gatsby'
 */ import Footer from './Footer'

import Header from './Header'
// import './layout.css'

export default ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)
