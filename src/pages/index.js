import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'

import SEO from '../components/seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

const FONT_SIZE_ICON = '30'
const IndexPage = ({ data }) => {
  const { name } = data.site.siteMetadata
  return (
    <Fragment>
      <SEO title="Adib Firman — Frontend Web Developer" />
      <Header />
      <div css={styles.body}>
        <h4 css={styles.title}>Hi, I'm {name}</h4>
        <label css={styles.desc}>
          FRONTEND WEB DEVELOPER, BEGINNER WRITER, AND A PERSON LOVING A CAT
        </label>
        <div css={styles.contactContainer}>
          <h5>Get In Touch</h5>
          <div css={styles.contact}>
            <a
              href="https://twitter.com/dibfirman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoTwitter fontSize={FONT_SIZE_ICON} />
            </a>
            <a
              href="https://www.instagram.com/adibfirman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoInstagram fontSize={FONT_SIZE_ICON} />
            </a>
            <a
              href="https://github.com/adibfirman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGithub fontSize={FONT_SIZE_ICON} />
            </a>
            <a
              href="https://www.linkedin.com/in/adibfirman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin fontSize={FONT_SIZE_ICON} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

const styles = {
  contact: css`
    display: flex;
    width: 40vh;
    justify-content: space-between;
    align-items: center;
  `,
  contactContainer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  title: css`
    font-family: 'Coustard', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 50px;
    margin: 0;
    text-align: center;
  `,
  desc: css`
    font-family: 'Coustard', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
  `,
  body: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80vh;
  `,
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
