import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { IS_TABLET, IS_MOBILE, IS_MOBILE_SMALL } from 'configs/constants'

export const BaseBlogs = styled.div`
  position: relative;
  z-index: 1;
  background-color: #fcfdfe;
`

export const BaseIBlogPosts = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-bottom: 3em;

  @media ${IS_TABLET} {
    width: 85%;
  }
`

export const TitleNotes = styled.div`
  padding-top: 30px;
  font-size: 1.2em;
  text-transform: uppercase;
`

export const BaseListNote = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${IS_MOBILE} {
    display: flex;
    flex-direction: column;
  }
`

export const Post = styled(Link)`
  position: relative;
`

export const TitlePost = styled.strong`
  position: absolute;
  font-size: 1.8em;
  top: 0;
  left: 0;
  width: 63%;
  padding-top: 17%;
  padding-left: 4%;

  @media ${IS_MOBILE_SMALL} {
    font-size: 1.5em;
  }
`

export const BaseTimePost = styled.small`
  position: absolute;
  font-size: 1.5em;
  bottom: 0;
  right: 0;
  padding-right: 10%;
  padding-bottom: 4%;
`

export const SpoilerPost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 2.4em;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 35% 18% 16% 13%;
`
