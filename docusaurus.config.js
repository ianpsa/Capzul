// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'CrypSec - Documentation',
  tagline: 'A detailed security analysis from the CrypSec team',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ianpsa.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Capzul', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'CrypSec - Documentation',
        logo: {
          alt: 'CrypSec Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          { to: '/relatorio', label: 'Relatório', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Nossos membros',
            items: [
              {
                label: 'Ian Pereira',
                href: 'https://www.linkedin.com/in/ian-pereira-simao/',
              },
              {
                label: 'Danilo Martins',
                href: 'https://www.linkedin.com/in/danilo-martins-merlo-381b76228/',
              },
              {
                label: 'Ana Beggiato',
                href: 'https://www.linkedin.com/in/ana-beggiato/',
              },
              {
                label: 'Fernanda Correia',
                href: 'https://www.linkedin.com/in/fernanda-correia04/',
              },
            ],
          },
        ],
        copyright: `Copyright © documentação feita por CrypSec`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  stylesheets: [
    'src/css/custom.css',
  ],
};

export default config;
