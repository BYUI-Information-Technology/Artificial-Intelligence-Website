#!/usr/bin/env node

/**
 * Generates Website/navbar.mdx from the shared nav config (nav.config.js).
 *
 * Usage:
 *   node preview-site/generate-navbar.js
 *
 * This keeps navbar.mdx (the content handoff document) in sync with the
 * Docusaurus preview site navbar, both driven by nav.config.js.
 */

const fs = require('fs');
const path = require('path');
const nav = require('./nav.config');

function generateMarkdown(navConfig) {
  const lines = [
    '---',
    'title: "Navigation"',
    '---',
    '',
    '<!-- Auto-generated from preview-site/nav.config.js. Do not edit directly. -->',
    '<!-- Run: node preview-site/generate-navbar.js -->',
    '',
    '## Navigation',
    '',
  ];

  for (const item of navConfig) {
    if (!item.type) {
      // Simple link
      lines.push(`- ${item.label} (\`${item.file}\`)`);
    } else if (item.type === 'accordion') {
      // Accordion with audience sections
      lines.push(`- ${item.label}`);
      for (const section of item.sections) {
        lines.push(`  - **${section.label}**`);
        for (const child of section.items) {
          lines.push(`    - ${child.label} (\`${child.file}\`)`);
        }
      }
    } else if (item.type === 'dropdown') {
      // Dropdown with optional overview
      if (item.overview) {
        lines.push(`- ${item.label} (\`${item.overview.file}\`)`);
      } else {
        lines.push(`- ${item.label}`);
      }
      for (const child of item.items) {
        lines.push(`  - ${child.label} (\`${child.file}\`)`);
      }
    }
  }

  return lines.join('\n') + '\n';
}

const output = generateMarkdown(nav);
const outputPath = path.join(__dirname, '..', 'Website', 'navbar.mdx');
fs.writeFileSync(outputPath, output, 'utf-8');
console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
