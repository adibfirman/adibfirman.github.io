import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const myPhoto = require('../images/myPhoto.jpg')
const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        name
        tagline
        twitterUsername
        siteUrl
      }
    }
  }
`

function SEO({
  description,
  lang = 'id',
  meta = [],
  keywords,
  title,
  slug = '',
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { siteMetadata } = data.site
        const metaDescription = description || siteMetadata.description
        const url = `${siteMetadata.siteUrl}${slug}`
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: 'og:url',
                content: url,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: 'og:image',
                content: myPhoto,
              },
              {
                name: `twitter:card`,
                content: 'summary',
              },
              {
                name: `twitter:image`,
                content: myPhoto,
              },
              {
                name: `twitter:creator`,
                content: siteMetadata.twitterUsername,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
