require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Rabbit AL Friedrich`,
    description: `Rabbit is a Portland-based designer of environments for performance, film, and civic engagement.`,
    author: 'Rabbit AL Friedrich'
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    /*
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-meta-redirect`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
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
  ],
}
