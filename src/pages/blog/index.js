import React from 'react'
import { Link } from 'gatsby'

import SEO from '../../components/seo'
import HeaderBlog from '../../components/HeaderBlog'

export default function Blog() {
  document.querySelector('html').setAttribute('class', 'layout-blog')
  return (
    <div className="container container-blog">
      <SEO title="@adibfirman — A personal blog by Adib Firman" />
      <HeaderBlog />

      <div className="container-content">
        <h3 className="title">
          <Link to="/blog/my-first-post">A Complete Guide to useEffect</Link>
        </h3>
        <small>
          <strong>09 Mar 2019</strong> | 100 min read
        </small>
        <div>Effects are a part of your data flow.</div>
      </div>
    </div>
  )
}
