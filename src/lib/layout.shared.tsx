import type {BaseLayoutProps} from "fumadocs-ui/layouts/shared";
import {NavLogo} from "@/components/common/nav-logo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      url: "https://eth.vara.network",
      title: <NavLogo/>,
    },
    githubUrl: "https://github.com/gear-tech/gear/tree/master/ethexe",
    links: [
      {
        // icon: <IconPdf/>,
        text: "Whitepaper",
        url: "/vara.eth-whitepaper.pdf",
        external: true,
      },
      {
        // icon: <IconPdf/>,
        text: "Tech Paper",
        url: "/vara.eth-technical.pdf",
        external: true,
      },
      {
        // icon: <IconPdf/>,
        text: "One Pager",
        url: "/vara.eth-one-pager.pdf",
        external: true,
      },
      {
        text: "Vara.eth",
        url: "https://eth.vara.network",
      },
      {
        text: "Vara Network",
        url: "https://vara.network",
      },
      {
        text: "Gear Tech",
        url: "https://gear-tech.io",
      },
    ],
  };
}
