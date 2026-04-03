---
name: Naming Conventions
description: Rules for consistent labeling across the BYU-Idaho Artificial Intelligence website. Reference when creating, renaming, or reviewing any page to ensure labels are consistent across all surfaces (frontmatter, H1, navbar, cards, cross-references, CLAUDE.md).
---

# Naming Conventions

## Label Hierarchy

Every page has a canonical label (the frontmatter `title`). Other surfaces may use shorter forms, but all must be recognizably the same page.

| Priority | Surface | Rule |
|----------|---------|------|
| 1 (canonical) | Frontmatter `title` | Full, formal page label. This is the source of truth. |
| 2 | H1 heading | Must match frontmatter `title` exactly. Exception: access guide H1s may use a longer descriptive form. |
| 3 | Navbar label | May shorten by dropping trailing qualifiers (e.g., "with AI"). Must still be recognizable as the same page. |
| 4 | Landing page cards | May use concise forms or action phrases. Card description provides additional context. |
| 5 | Home page cards | Most concise form. Imperative verb phrases ("Teach with AI", "Work with AI"). |
| 6 | Cross-references in body text | Use canonical title on first mention. May shorten on subsequent mentions within the same page. |
| 7 | CLAUDE.md / documentation | Always use canonical title with file path in parentheses. |

## Terminology Rules

### "Artificial Intelligence" vs "AI"

- **"Artificial Intelligence"** is reserved for the site name -- the H1 on `home.mdx` and the site's formal title. It appears nowhere else.
- **"AI"** is used everywhere else: page titles, headings, body text, nav labels.
- **"GenAI"** is never used. The site has been renamed from "GenAI" to "Artificial Intelligence."

### Abbreviations

- **"AI"** is always acceptable. It is not treated as an abbreviation that needs expansion.
- **"LLM" / "LLMs"** is acceptable in page titles and nav labels. Spell out "Large Language Model(s)" on first use in body text only.
- Do not abbreviate other technical terms in titles (e.g., write "Reinforcement Learning from Human Feedback", not "RLHF").

### Institutional References

- Do not include "at BYU-Idaho" or "BYU-Idaho" in page titles. The site context provides this.
- Exception: access guide H1s may include "with Your BYU-Idaho Account" because they serve as standalone instructions.

## Title Patterns by Section

| Section | Title pattern | Example |
|---------|---------------|---------|
| Audience landing pages | "[Verb]-ing with AI" | Teaching with AI, Working with AI, Learning with AI |
| Home page cards | Imperative verb phrase | Teach with AI, Work with AI, Learn with AI |
| Best Practices articles | Plain-language description of the problem | Why AI Agrees with You, Why AI Makes Things Up |
| Training articles | Descriptive phrase | How LLMs Are Trained |
| Access guides (navbar) | "Access [Tool Name]" | Access ChatGPT, Access Copilot |
| Access guides (H1) | "How to Access [Tool] with Your BYU-Idaho [Account/Subscription]" | How to Access ChatGPT with Your BYU-Idaho CES Subscription |
| Data Privacy articles | Descriptive noun phrase | Data Privacy, Data Usage Guide, AI and Copyright |
| Academic policy pages | Short descriptive phrase using "AI" | AI in Academics, Academic Integrity, AI in the Syllabus, Grading with AI |

## Surface-Specific Rules

### Frontmatter `title`

- Title case
- No trailing punctuation
- No "BYU-Idaho" or "at BYU-Idaho"
- This is the canonical label -- all other surfaces derive from it

### H1

- Must match the frontmatter `title` exactly
- One exception: access guide pages may use a longer descriptive H1 (e.g., "How to Access ChatGPT with Your BYU-Idaho CES Subscription") while the frontmatter title is shorter
- Never add qualifiers to the H1 that aren't in the frontmatter title

### Navbar (`navbar.mdx`)

- May shorten canonical titles by dropping trailing qualifiers when the context is clear
- Use audience group headers ("For Faculty", "For Employees", "For Students") under the "Get Started" section
- Top-level items should be scannable and distinct from each other

### Landing Page Cards

- Card title (bold) should match the canonical title or a natural short form
- Description line (italicized) provides context the title omits
- Card titles on the same landing page should be parallel in structure

### Home Page Cards

- Use the most concise, action-oriented form
- `label` prop uses an imperative verb phrase (e.g., "Teach with AI")
- `buttonLabel` prop adds audience context (e.g., "Resources for faculty")

### Cross-References in Body Text

- First mention of another page: use the canonical title as link text
- Subsequent mentions on the same page: may use a natural short form
- Never use file paths as link text in user-facing content

### CLAUDE.md and Documentation

- Always pair the canonical title with the file path: `Page Title (\`path/to/file.mdx\`)`
- Keep all reference tables (directory tree, navigation, file inventory, progress) in sync when titles or paths change
