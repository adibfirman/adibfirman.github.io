import React, { Fragment } from 'react'
import LogoHeart from 'react-ionicons/lib/IosHeart'

import SEO from '../components/seo'
import { Header } from '../components/Header'
import { Contact } from '../components/Contact'
import * as styles from './styles'

const gatsbyIcon = require('media/gatsby-icon.png')

function Home({ data }) {
  const { name, author } = data.site.siteMetadata

  React.useEffect(() => {
    document.querySelector('html').removeAttribute('class')
  }, [])

  return (
    <Fragment>
      <SEO title={`${author} — Web Development`} />
      <Header />
      <div css={styles.layoutHome}>
        <h4 className="title">Hi, I'm {name}</h4>
        <span>
          Web Development, Software Engineering and Jr Developer For Life
        </span>
        <div css={styles.contactContainer}>
          <h5>Get In Touch</h5>
          <Contact css={styles.contact} />
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

function Footer() {
  const YEAR = new Date().getFullYear()

  return (
    <div css={styles.footer}>
      <span>
        &copy; {YEAR} Made With <LogoHeart fontSize="15" /> And{' '}
        <a
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gatsbyIcon} className="gatsby-icon" alt="gatsby-icon" />
        </a>
      </span>
    </div>
  )
}

export default Home
