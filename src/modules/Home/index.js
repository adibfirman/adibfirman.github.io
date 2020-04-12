import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'

import SEO from '../components/seo'
import { Header } from './Header'
import { Contact } from '../components/Contact'
import * as Styled from './styles'
import Footer from './Footer'

const FONT_SIZE_ICON = '30'

function Home({ data }) {
  const { name, author } = data.site.siteMetadata

  return (
    <Styled.Wrapper>
      <SEO title={`${author} — Web Development`} />
      <Header />
      <Styled.BaseContent>
        <Styled.Title className="font-coustard">
          Hi, I&apos;m {name}
        </Styled.Title>
        <p className="font-coustard">
          Web Development, Software Engineering and Jr Developer For Life
        </p>
        <Styled.BaseContact>
          <h5>Get In Touch</h5>
          <Styled.BaseListContact>
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
          </Styled.BaseListContact>
        </Styled.BaseContact>
      </Styled.BaseContent>
      <Footer />
    </Styled.Wrapper>
  )
}

export default Home
