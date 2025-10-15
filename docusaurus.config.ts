import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"
import { themes } from "prism-react-renderer"

const config: Config = {
  title: "Gear.exe Whitepaper",
  tagline:
    "Vision of Decentralized Bridgeless Computing Extension to Ethereum Network",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://gear-tech.io",

  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/gear-exe/whitepaper/",

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
          sidebarPath: require.resolve("./sidebars.ts"),
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
    image: "/img/opengraph-image.jpeg",
    metadata: [
      {
        name: "keywords",
        content: "Gear, Gear.exe, GearProtocol, web3, Gear.exe whitepaper",
      },
      {
        name: "description",
        content:
          "Vision of Decentralized Bridgeless Computing Extension to Ethereum Network",
      },
    ],
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
          href: "/gear.exe-whitepaper-0.2.pdf",
          label: "[PDF Version]",
          position: "left",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/gear.exe-technical-0.1.pdf",
          label: "[Tech Doc PDF Version]",
          position: "left",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "/gear.exe-one-pager.pdf",
          label: "[One Pager PDF Version]",
          position: "left",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          href: "https://gear-tech.io",
          label: "[Gear Technologies]",
          position: "right",
        },
        {
          href: "https://gear-tech.io/gear-exe",
          label: "[Gear.exe]",
          position: "right",
        },
        {
          href: "https://vara.network",
          label: "[Vara Network]",
          position: "right",
        },
        {
          href: "https://github.com/gear-tech/gear",
          label: "[GitHub]",
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
              href: "https://whitepaper.gear.foundation",
            },
          ],
        },
        {
          title: "Social media",
          className: "footer__socials",
          items: [
            {
              html: `
                <a class="footer__link-item" href="https://x.com/gear_techs" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="size-4.5 social"><path d="M10.6447 8.32454C12.2033 6.4958 13.6046 4.86027 15.1708 3.01971C15.1209 3.01182 15.1094 3.00788 15.0941 3.00788C14.4299 3.00788 13.7697 3.00788 13.1056 3.00788C13.0518 3.00788 12.9866 3.05124 12.952 3.09459C12.0461 4.15479 11.1401 5.21498 10.238 6.27518C9.99232 6.56289 9.7428 6.85454 9.48944 7.1462C9.45106 7.0989 9.42418 7.06343 9.39731 7.02796C8.43762 5.72735 7.47793 4.42279 6.51823 3.11824C6.45681 3.03547 6.39539 3 6.29559 3C4.92131 3 3.54702 3 2.17274 3C2.12668 3 2.07678 3.00394 2 3.00788C3.77351 5.3884 5.52783 7.74527 7.28983 10.11C5.61996 12.0688 3.96161 14.0197 2.28407 15.9864C2.33013 15.9943 2.34933 15.9982 2.36468 15.9982C3.02879 15.9982 3.68906 15.9982 4.35317 15.9982C4.40691 15.9982 4.47217 15.9549 4.50672 15.9155C5.5547 14.6937 6.59885 13.464 7.64299 12.2383C7.85797 11.9861 8.07678 11.7299 8.30326 11.4697C8.46449 11.6865 8.61804 11.8875 8.76775 12.0925C9.71593 13.3655 10.6603 14.6346 11.6123 15.9037C11.6507 15.9549 11.7274 15.9982 11.7889 15.9982C13.1555 16.0022 14.5182 15.9982 15.8848 15.9982C15.9155 15.9982 15.9501 15.9904 16 15.9825C14.1574 13.4837 12.3301 11.0007 10.4952 8.51381L10.6447 8.32454ZM12.3263 14.6661C12.2802 14.6661 12.2303 14.603 12.1958 14.5597C11.3474 13.4246 10.5029 12.2935 9.65835 11.1584C7.98081 8.90794 6.30326 6.65748 4.62572 4.40309C4.59885 4.36761 4.57582 4.3282 4.53359 4.26908H4.97121C5.1977 4.26908 5.42418 4.27697 5.65067 4.26908C5.75432 4.26514 5.8119 4.3085 5.87332 4.38732C6.96353 5.86923 8.05374 7.35114 9.14395 8.82911C10.5451 10.7288 11.9424 12.6285 13.3436 14.5321C13.3704 14.5676 13.3973 14.607 13.4434 14.674C13.048 14.674 12.6871 14.674 12.3263 14.67V14.6661Z" stroke="currentColor" stroke-width="0.8" stroke-miterlimit="10"></path></svg>
                  X.com
                </a>
              `,
            },
            {
              html: `
                <a class="footer__link-item" href="https://github.com/gear-tech" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="size-4.5 social"><path d="M14.9733 6.46009C14.9596 6.27023 14.9596 6.25537 14.9185 6.06551C14.8043 5.50067 14.5621 4.99754 14.2012 4.56086C14.1326 4.48017 14.1189 4.40897 14.1509 4.30455C14.3702 3.56409 14.3063 2.83312 14.0504 2.1164C14.0321 2.06893 13.9499 2.00723 13.9042 2.01197C13.6529 2.04045 13.397 2.06418 13.1549 2.14013C12.6386 2.29676 12.1817 2.5863 11.7248 2.88533C11.6882 2.90907 8.75035 2.57681 7.38878 2.92331C7.37964 2.92331 7.17861 2.91381 7.14206 2.89008C6.68515 2.5863 6.22368 2.29676 5.70282 2.13538C5.4698 2.06418 5.22764 2.04045 4.98548 2.00248C4.8941 1.98824 4.83927 2.03571 4.80729 2.13538C4.56513 2.85685 4.50573 3.58782 4.72962 4.32828C4.75703 4.41846 4.74332 4.47068 4.68849 4.54187C4.11737 5.24911 3.85693 6.07026 3.87521 6.99108C3.88892 7.67458 3.96202 8.34859 4.19961 8.98937C4.23616 9.0938 4.27728 9.19347 4.32297 9.2884C4.77074 10.252 5.53833 10.8405 6.54351 11.1396C6.90904 11.2487 7.29283 11.3009 7.66749 11.3816C7.7406 11.3959 7.76801 11.486 7.72232 11.543C7.53956 11.7803 7.42077 12.0366 7.35223 12.3214C7.35223 12.3309 7.34309 12.3404 7.34309 12.3499C7.3568 12.6347 7.17404 12.7059 6.95473 12.7771C6.02265 13.0714 5.25962 12.7771 4.74789 11.9132C4.52858 11.5383 4.24987 11.2345 3.87064 11.0731C3.77926 11.0351 3.68788 11.0066 3.58736 10.9829C3.44572 10.9544 3.28581 10.9639 3.14417 10.9924C2.97968 11.0256 2.95684 11.1301 3.07106 11.2582C3.13046 11.3294 3.20357 11.4006 3.28124 11.4481C3.51426 11.5905 3.70616 11.7661 3.8615 11.9749C4.03969 12.2075 4.1722 12.4733 4.28185 12.7534C4.5697 13.5033 5.12712 13.8688 5.86273 13.9922C6.27851 14.0634 6.68972 14.0254 7.10093 13.9448C7.11464 13.9448 7.12835 13.94 7.14662 13.9353C7.20602 13.9258 7.25628 13.9732 7.25628 14.0349V15.4494C7.25628 15.4826 7.26999 15.5111 7.2974 15.5301C7.67663 15.8101 8.48535 16 9.42199 16C10.3586 16 11.1445 15.8149 11.5329 15.5396C11.5603 15.5206 11.574 15.4921 11.574 15.4589C11.574 15.307 11.5786 15.0839 11.5831 14.8418C11.5877 14.4336 11.5923 13.9685 11.5923 13.6695C11.5923 13.3657 11.5923 13.0666 11.5694 12.7629C11.542 12.3072 11.4141 11.8943 11.1399 11.5478C11.0943 11.4908 11.1217 11.4006 11.1948 11.3864C11.5968 11.2962 11.9989 11.2202 12.3873 11.0968C13.4107 10.7788 14.1189 10.1713 14.5347 9.30264C14.7083 8.93716 14.8317 8.51947 14.9048 8.05905C14.9322 7.87868 14.9551 7.69832 14.9733 7.51795C15.0008 7.21892 15.0099 6.91514 14.9871 6.61611L14.9733 6.46009Z" stroke="currentColor" stroke-width="0.8" stroke-miterlimit="10"></path></svg>                  GitHub
                </a>
              `,
            },
            {
              html: `
                <a class="footer__link-item" href="https://discord.gg/x8ZeSy6S6K" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="size-4.5 social"><path d="M15.8595 9.02149C15.5848 7.19022 14.9073 5.52165 13.9075 3.98929C13.8782 3.94388 13.8306 3.89848 13.7793 3.87578C12.915 3.46715 12.0104 3.18338 11.0765 3.00555C10.996 2.99041 10.9447 3.00555 10.9081 3.08879C10.8202 3.28554 10.7249 3.47472 10.6371 3.66768C10.6078 3.73579 10.5748 3.75849 10.4979 3.75092C10.1133 3.71308 9.7288 3.6639 9.34426 3.64876C8.74364 3.62228 8.14669 3.64876 7.5534 3.74714C7.44353 3.76606 7.38127 3.74714 7.33732 3.62985C7.26774 3.44823 7.16519 3.27797 7.08829 3.09636C7.048 3.00177 6.98574 2.99041 6.89785 3.00555C5.97495 3.18338 5.08501 3.46715 4.23169 3.86443C4.1731 3.89091 4.11084 3.94388 4.07422 4.00064C3.6384 4.67791 3.26119 5.38544 2.94989 6.13081C2.43351 7.36805 2.12221 8.65448 2.03065 9.99766C1.98304 10.6938 1.99037 11.39 2.05629 12.0824C2.05995 12.1316 2.08925 12.1884 2.12587 12.2186C3.15864 12.9981 4.28663 13.5921 5.50984 13.9894C5.58308 14.0121 5.62337 14.0007 5.66365 13.9326C5.87973 13.5694 6.09214 13.21 6.31188 12.8505C6.36315 12.7635 6.33751 12.7256 6.25328 12.6878C6.01889 12.5857 5.78817 12.4797 5.56111 12.3662C5.43659 12.3057 5.3194 12.23 5.18023 12.1468C5.25348 12.0862 5.30841 12.0522 5.34869 12.0068C5.4256 11.9197 5.49519 11.9387 5.59041 11.9765C5.95297 12.1203 6.31554 12.2754 6.6891 12.3889C7.92329 12.7711 9.17946 12.8392 10.4503 12.6046C11.1388 12.4759 11.8017 12.2565 12.4426 11.9614C12.4792 11.9462 12.5305 11.9235 12.5561 11.9424C12.6403 11.9954 12.7136 12.0635 12.8088 12.143C12.7465 12.1808 12.7136 12.2073 12.6769 12.2262C12.3657 12.3813 12.058 12.5365 11.7431 12.6802C11.6515 12.7219 11.6295 12.7635 11.6845 12.8543C11.9005 13.2137 12.1166 13.577 12.329 13.9402C12.3657 14.0007 12.4096 14.0121 12.4755 13.9856C12.5964 13.9402 12.7209 13.9024 12.8418 13.8607C13.9295 13.471 14.9329 12.9224 15.8631 12.2186C15.8998 12.1884 15.9364 12.1316 15.9401 12.0862C16.0389 11.0609 16.017 10.0355 15.8631 9.01771L15.8595 9.02149ZM7.50579 10.1414C6.91249 10.7317 6.00791 10.569 5.61238 9.8047C5.48786 9.56633 5.42194 9.31283 5.42927 9.04041C5.43659 8.59394 5.57942 8.20802 5.90536 7.90911C6.4071 7.44751 7.12857 7.50805 7.5827 8.04154C8.07344 8.62043 8.03682 9.61173 7.50579 10.1414ZM12.5744 8.9496C12.5744 9.46039 12.4462 9.8274 12.1606 10.1263C11.6918 10.6182 10.9703 10.622 10.4979 10.1339C9.94854 9.56633 9.92656 8.59773 10.4503 8.00748C11.0106 7.36805 11.9775 7.50048 12.384 8.26855C12.5121 8.5107 12.5781 8.76799 12.5744 8.9496Z" stroke="currentColor" stroke-width="0.8" stroke-miterlimit="10"></path></svg>                  Discord
                </a>
              `,
            },
            {
              html: `
                <a class="footer__link-item" href="https://medium.com/@gear_techs" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="size-4.5 social"><path d="M15.5979 8.99852C15.5979 9.91117 15.5215 10.7263 15.4028 11.3031C15.371 11.4575 15.3374 11.589 15.3036 11.6974C15.2698 11.589 15.2362 11.4576 15.2045 11.3033C15.0858 10.7265 15.0094 9.91139 15.0094 8.99852C15.0094 8.08567 15.0858 7.27058 15.2045 6.69375C15.2362 6.53948 15.2699 6.40813 15.3036 6.2998C15.3374 6.40812 15.371 6.53946 15.4028 6.69372C15.5215 7.27053 15.5979 8.08561 15.5979 8.99852Z" stroke="currentColor" stroke-width="0.8"></path><mask id="path-2-inside-1_173_100" fill="white"><path d="M14.2298 9.00013C14.2298 11.0795 13.3459 12.7659 12.2555 12.7659C11.1652 12.7659 10.2812 11.0795 10.2812 9.00013C10.2812 6.92073 11.165 5.23438 12.2554 5.23438C13.3457 5.23438 14.2296 6.92019 14.2296 9.00013"></path></mask><path d="M13.4298 9.00013C13.4298 9.93712 13.2289 10.7459 12.943 11.2913C12.6373 11.8745 12.3542 11.9659 12.2555 11.9659V13.5659C13.2472 13.5659 13.9513 12.8141 14.3601 12.0342C14.7887 11.2166 15.0298 10.1425 15.0298 9.00013H13.4298ZM12.2555 11.9659C12.1568 11.9659 11.8738 11.8745 11.568 11.2913C11.2821 10.7459 11.0813 9.93712 11.0813 9.00013H9.48125C9.48125 10.1425 9.72234 11.2166 10.151 12.0342C10.5598 12.8141 11.2639 13.5659 12.2555 13.5659V11.9659ZM11.0813 9.00013C11.0813 8.06312 11.2821 7.2543 11.568 6.70889C11.8737 6.12571 12.1567 6.03438 12.2554 6.03438V4.43437C11.2637 4.43437 10.5597 5.18621 10.1509 5.96606C9.72229 6.78368 9.48125 7.85774 9.48125 9.00013H11.0813ZM12.2554 6.03438C12.3542 6.03438 12.6372 6.12574 12.9429 6.70874C13.2288 7.25405 13.4296 8.06284 13.4296 9.00013H15.0296C15.0296 7.85748 14.7886 6.78339 14.3599 5.96581C13.951 5.18592 13.2469 4.43437 12.2554 4.43437V6.03438Z" fill="currentColor" mask="url(#path-2-inside-1_173_100)"></path><path d="M9.49691 9.00007C9.49691 10.9932 7.90332 12.6 5.94852 12.6C3.99373 12.6 2.4 10.9928 2.4 9.00007C2.4 7.00734 3.99363 5.4 5.94852 5.4C7.90343 5.4 9.49691 7.00694 9.49691 9.00007Z" stroke="currentColor" stroke-width="0.8"></path></svg>                  Medium
                </a>
              `,
            },
            {
              html: `
                <a class="footer__link-item" href="https://t.me/gear_tech" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="size-4.5 social"><path d="M5.37419 10.2608C5.11619 10.2093 4.85365 10.1812 4.60017 10.1062C3.90309 9.90022 3.20602 9.68014 2.51347 9.4507C2.28262 9.37579 2.02913 9.28214 2.00198 8.98246C1.97482 8.66406 2.23283 8.52359 2.45462 8.41589C3.28749 8.01788 4.12489 7.63393 4.97134 7.25933C7.18931 6.27602 9.4118 5.29271 11.6388 4.32345C12.5622 3.92077 13.5037 3.56958 14.4407 3.19499C14.5901 3.13412 14.7395 3.09198 14.8934 3.05452C15.6991 2.85786 16.0974 3.19499 15.9797 4.03783C15.6764 6.27602 15.346 8.50954 15.0156 10.7431C14.8752 11.6702 14.7078 12.5926 14.5403 13.515C14.486 13.8007 14.4181 14.091 14.3094 14.3626C14.0831 14.9338 13.7029 15.1211 13.1371 14.9245C12.8429 14.8214 12.5622 14.6529 12.2997 14.4703C11.1228 13.6602 9.95498 12.8314 8.7781 12.0167C7.89091 11.4033 7.85922 11.0193 8.63325 10.2561C9.86898 9.03397 11.1047 7.80717 12.3359 6.5757C12.4717 6.43991 12.7025 6.28539 12.517 6.06063C12.345 5.85461 12.1458 6.02785 11.9828 6.14023C10.2854 7.30616 8.58799 8.47208 6.89056 9.64268C6.42886 9.96109 5.96716 10.2654 5.37872 10.2701L5.37419 10.2608Z" stroke="currentColor" stroke-width="0.8" stroke-miterlimit="10"></path></svg>
                  Telegram
                </a>
              `,
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
            postcssOptions.plugins.push(require("tailwindcss"))
            postcssOptions.plugins.push(require("autoprefixer"))
            return postcssOptions
          },
        }
      },
    ],
    // stylesheets: [
    //   "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap",
    // ],
  } satisfies Preset.ThemeConfig,
}

export default config
