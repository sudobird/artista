/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, `static`),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ],
  siteMetadata: {
    title: "Sudo bird",
    description: "",
    url: "https://sudobird.com",
    image: "",
    social: {
      twitter: 'isthisaayush',
      instagram: 'isthisaayush'
    }
  },
}
