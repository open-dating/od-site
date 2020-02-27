import React from "react"
import PropTypes from "prop-types"

import 'bootstrap/dist/css/bootstrap.css'
import 'simple-line-icons/css/simple-line-icons.css'
import '../scss/landing-page.scss'
import Footer from './footer'
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav/>
      {children}
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
