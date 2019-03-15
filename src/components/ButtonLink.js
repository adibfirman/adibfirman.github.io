import React from 'react'
import { Link } from 'gatsby'

const ButtonLink = ({ children, ...props }) => (
  <div className="button-link">
    <Link {...props}>{children}</Link>
  </div>
)

export default ButtonLink
