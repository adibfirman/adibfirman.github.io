import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import * as styles from '../styles/pages/talks'

export default function TalkPage({ data }) {
  const { author } = data.site.siteMetadata

  React.useEffect(() => {
    document.querySelector('html').removeAttribute('class')
  }, [])

  return (
    <Fragment>
      <SEO
        title={`${author} — Frontend Web Developer`}
        description="List of talks which i have been bring it."
      />
      <Header />
      <div css={styles.layoutHome}>
        <h2>My talks at,</h2>
        <ul css={styles.wrapperList}>
          <li css={styles.theTalk}>
            <span css={styles.date}>September 25, 2019</span>
            <a
              css={styles.title}
              target="__blank"
              href="https://avoid-these-when-using-hooks.netlify.com/"
            >
              "Avoid these when using hooks"
            </a>
            <span>Shopee Indonesia</span>
          </li>
        </ul>
        {/* <h4 className="title">Hi, I'm {name}</h4>
        <label>
          FRONTEND WEB DEVELOPER and PART TIME WRITER ON MY PERSONAL BLOG
        </label>
        <div css={styles.contactContainer}>
          <h5>Get In Touch</h5>
          <Contact css={styles.contact} />
        </div> */}
      </div>
      <Footer />
    </Fragment>
  )
}

export const query = graphql`
  query GetSiteTalks {
    site {
      siteMetadata {
        author
      }
    }
  }
`
