/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
   
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "YOUR_SENTRY_DSN_URL",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDA1ppo_QufoGXXA9uUWxp2CFb26nfe1aU",
          authDomain: "aestheticsmarbleworld.firebaseapp.com",
          databaseURL: "https://aestheticsmarbleworld.firebaseio.com",
          projectId: "aestheticsmarbleworld",
          storageBucket: "aestheticsmarbleworld.appspot.com",
          messagingSenderId: "172607549674",
          appId: "1:172607549674:web:1c54a3ba183934155b2793",
          measurementId: "G-HB8JE2631T"
        }
      }
    },
    `gatsby-plugin-material-ui`,
  ],
}
