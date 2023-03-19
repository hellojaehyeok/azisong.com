import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `azisong.com`,
    siteUrl: `https://azisong.com`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto Serif KR`, `Noto Sans KR`],
        display: 'swap',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
};

export default config;
