import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const lightCodeTheme = require('prism-react-renderer').themes.github
const darkCodeTheme = require('prism-react-renderer').themes.dracula

const config: Config = {
  title: 'Gear.exe Whitepaper',
  url: 'https://gear-exe-wp.gear.foundation/',
  baseUrl: '/',
  favicon: '/img/favicon-32x32.png',
  tagline: 'Vision of Decentralized Bridgeless Computing Extension to Ethereum Network',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  onDuplicateRoutes: 'log',
  organizationName: 'Gear Technologies', // Usually your GitHub org/username.
  projectName: 'Gear.exe-whitepaper', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      ({
        docs: {
          path: './docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }  satisfies Preset.Options),
    ],
  ],

  themeConfig:
    {
      colorMode: {
        defaultMode: 'dark',
      },
      image: '/img/wp-preview.jpg',
      navbar: {
        title: 'Gear.exe Whitepaper',
        logo: {
          alt: 'Gear.exe Whitepaper website',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            href: 'https://gear-tech.io',
            label: 'Gear-tech.io',
            position: 'right',
          },
          {
            href: 'https://vara.network',
            label: 'Vara.network',
            position: 'right',
          },
          {
            href: 'https://github.com/gear-tech/gear',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'toml'],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
    } satisfies Preset.ThemeConfig,
}

export default config
