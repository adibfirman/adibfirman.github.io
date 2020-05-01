import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'

import { Wrapper, BaseSosmed } from './styles'

const FONT_SIZE_ICON = '30'

function Header() {
  return (
    <Wrapper>
      <Link to="/blog">
        <h1>@adibfirman</h1>
      </Link>
      <BaseSosmed>
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
      </BaseSosmed>
    </Wrapper>
  )
}

export default Header
