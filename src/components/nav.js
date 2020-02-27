import React from "react"
import {Link} from "gatsby"

const Nav = () => (
  <nav className="navbar navbar-light bg-light static-top">
    <div className="container">
      <Link to="/" className="navbar-brand">Start Bootstrap</Link>
      <a href="https://app.open-dating.org" className="btn btn-primary">Sign In</a>
    </div>
  </nav>
)

export default Nav
