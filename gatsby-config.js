module.exports = {
  siteMetadata: {
    title: `Uyghur Advocacy Colorado`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `uyghur-advocacy-colorado`,
        short_name: `uac`,
        start_url: `/`,
        background_color: `#121222`,
        theme_color: `#65b7ff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '36e73vyy',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        overlayDrafts: true,
        watchMode: true,
        token: `skQWTusF0sI3PoSgHCiqo5T80MMTXFJfU6IjZMLhe59XSds6qFOlcNNjA5XUFsNie7Qzx6MVWsRjfVJpNpRyZJgcTTOe03676Bhc0glDsCeNkR3blTLnV2631lqub9gnclB8xDTSfbIgS4Igpa4WaF1IbvSPfxLPR2V6zEOEXT8TirsoEI4B`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
