require('dotenv').config()
 
module.exports = {
  siteMetadata: {
    title: `Jax Bucerias`,
    description: `Home of the Best Live Music in the Bay!`,
    keywords: 'Jax, Live Music, Bands, Mexico, Bucerias, Nayarit, Jalisco, Nightlife, Entertainment',
    siteUrl: 'https://www.jaxbucerias.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jax Bucerias - Home Of The Best Live Music In The Bay!',
        short_name: `Jax Bucerias`,
        background_color: `#000000`,
        lang: `en`,
        theme_color: `#000000`,
        start_url: `/`,
        display: `standalone`,
        cache_busting_mode: 'none',
        icon: `src/assets/images/circle-logo-no-bg.png`,
        include_favicon: true,
        icon_options: {
          purpose: `any maskable`,
        }
      }
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GATSBY_GRAPHCMS_ENDPOINT,
        token: process.env.GATSBY_GRAPHCMS_TOKEN,
      },
    },
  ],
}
