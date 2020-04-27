import React from 'react'
import LogoLinkedin from 'react-ionicons/lib/LogoLinkedin'
import LogoGithub from 'react-ionicons/lib/LogoGithub'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'

import { Wrapper, BaseSosmed } from './styles'

const FONT_SIZE_ICON = '30'

function Header() {
  return (
    <Wrapper>
      <h1>@adibfirman</h1>
      <BaseSosmed>
        <LogoLinkedin fontSize={FONT_SIZE_ICON} />
        <LogoGithub fontSize={FONT_SIZE_ICON} />
        <LogoTwitter fontSize={FONT_SIZE_ICON} />
        <LogoInstagram fontSize={FONT_SIZE_ICON} />
      </BaseSosmed>
    </Wrapper>
  )
}

export default Header
