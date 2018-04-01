module.exports = {
  siteMetadata: {
    title: `Blog - Mateo Olarte Fullstack & UX Developer`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      }
    },
  ],

  pathPrefix: `/blog`
};
