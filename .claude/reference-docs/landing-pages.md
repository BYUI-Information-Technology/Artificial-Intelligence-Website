---
name: Rules for Landing Pages
description: These notes are for Claude to reference when generating the audience specific landing pages.
---

# Rules for Landing Pages

All landing pages should have:

1. Clear PURPOSE (tailored to the given audience)
2. Linked `ImageCard.tsx` JSX components for featured articles/content

## Specific "Landing Pages"

1. Home - `Website/home.mdx`
2. Faculty - `Website/Teaching-with-AI/teaching-with-ai.mdx`
3. Employees - `Website/Working-with-AI/working-with-ai.mdx`
4. Students - `Website/Learning-with-AI/learning-with-ai.mdx`
5. Best Practices - `Website/Best-Practices/best-practices.mdx`
6. Protecting Your Data - `Website/Protecting-Your-Data/protecting-your-data.mdx`
7. Training - `Website/Training/training.mdx`

## Examples

### Bad Example "Working with AI"

Path: `Website/Working-with-AI/working-with-ai.mdx`

```mdx
1. **Getting Started with AI**
   - *A practical guide to help you begin using AI tools in your day-to-day work*
   - Links to Getting Started with AI page (see `Working-with-AI/getting-started.mdx`)
2. **Approved Tools**
   - *See which AI tools BYU-Idaho provides and what data you can use with each one*
   - Links to Approved Tools page (see `Approved-Tools/approved-tools.mdx`)
3. **Protecting Your Data**
   - *Understand data classification levels and how to keep university data safe when using AI*
   - Links to Protecting Your Data page (see `Protecting-Your-Data/protecting-your-data.mdx`)
4. **Best Practices**
   - *Practical strategies for getting reliable, useful results from generative AI*
   - Links to Best Practices page (see `Best-Practices/best-practices.mdx`)
```

### Corrected Example "Working with AI"

```mdx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', margin: '1rem 0' }}>
  <ImageCard
    src="https://placehold.co/600x338?text=Insert+Image"
    label="Getting Started with AI"
    buttonLabel="Start using AI tools"
    href="/Working-with-AI/getting-started"
  />
  <ImageCard
    src="https://placehold.co/600x338?text=Insert+Image"
    label="Approved Tools"
    buttonLabel="See available tools"
    href="/Approved-Tools"
  />
  <ImageCard
    src="https://placehold.co/600x338?text=Insert+Image"
    label="Protecting Your Data"
    buttonLabel="Keep data safe"
    href="/Protecting-Your-Data"
  />
  <ImageCard
    src="https://placehold.co/600x338?text=Insert+Image"
    label="Best Practices"
    buttonLabel="Get better results"
    href="/Best-Practices"
  />
</div>
```

For a full example of a well-made landing page see @Website/Working-with-AI/working-with-ai.mdx
