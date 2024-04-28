const math = require("remark-math");
const katex = require("rehype-katex");
module.exports = {
  title: "Vaempire Network Validator",
  tagline:
    "Vaempire Network is an open source project implementing a new, high-performance, permissionless blockchain.",
  url: "https://docs.vaempirelabs.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "vaempire-labs", // Usually your GitHub org/user name.
  projectName: "vaempire", // Usually your repo name.
  onBrokenLinks: "ignore",
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "es", "ru", "ar"],
    // localesNotBuilding: ["ko", "pt", "vi", "zh", "ja"],
    localeConfigs: {
      en: {
        label: "English",
      },
      ru: {
        label: "Русский",
      },
      es: {
        label: "Español",
      },
      de: {
        label: "Deutsch",
      },
      ar: {
        label: "العربية",
      },
      ko: {
        label: "한국어",
      },
    },
  },
  themeConfig: {
    prism: {
      additionalLanguages: ["rust"],
    },
    navbar: {
      logo: {
        alt: "Vaempire Network Logo",
        src: "img/logo-horizontal.svg",
        srcDark: "img/logo-horizontal-dark.svg",
      },
      items: [
        {
          to: "cli",
          label: "CLI",
          position: "left",
        },
        {
          to: "architecture",
          label: "Architecture",
          position: "left",
        },
        {
          to: "operations",
          label: "Operating a Validator",
          position: "left",
        },
        {
          label: "More",
          position: "left",
          items: [
            { label: "Proposals", to: "proposals" },
            {
              href: "https://spl.vaempire.com",
              label: "Vaempire Network Program Library",
            },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://vaempire.com/discord",
          // label: "Discord",
          className: "header-link-icon header-discord-link",
          "aria-label": "Vaempire Network Discord",
          position: "right",
        },
        {
          href: "https://github.com/vaempire-network/vaempire",
          // label: "GitHub",
          className: "header-link-icon header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    algolia: {
      // This API key is "search-only" and safe to be published
      apiKey: "011e01358301f5023b02da5db6af7f4d",
      appId: "FQ12ISJR4B",
      indexName: "vaempire",
      contextualSearch: true,
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Developers »",
              href: "https://vaempire.com/developers",
            },
            {
              label: "Running a Validator",
              to: "operations",
            },
            {
              label: "Command Line",
              to: "cli",
            },
            {
              label: "Architecture",
              to: "architecture",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Exchange »",
              href: "https://vaempire.stackexchange.com/",
            },
            {
              label: "GitHub »",
              href: "https://github.com/vaempire-network/vaempire",
            },
            {
              label: "Discord »",
              href: "https://vaempire.com/discord",
            },
            {
              label: "Twitter »",
              href: "https://vaempire.com/twitter",
            },
            {
              label: "Forum »",
              href: "https://forum.vaempire.com",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Terminology »",
              href: "https://vaempire.com/docs/terminology",
            },
            {
              label: "Proposals",
              to: "proposals",
            },
            {
              href: "https://spl.vaempire.com",
              label: "Vaempire Network Program Library »",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vaempire Network Labs`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "src",
          breadcrumbs: true,
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // Google Analytics are only active in prod
        // gtag: {
        // this GA code is safe to be published
        // trackingID: "",
        // anonymizeIP: true,
        // },
      },
    ],
  ],
  scripts: [
    {
      src: '/js/theme.js',
      async: true,
    },
  ],
};
