module.exports = {
  siteMetadata: {
    title: 'GD8 Incorporadora',
    description: 'GD8 Incorporadora',
    url: 'gd8.com.br',
  },
  plugins: [
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'dyf0vc02crj9',
        accessToken: 'MjGovY-K8hdaKEA642vreL9rjhc2QwbP3zswXEfq-2o',
      },
    },
    {
      resolve: 'gatsby-plugin-gdpr-cookies',
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true,
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID',
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/content/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
  ],
};
