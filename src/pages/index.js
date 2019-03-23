import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact'
import * as styles from '../styles/pages/home'

export default function IndexPage({ data }) {
  const { name, author } = data.site.siteMetadata

  React.useEffect(() => {
    document.querySelector('html').removeAttribute('class')
  }, [])

  return (
    <Fragment>
      <SEO title={`${author} — Frontend Web Developer`} />
      <Header />
      <div css={styles.layoutHome}>
        <h4 className="title">Hi, I'm {name}</h4>
        <label>
          FRONTEND WEB DEVELOPER and PART TIME WRITER ON MY PERSONAL BLOG
        </label>
        <div css={styles.contactContainer}>
          <h5>Get In Touch</h5>
          <Contact css={styles.contact} />
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
        author
      }
    }
  }
`
