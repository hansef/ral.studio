require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Rabbit AL Friedrich`,
    description: ``,
    author: 'Rabbit AL Friedrich'
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-meta-redirect`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5sjn9yvxijup`,
        accessToken: 'iGwOlXhR2kpxeHSIZSZQRgJyFTOn5YblVoFWdcKtqFk',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-DF836M95R5'
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/fonts/*': [
            'Cache-Control: public',
            'Cache-Control: max-age=365000000',
            'Cache-Control: immutable',
          ],
        },
      },
    },
  ],
}
