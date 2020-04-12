import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'

import * as styles from './styles'

const FONT_SIZE_ICON = '30'
export function Contact({ className, iconColor }) {
  return (
    <div css={styles.container} className={className}>
      <OutboundLink
        href="https://twitter.com/dibfirman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoTwitter fontSize={FONT_SIZE_ICON} color={iconColor} />
      </OutboundLink>
      <OutboundLink
        href="https://www.instagram.com/adibfirman/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoInstagram fontSize={FONT_SIZE_ICON} color={iconColor} />
      </OutboundLink>
      <OutboundLink
        href="https://github.com/adibfirman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoGithub fontSize={FONT_SIZE_ICON} color={iconColor} />
      </OutboundLink>
      <OutboundLink
        href="https://www.linkedin.com/in/adibfirman/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoLinkedin fontSize={FONT_SIZE_ICON} color={iconColor} />
      </OutboundLink>
    </div>
  )
}
