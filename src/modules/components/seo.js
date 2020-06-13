import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export const myPhoto = `https://avatars1.githubusercontent.com/u/24794196?s=460&u=b784734314dc3a94ee2f68b5e8fbd98bda4d45c0&v=4`
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
  title,
  slug = '',
  image = myPhoto,
  type = 'blog',
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { siteMetadata } = data.site
        const desc = description || siteMetadata.tagline
        const url = `${siteMetadata.siteUrl}${slug}/`

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            meta={[
              // -- general tag --
              {
                name: 'referrer',
                content: 'no-referrer-when-downgrade',
              },
              // -- primary tags --
              {
                name: 'title',
                content: title,
              },
              {
                name: 'description',
                content: desc,
              },
              // -- OG TAG --
              {
                name: 'og:site_name',
                content: 'adibfirman',
              },
              {
                name: 'og:description',
                content: desc,
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
                property: `og:type`,
                content: type,
              },
              {
                property: 'og:image',
                content: image,
              },
              // -- Twitter TAG --
              {
                name: `twitter:card`,
                content: 'summary_large_image',
              },
              {
                property: 'twitter:url',
                content: url,
              },
              {
                name: `twitter:image`,
                content: image,
              },
              {
                name: `twitter:creator`,
                content: siteMetadata.twitterUsername,
              },
              {
                name: `twitter:site`,
                content: siteMetadata.twitterUsername,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: desc,
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
