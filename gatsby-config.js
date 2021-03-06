module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        /*         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
         */
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}

// module.exports = {
//   siteMetadata: {
//     title: "My first Gatsby application",
//     description: "Hello, World!"
//   },

//   plugins: [
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/content/posts`,
//         name: "posts"
//       }
//     },
//     "gatsby-plugin-sharp",
//     {
//       resolve: "gatsby-transformer-remark",
//       options: {
//         plugins: [
//           {
//             resolve: "gatsby-remark-images",
//             options: {
//               maxWidth: 1000,
//               linkImagesToOriginal: false,
//               backgroundColor: "transparent"
//             }
//           }
//         ]
//       }
//     }
//   ]
// };
