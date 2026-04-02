/**
 * Single source of truth for the site navigation structure.
 *
 * Consumed by:
 *   - docusaurus.config.js (preview site navbar)
 *   - generate-navbar.js   (generates Website/navbar.mdx)
 *
 * Each item has:
 *   - label: Display text in the navbar
 *   - to:    URL route (used by Docusaurus)
 *   - file:  Path relative to Website/ (used in navbar.mdx)
 *
 * Top-level items can be:
 *   - Simple link:  { label, to, file }
 *   - Dropdown:     { label, type: 'dropdown', items: [...] }
 *   - Accordion:    { label, type: 'accordion', sections: [{ label, items }] }
 */

const nav = [
  { label: 'Home', to: '/', file: 'home.mdx' },
  {
    label: 'Get Started',
    type: 'accordion',
    sections: [
      {
        label: 'For Faculty',
        items: [
          { label: 'Teaching with AI', to: '/Teaching-with-AI', file: 'Teaching-with-AI/teaching-with-ai.mdx' },
          { label: 'Academic Integrity', to: '/Teaching-with-AI/academic-integrity', file: 'Teaching-with-AI/academic-integrity.mdx' },
          { label: 'AI in the Syllabus', to: '/Teaching-with-AI/ai-in-the-syllabus', file: 'Teaching-with-AI/ai-in-the-syllabus.mdx' },
          { label: 'Grading with AI', to: '/Teaching-with-AI/grading-with-ai', file: 'Teaching-with-AI/grading-with-ai.mdx' },
        ],
      },
      {
        label: 'For Employees',
        items: [
          { label: 'Working with AI', to: '/Working-with-AI', file: 'Working-with-AI/working-with-ai.mdx' },
          { label: 'Getting Started with AI', to: '/Working-with-AI/getting-started', file: 'Working-with-AI/getting-started.mdx' },
        ],
      },
      {
        label: 'For Students',
        items: [
          { label: 'Learning with AI', to: '/Learning-with-AI', file: 'Learning-with-AI/learning-with-ai.mdx' },
        ],
      },
    ],
  },
  {
    label: 'How AI Works',
    type: 'dropdown',
    overview: { to: '/Learn-About-AI', file: 'Learn-About-AI/learn-about-ai.mdx' },
    items: [
      { label: 'How LLMs Are Trained', to: '/Learn-About-AI/how-llms-are-trained', file: 'Learn-About-AI/how-llms-are-trained.mdx' },
    ],
  },
  {
    label: 'Best Practices',
    type: 'dropdown',
    overview: { to: '/Best-Practices', file: 'Best-Practices/best-practices.mdx' },
    items: [
      { label: 'Why AI Agrees with You', to: '/Best-Practices/sycophancy', file: 'Best-Practices/sycophancy.mdx' },
      { label: 'Why AI Makes Things Up', to: '/Best-Practices/hallucination', file: 'Best-Practices/hallucination.mdx' },
      { label: 'Managing Context', to: '/Best-Practices/managing-context', file: 'Best-Practices/managing-context.mdx' },
    ],
  },
  {
    label: 'Protecting Your Data',
    type: 'dropdown',
    overview: { to: '/Data-Privacy/protecting-data', file: 'Data-Privacy/protecting-data.mdx' },
    items: [
      { label: 'Data Privacy', to: '/Data-Privacy/data-privacy', file: 'Data-Privacy/data-privacy.mdx' },
      { label: 'Data Usage Guide', to: '/Data-Privacy/data-usage-guide', file: 'Data-Privacy/data-usage-guide.mdx' },
      { label: 'AI and Copyright', to: '/Data-Privacy/copyright', file: 'Data-Privacy/copyright.mdx' },
    ],
  },
  {
    label: 'Approved Tools',
    type: 'dropdown',
    overview: { to: '/Resources/approved-tools', file: 'Resources/approved-tools.mdx' },
    items: [
      { label: 'Access ChatGPT', to: '/Resources/chatgpt', file: 'Resources/chatgpt.mdx' },
      { label: 'Access Copilot', to: '/Resources/copilot', file: 'Resources/copilot.mdx' },
      { label: 'Access Gemini', to: '/Resources/gemini', file: 'Resources/gemini.mdx' },
    ],
  },
];

module.exports = nav;
