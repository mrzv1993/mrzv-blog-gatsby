module.exports = {
  siteMetadata: {
    title: 'Станислав Морозов',
    description: 'This is my cool blog.',
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '51757196',
        webvisor: true,
        trackHash: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `drafts`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source sans pro\:300,400,400i,700,900`,
          `fira mono\:400,500,700`,
        ],
      },
    },
  ],
}
