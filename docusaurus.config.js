// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "REPLAN - Documentação",
  tagline: "Documentação do Portal da REPLAN Florianópolis",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://doc-replan.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Notus Labs", // Usually your GitHub org/user name.
  projectName: "docs-replan", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-br",
    locales: ["en", "pt-br", "es"],
  },
  clientModules: [require.resolve("./src/clientModules/search-module.ts")],
  // plugins: [require.resolve("./src/plugins/searchplugin.js")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          editUrl: "https://github.com/notuslabs/doc-replan/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/notuslabs/doc-replan/tree/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/replanlogo.svg",
      navbar: {
        // title: "Docs",
        logo: {
          alt: "REPLAN Florianópolis logo",
          src: "img/replanlogo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "contentManagementSidebar",
            position: "left",
            label: "Gestão de Conteúdo",
          },
          {
            type: "docSidebar",
            sidebarId: "devSidebar",
            position: "left",
            label: "Desenvolvedor",
          },
          {
            href: "https://www.youtube.com/playlist?list=PL3ewgYuxhTGVcA_-cqGESyznribt-4JiB",
            label: "Vídeo Tutoriais",
            position: "right",
          },
          {
            href: "https://portal-replan.vercel.app/",
            label: "Portal",
            position: "right",
          },
          {
            href: "https://prefeitura-strapi-production.up.railway.app/",
            label: "Strapi",
            position: "right",
          },
          {
            type: "search",
            position: "right",
            className: "docsearch",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Gestão de Conteúdo",
                to: "/docs/category/portal-da-rede-de-planejamento",
              },
              {
                label: "Desenvolvimento",
                to: "/docs/desenvolvedor/teste",
              },
            ],
          },
          {
            title: "Rede de Planejamento",
            items: [
              {
                label: "Portal da REPLAN",
                to: "https://portal-replan.vercel.app",
              },
              {
                label: "Plataforma de CMS",
                to: "https://prefeitura-strapi-production.up.railway.app/admin",
              },
            ],
          },
          {
            title: "Mais",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/notuslabs/doc-replan",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} REPLAN. Built by <a href="https://www.notuslabs.xyz" target="_blank" rel="noopener noreferrer">Notus</a> with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
