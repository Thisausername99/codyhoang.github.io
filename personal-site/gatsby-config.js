module.exports = {
  pathPrefix: "/codyhoang.github.io",
  siteMetadata: {
    title: 'Huy Hoang portfolio',
    author: 'Huy Hoang',
    description: 'A personal portfolio website for recruiter inquiry',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/power-favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-offline`,
  ],
}
