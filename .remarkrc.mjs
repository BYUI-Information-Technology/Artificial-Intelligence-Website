import remarkFrontmatter from 'remark-frontmatter';
import remarkMdx from 'remark-mdx';
import remarkPresetLintConsistent from 'remark-preset-lint-consistent';
import remarkPresetLintRecommended from 'remark-preset-lint-recommended';
import remarkPresetLintMarkdownStyleGuide from 'remark-preset-lint-markdown-style-guide';
import remarkLintFileExtension from 'remark-lint-file-extension';
import remarkLintMaximumLineLength from 'remark-lint-maximum-line-length';

const config = {
  plugins: [
    remarkFrontmatter,
    remarkMdx,
    remarkPresetLintConsistent,
    remarkPresetLintRecommended,
    remarkPresetLintMarkdownStyleGuide,
    // Allow .mdx files (style guide defaults to .md only)
    [remarkLintFileExtension, ['mdx', 'md']],
    // Disable max line length — JSX lines in MDX are naturally long
    [remarkLintMaximumLineLength, false],
  ],
};

export default config;
