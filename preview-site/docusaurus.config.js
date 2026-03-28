// @ts-check

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

  onBrokenLinks: 'ignore',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'ignore',
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
          exclude: ['navbar.md', 'footer.md'],
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
        items: [
          {
            type: 'dropdown', label: 'Best Practices', position: 'left',
            items: [
              { to: '/Best-Practices/best-practices', label: 'Overview' },
              { to: '/Best-Practices/sycophancy', label: 'Sycophancy' },
              { to: '/Best-Practices/hallucination', label: 'Hallucination' },
              { to: '/Best-Practices/managing-context', label: 'Managing Context' },
            ],
          },
          {
            type: 'dropdown', label: 'Learn About AI', position: 'left',
            items: [
              { to: '/Learn-About-AI/learn-about-ai', label: 'Overview' },
              { to: '/Learn-About-AI/how-llms-are-trained', label: 'How LLMs Are Trained' },
            ],
          },
          {
            type: 'dropdown', label: 'Teaching with AI', position: 'left',
            items: [
              { to: '/Teaching-with-AI/academics', label: 'Overview' },
              { to: '/Teaching-with-AI/ai-in-academics', label: 'AI in Academics' },
              { to: '/Teaching-with-AI/academic-integrity', label: 'Academic Integrity' },
              { to: '/Teaching-with-AI/ai-in-the-syllabus', label: 'AI in the Syllabus' },
              { to: '/Teaching-with-AI/grading-with-ai', label: 'Grading with AI' },
            ],
          },
          {
            type: 'dropdown', label: 'Protecting Your Data', position: 'left',
            items: [
              { to: '/Data-Privacy/protecting-data', label: 'Overview' },
              { to: '/Data-Privacy/data-privacy', label: 'Data Privacy' },
              { to: '/Data-Privacy/data-usage-guide', label: 'Data Usage Guide' },
              { to: '/Data-Privacy/copyright', label: 'Copyright' },
            ],
          },
          {
            type: 'dropdown', label: 'Working with AI', position: 'left',
            items: [
              { to: '/Working-with-AI/working-with-ai', label: 'Overview' },
              { to: '/Working-with-AI/getting-started', label: 'Getting Started' },
            ],
          },
          { to: '/Learning-with-AI/learning-with-ai', label: 'Learning with AI', position: 'left' },
          {
            type: 'dropdown', label: 'Resources', position: 'left',
            items: [
              { to: '/Resources/approved-tools', label: 'Approved Tools' },
              { to: '/Resources/chatgpt', label: 'Access ChatGPT' },
              { to: '/Resources/copilot', label: 'Access Copilot' },
              { to: '/Resources/gemini', label: 'Access Gemini' },
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'Content preview for internal review. Not the production site.',
      },
    }),
};

export default config;
