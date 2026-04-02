/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    { type: 'doc', id: 'home', label: 'Home' },
    {
      type: 'category',
      label: 'Best Practices',
      link: { type: 'doc', id: 'Best-Practices/best-practices' },
      items: [
        'Best-Practices/sycophancy',
        'Best-Practices/hallucination',
        'Best-Practices/managing-context',
      ],
    },
    {
      type: 'category',
      label: 'How AI Works',
      link: { type: 'doc', id: 'How-AI-Works/how-ai-works' },
      items: ['How-AI-Works/how-llms-are-trained', 'How-AI-Works/tokens', 'How-AI-Works/what-are-ai-agents'],
    },
    {
      type: 'category',
      label: 'Teaching with AI',
      link: { type: 'doc', id: 'Teaching-with-AI/academics' },
      items: [
        'Teaching-with-AI/ai-in-academics',
        'Teaching-with-AI/academic-integrity',
        'Teaching-with-AI/ai-in-the-syllabus',
        'Teaching-with-AI/grading-with-ai',
      ],
    },
    {
      type: 'category',
      label: 'Protecting Your Data',
      link: { type: 'doc', id: 'Protecting-Your-Data/protecting-your-data' },
      items: [
        'Protecting-Your-Data/data-privacy',
        'Protecting-Your-Data/data-usage-guide',
        'Protecting-Your-Data/copyright',
      ],
    },
    {
      type: 'category',
      label: 'Working with AI',
      link: { type: 'doc', id: 'Working-with-AI/working-with-ai' },
      items: ['Working-with-AI/getting-started'],
    },
    {
      type: 'doc',
      id: 'Learning-with-AI/learning-with-ai',
      label: 'Learning with AI',
    },
    {
      type: 'category',
      label: 'Approved Tools',
      link: { type: 'doc', id: 'Approved-Tools/approved-tools' },
      items: [
        'Approved-Tools/chatgpt',
        'Approved-Tools/copilot',
        'Approved-Tools/gemini',
        'Approved-Tools/request-process',
      ],
    },
  ],
};

export default sidebars;
