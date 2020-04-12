module.exports = {
  siteMetadata: {
    title: `adibfirman`,
    description: `Personal web and blog by Adib Firman`,
    author: `@adibfirman`,
    name: `Adib Firman`,
    tagline: `a study note from a man who write a code`,
    siteUrl: 'https://adibfirman.github.io',
    twitterUsername: '@dibfirman',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: './modules/components',
          configs: './configs',
          pages: './pages',
          modules: './modules',
          media: './media',
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adibfirman.github.io`,
        short_name: `personalpage`,
        start_url: `/`,
        background_color: `#60B0F4`,
        theme_color: `#60B0F4`,
        display: `minimal-ui`,
        icon: `src/media/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-135917039-1',
        head: true,
      },
    },
  ],
}
