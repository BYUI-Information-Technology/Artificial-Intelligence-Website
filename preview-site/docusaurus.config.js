// @ts-check
const nav = require('./nav.config');

/**
 * Transform the shared nav config into Docusaurus navbar items.
 */
function buildNavbarItems(navConfig) {
  return navConfig.map((item) => {
    // Simple link (e.g., Home)
    if (!item.type) {
      return { to: item.to, label: item.label, position: 'left' };
    }

    // Accordion dropdown (e.g., Get Started with audience sections)
    if (item.type === 'accordion') {
      return {
        type: 'custom-accordionDropdown',
        label: item.label,
        position: 'left',
        sections: item.sections.map((section) => ({
          label: section.label,
          href: section.items[0].to,
          items: section.items.map((i) => ({ to: i.to, label: i.label })),
        })),
      };
    }

    // Standard dropdown (e.g., Best Practices, How AI Works)
    if (item.type === 'dropdown') {
      const dropdownItems = [];
      if (item.overview) {
        dropdownItems.push({ to: item.overview.to, label: 'Overview' });
      }
      item.items.forEach((i) => {
        dropdownItems.push({ to: i.to, label: i.label });
      });
      return {
        type: 'dropdown',
        label: item.label,
        position: 'left',
        items: dropdownItems,
      };
    }

    return item;
  });
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BYU-Idaho Artificial Intelligence',
  tagline: 'Content Preview',
  favicon: 'img/favicon.ico',

  url: 'https://byui-information-technology.github.io',
  baseUrl: '/Artificial-Intelligence-Website/',

  organizationName: 'BYUI-Information-Technology',
  projectName: 'Artificial-Intelligence-Website',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          path: '../Website',
          routeBasePath: '/',
          sidebarPath: false,
          exclude: ['navbar.mdx', 'footer.mdx'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'BYU-Idaho AI',
        items: buildNavbarItems(nav),
      },
      footer: {
        style: 'dark',
        copyright: 'Content preview for internal review. Not the production site.',
      },
    }),
};

export default config;
