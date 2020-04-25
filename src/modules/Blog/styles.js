import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const BaseBlogs = styled.div`
  position: relative;
  z-index: 1;
  background-color: #fcfdfe;
`

export const BaseIBlogPosts = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-bottom: 3em;
`

export const TitleNotes = styled.div`
  padding-top: 30px;
  font-size: 1.2em;
  text-transform: uppercase;
`

export const BaseListNote = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Post = styled(Link)`
  position: relative;
`

export const TitlePost = styled.div`
  position: absolute;
  font-size: 1.6em;
  top: 2.3em;
  left: 0.7em;
  width: 55%;
`

export const BaseTimePost = styled.small`
  position: absolute;
  font-size: 1.3em;
  bottom: 0.8em;
  right: 2em;
`

export const SpoilerPost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 2em;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 4em 2em 2em 1em;
`
