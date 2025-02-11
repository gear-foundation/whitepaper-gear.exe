import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes } from "prism-react-renderer";

const config: Config = {
  title: "Gear.exe Whitepaper",
  tagline:
    "Vision of Decentralized Bridgeless Computing Extension to Ethereum Network",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://gear-tech.io",

  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/gear-exe/whitepaper",

  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  onDuplicateRoutes: "log",

  organizationName: "Gear Technologies", // Usually your GitHub org/username.
  projectName: "Gear.exe-whitepaper", // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "./docs",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "/img/wp-preview.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: "Gear.exe Whitepaper",
      logo: {
        alt: "Gear.exe Whitepaper website",
        src: "/img/logo.svg",
        className: "invert dark:invert-0",
      },
      items: [
        {
          href: "https://gear-tech.io",
          label: "Gear-tech.io",
          position: "right",
        },
        {
          href: "https://vara.network",
          label: "Vara.network",
          position: "right",
        },
        {
          href: "https://github.com/gear-tech/gear",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Developers",
          items: [
            {
              label: "Wiki",
              href: "https://wiki.vara.network",
            },
            {
              label: "Contract examples",
              href: "https://wiki.vara.network/docs/examples/",
            },
            {
              label: "Gear Idea",
              href: "https://idea.gear-tech.io",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "News",
              href: "https://gear-tech.io/news",
            },
            {
              label: "Events",
              href: "https://gear-tech.io/events",
            },
            {
              label: "Workshops",
              href: "https://gear-tech.io/events?type=79f9ffd4-91d4-4dfd-bab1-c72b74ee596e",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Gear",
              href: "https://gear-tech.io/events?type=79f9ffd4-91d4-4dfd-bab1-c72b74ee596e#:~:text=COMPANY-,ABOUT%20GEAR,-WHITEPAPER",
            },
            {
              label: "Whitepaper",
              to: "/",
            },
          ],
        },
        {
          title: "Social media",
          items: [
            {
              label: "X.com",
              href: "https://x.com/gear_techs",
            },
            {
              label: "GitHub",
              href: "https://github.com/gear-tech",
            },
            {
              label: "Discord",
              href: "https://discord.gg/x8ZeSy6S6K",
            },
            {
              label: "Medium",
              href: "https://medium.com/@gear_techs",
            },
            {
              label: "Telegram",
              href: "https://t.me/gear_tech",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Gear Technologies, Inc. All Rights Reserved`,
    },
    prism: {
      theme: themes.dracula,
      additionalLanguages: ["rust", "toml"],
    },
    plugins: [
      async function tailwindPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
    ],
    // stylesheets: [
    //   "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap",
    // ],
  } satisfies Preset.ThemeConfig,
};

export default config;
