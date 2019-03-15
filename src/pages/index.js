import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

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
      <div className="layout-home">
        <h4 className="title">Hi, I'm {name}</h4>
        <label>
          FRONTEND WEB DEVELOPER, BEGINNER WRITER, AND A PERSON LOVING A CAT
        </label>
        <div className="contact-container">
          <h5>Get In Touch</h5>
          <div className="contact">
            <OutboundLink
              href="https://twitter.com/dibfirman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoTwitter fontSize={FONT_SIZE_ICON} />
            </OutboundLink>
            <OutboundLink
              href="https://www.instagram.com/adibfirman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoInstagram fontSize={FONT_SIZE_ICON} />
            </OutboundLink>
            <OutboundLink
              href="https://github.com/adibfirman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGithub fontSize={FONT_SIZE_ICON} />
            </OutboundLink>
            <OutboundLink
              href="https://www.linkedin.com/in/adibfirman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin fontSize={FONT_SIZE_ICON} />
            </OutboundLink>
          </div>
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
