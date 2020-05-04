import React from 'react'
import MdArrowDropleft from 'react-ionicons/lib/MdArrowDropleft'
import MdArrowDropright from 'react-ionicons/lib/MdArrowDropright'

import { myPhoto } from '../../components/seo'
import { BaseFooter, Navigation, BaseNavigation, BaseDesc } from './styles'

const ICON_SIZE = '30'

function Footer({ pageContext }) {
  const { nextPost, prevPost } = pageContext

  return (
    <>
      <BaseFooter>
        <img src={myPhoto} alt="my profile" />
        <BaseDesc>
          <h3>Adib Firman</h3>
          <p>
            Web Development, Software Engineering and <br />
            Jr Developer For Life
          </p>
        </BaseDesc>
      </BaseFooter>
      <BaseNavigation>
        {nextPost ? (
          <Navigation to={nextPost.pathName} className="font-sniglet">
            <MdArrowDropleft color="#673ab79c" fontSize={ICON_SIZE} />
            <span>{nextPost.title}</span>
          </Navigation>
        ) : (
          <span />
        )}
        {prevPost ? (
          <Navigation to={prevPost.pathName} className="font-sniglet">
            <span>{prevPost.title}</span>
            <MdArrowDropright color="#673ab79c" fontSize={ICON_SIZE} />
          </Navigation>
        ) : (
          <span />
        )}
      </BaseNavigation>
    </>
  )
}

export default Footer
