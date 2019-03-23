import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'

import SEO from '../components/seo'
import { IS_MOBILE } from '../configs/constants'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Contact } from '../components/Contact'

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
const styles = {
  layoutHome: css`
    display: flex;
    font-family: var(--font-portofolio);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 75vh;
    text-align: center;

    .title {
      font-size: 50px;
      margin: 0;
    }

    @media ${IS_MOBILE} {
      .title {
        font-size: 30px;
        margin: 0 0 10px 0;
      }
    }
  `,
  contactContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  contact: css`
    width: 40vh;
  `,
}
