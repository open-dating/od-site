import React from "react"
import PropTypes from "prop-types"

const Section = ({title, children}) => (
  <section>
    <div className="container">
      <h1>{title}</h1>
      {children}
    </div>
  </section>
)

Section.defaultProps = {
  title: ``,
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Section
