import React from "react"
import {Link} from "gatsby"

const Footer = () => (
  <footer className="footer bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <Link to="/">About</Link>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <a href="https://github.com/orgs/open-dating">Github</a>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <Link to="/tos">Terms of Use</Link>
            </li>
            <li className="list-inline-item">&sdot;</li>
            <li className="list-inline-item">
              <Link to="/tos">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <a href="#">
                <i className="fab fa-facebook fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="#">
                <i className="fab fa-twitter-square fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-instagram fa-2x fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
