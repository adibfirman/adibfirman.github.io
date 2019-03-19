import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const IndexPage = ({ data }) => {
  const { name } = data.site.siteMetadata

  React.useEffect(() => {
    document.querySelector('html').removeAttribute('class')
  }, [])

  return (
    <Fragment>
      <SEO title="Adib Firman — Frontend Web Developer" />
      <Header />
      <div className="layout-home">
        <h4 className="title">Hi, I'm {name}</h4>
        <label>
          FRONTEND WEB DEVELOPER, BEGINNER WRITER, AND A MAN LOVING A CAT
        </label>
        <div className="contact-container">
          <h5>Get In Touch</h5>
          <Contact className="contact" />
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query GetSiteData {
    site {
      siteMetadata {
        name
      }
    }
  }
`

export default IndexPage
