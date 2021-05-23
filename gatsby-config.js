/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-ZZQLWE04YW",
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, `static`),
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ],
  siteMetadata: {
    title: "Sudo bird",
    description: "",
    siteUrl: "https://sudobird.com",
    image: "",
    social: {
      twitter: 'isthisaayush',
      instagram: 'isthisaayush'
    }
  },
}
