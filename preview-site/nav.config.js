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
    label: 'Training',
    type: 'dropdown',
    overview: { to: '/Training', file: 'Training/training.mdx' },
    items: [
      { label: 'How LLMs Are Trained', to: '/Training/how-llms-are-trained', file: 'Training/how-llms-are-trained.mdx' },
      { label: 'What Are Tokens', to: '/Training/tokens', file: 'Training/tokens.mdx' },
      { label: 'What Are AI Agents', to: '/Training/what-are-ai-agents', file: 'Training/what-are-ai-agents.mdx' },
      { label: 'Top 5 Things You Can Do with AI Today', to: '/Training/top-5-things', file: 'Training/top-5-things.mdx' },
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
      { label: 'Why You Should Learn Markdown', to: '/Best-Practices/markdown', file: 'Best-Practices/markdown.mdx' },
    ],
  },
  {
    label: 'Protecting Your Data',
    type: 'dropdown',
    overview: { to: '/Protecting-Your-Data', file: 'Protecting-Your-Data/protecting-your-data.mdx' },
    items: [
      { label: 'Data Privacy', to: '/Protecting-Your-Data/data-privacy', file: 'Protecting-Your-Data/data-privacy.mdx' },
      { label: 'Data Usage Guide', to: '/Protecting-Your-Data/data-usage-guide', file: 'Protecting-Your-Data/data-usage-guide.mdx' },
      { label: 'AI and Copyright', to: '/Protecting-Your-Data/copyright', file: 'Protecting-Your-Data/copyright.mdx' },
    ],
  },
  {
    label: 'Approved Tools',
    type: 'dropdown',
    overview: { to: '/Approved-Tools', file: 'Approved-Tools/approved-tools.mdx' },
    items: [
      { label: 'Access ChatGPT', to: '/Approved-Tools/chatgpt', file: 'Approved-Tools/chatgpt.mdx' },
      { label: 'Access Copilot', to: '/Approved-Tools/copilot', file: 'Approved-Tools/copilot.mdx' },
      { label: 'Access Gemini', to: '/Approved-Tools/gemini', file: 'Approved-Tools/gemini.mdx' },
      { label: 'Request Process', to: '/Approved-Tools/request-process', file: 'Approved-Tools/request-process.mdx' },
    ],
  },
];

module.exports = nav;
