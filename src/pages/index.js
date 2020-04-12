import React from 'react'
import { graphql } from 'gatsby'

import HomeModule from 'modules/Home'

function Home(props) {
  return <HomeModule {...props} />
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

export default Home
