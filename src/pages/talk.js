import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import SEO from '../modules/components/seo'
import { Header } from '../modules/components/Header'
// import { Footer } from '../modules/components/Footer'
import * as styles from '../styles/pages/talks'

const talks = [
  {
    date: 'September 25, 2019',
    link: '',
    title: 'Avoid these when using hooks',
    location: 'Shopee Indonesia',
  },
  {
    date: 'January 31, 2020',
    link: '',
    title: 'Deep Dive with useCallback and useMemo',
    location: 'Facebook Lab Innovation Indonesia',
  },
]

export default function TalkPage({ data }) {
  const { author } = data.site.siteMetadata

  React.useEffect(() => {
    document.querySelector('html').removeAttribute('class')
  }, [])

  return (
    <Fragment>
      <SEO
        title={`${author} — Frontend Web Developer`}
        description="List of talks which i have been bring it."
      />
      <Header />
      <div css={styles.layoutHome}>
        <h2>My talks at,</h2>
        <ul css={styles.wrapperList}>
          {talks.map((talk, i) => (
            <li key={i} css={styles.theTalk}>
              <span css={styles.date}>{talk.date}</span>
              <a css={styles.title} target="__blank" href={talk.link}>
                "{talk.title}"
              </a>
              <span>{talk.location}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* <Footer /> */}
    </Fragment>
  )
}

export const query = graphql`
  query GetSiteTalks {
    site {
      siteMetadata {
        author
      }
    }
  }
`
