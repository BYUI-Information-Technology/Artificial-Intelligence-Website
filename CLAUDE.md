# CLAUDE.md

## Project Overview

This repository manages the content overhaul of BYU-Idaho's Artificial Intelligence website (<www.byui.edu/genai>). IT now has a leadership role in GenAI governance, and the CIO has tasked the AI Solutions and Architecture team with revamping the site.

> Note: We're renaming the site from "GenAI" to simply "Artificial Intelligence." The term GenAI is an outdated term and limits the true depth and breadth of AI to simply generative AI. By using "Artificial Intelligence", we can expand into other topics, such as Agentic AI.

### What This Repo Is

- A content project, not a code project
- Website/: Web content (MDX) to be sent to University Communications for publishing in Brightspot CMS

### Directory Tree

```
BYUI-GenAI-Site/
├── .claude/
│   ├── reference-docs/
│   │   ├── church-guidance.md
│   │   ├── data-classification-policy.md
│   │   ├── landing-pages.md
│   │   ├── objectives.md
│   │   └── strategy.md
│   └── settings.local.json
├── .gitignore
├── CHANGELOG.md
├── CLAUDE.md
├── export-docx.sh
├── NOTES.md
└── Website/
    ├── home.mdx
    ├── navbar.mdx
    ├── footer.mdx
    ├── Teaching-with-AI/
    │   ├── teaching-with-ai.mdx
    │   ├── ai-in-academics.mdx
    │   ├── academic-integrity.mdx
    │   ├── ai-in-the-syllabus.mdx
    │   └── grading-with-ai.mdx
    ├── Best-Practices/
    │   ├── best-practices.mdx
    │   ├── sycophancy.mdx
    │   ├── hallucination.mdx
    │   └── managing-context.mdx
    ├── Working-with-AI/
    │   ├── working-with-ai.mdx
    │   └── getting-started.mdx
    ├── Learning-with-AI/
    │   └── learning-with-ai.mdx
    ├── Learn-About-AI/
    │   ├── learn-about-ai.mdx
    │   ├── how-llms-are-trained.mdx
    │   └── tokens.mdx
    ├── Data-Privacy/
    │   ├── protecting-data.mdx
    │   ├── data-privacy.mdx
    │   ├── data-usage-guide.mdx
    │   └── copyright.mdx
    └── Resources/
        ├── approved-tools.mdx
        ├── chatgpt.mdx
        ├── copilot.mdx
        └── gemini.mdx
```

### What's In Scope

- Content: rewriting, restructuring, removing outdated/inaccurate material
- Structure: page hierarchy, navigation, information architecture
- Naming: page titles, nav labels, and terminology governed by `.claude/reference-docs/naming-conventions.md`

### What's Out of Scope

- Graphics, colors, fonts, styles, anything visual/artistic
- Brightspot CMS implementation (University Communications handles publishing)
- Student-facing content beyond the Learning with AI landing page (deeper student resources are a future phase)

### Target Audience

Employees only (faculty, administrative staff, and staff). Student content will be added in a future phase.

## Governance Model

### IT's Role

- **Technology ownership:** Tool approvals, security reviews, software acquisitions
- **Front door:** All requests route through the IT Help Center, decisions made by a cross-functional governance committee
- IT does NOT own academic policy (syllabus requirements, grading with AI, academic integrity)

### Teaching with AI

- Academic policy pages (AI in Academics, Academic Integrity, AI in the Syllabus, Grading with AI) are maintained on this site under Teaching with AI for now
- Updates to academic content require collaboration with academic stakeholders -- do not unilaterally rewrite academic policy
- These pages may move to a different home in the future

## Site Structure

### Navigation

The single source of truth for navigation is `preview-site/nav.config.js`. It drives both:
- The Docusaurus preview site navbar (imported by `docusaurus.config.js`)
- `Website/navbar.mdx` (auto-generated for University Communications handoff)

**When changing navigation:** Edit `nav.config.js`, then run `node preview-site/generate-navbar.js` to regenerate `navbar.mdx`. Do not edit `navbar.mdx` directly.

Summary:

- Home (`home.mdx`)
- Get Started
  - **For Faculty**
    - Teaching with AI (`Teaching-with-AI/teaching-with-ai.mdx`)
    - Academic Integrity (`Teaching-with-AI/academic-integrity.mdx`)
    - AI in the Syllabus (`Teaching-with-AI/ai-in-the-syllabus.mdx`)
    - Grading with AI (`Teaching-with-AI/grading-with-ai.mdx`)
  - **For Employees**
    - Working with AI (`Working-with-AI/working-with-ai.mdx`)
    - Getting Started with AI (`Working-with-AI/getting-started.mdx`)
  - **For Students**
    - Learning with AI (`Learning-with-AI/learning-with-ai.mdx`)
- How AI Works (`Learn-About-AI/learn-about-ai.mdx`)
  - How LLMs Are Trained (`Learn-About-AI/how-llms-are-trained.mdx`)
  - What Are Tokens (`Learn-About-AI/tokens.mdx`)
- Best Practices (`Best-Practices/best-practices.mdx`)
  - Why AI Agrees with You (`Best-Practices/sycophancy.mdx`)
  - Why AI Makes Things Up (`Best-Practices/hallucination.mdx`)
  - Managing Context (`Best-Practices/managing-context.mdx`)
- Protecting Your Data (`Data-Privacy/protecting-data.mdx`)
  - Data Privacy (`Data-Privacy/data-privacy.mdx`)
  - Data Usage Guide (`Data-Privacy/data-usage-guide.mdx`)
  - AI and Copyright (`Data-Privacy/copyright.mdx`)
- Approved Tools (`Resources/approved-tools.mdx`)
  - Access ChatGPT (`Resources/chatgpt.mdx`)
  - Access Copilot (`Resources/copilot.mdx`)
  - Access Gemini (`Resources/gemini.mdx`)

### Pages Removed (from original site)

- About GenAI -- removed (content pending rewrite)
- Training -- replaced by How AI Works section with new educational content
- Custom Bots -- inaccurate, noise
- Connectors -- inaccurate, noise
- All product-specific subpages from old Products section (replaced by Resources/approved-tools.mdx)
- Events/Expo (referenced in old navbar but no content existed)

## Per-Page Directives

### Home

- Replace old leadership contact info with IT Help Center link + team contact (TBD placeholder)
- Prominent callout: for new software acquisitions, AI development, or tool requests, direct users to IT Help Center
- Remove "recent updates" referencing old initiatives (Gemini Gems, AI 101 spotlight)
- Remove references to University AI Office and Learning Innovation & Technology as governance owners
- Keep mission framing and strategic priorities if still relevant

### Resources / Approved Tools (formerly Products)

- Three approved tools: ChatGPT (OpenAI), Copilot (Microsoft), Gemini (Google)
- Each tool has data classification levels and a link to its access guide
- IT Help Center callout for tool requests is prominent
- Access guides in Resources/ folder: chatgpt.mdx, copilot.mdx, gemini.mdx

### Teaching with AI (formerly Academics)

- Landing page (`Teaching-with-AI/teaching-with-ai.mdx`) should organize image cards under three section headings per `.claude/reference-docs/landing-pages.md`: Topics & Standards (Data Protection, AI Priorities & Strategy, Ethics), Training Resources (tutorials and best practices), and Available Tools (link to `Resources/approved-tools.mdx`)
- Faculty-centric audience -- language should speak directly to instructors and their teaching context
- Policy subpages (AI in Academics, Academic Integrity, AI in the Syllabus, Grading with AI) remain as children

### AI in Academics

- Clean up aspirational language; tighten for clarity
- Keep the three priorities (Advance Knowledge, Workforce Readiness, Student Support)
- Updates require collaboration with academic stakeholders

### Academic Integrity

- Keep CES Guiding Principles, faculty/student roles, citation requirements
- Clean up noise and redundancy
- Updates require collaboration with academic stakeholders

### AI in the Syllabus

- Keep the syllabus statement requirement, Stoplight Framework, AI Assessment Scale
- Keep support tools (AI Statement Wizard, Citation Guide)
- Updates require collaboration with academic stakeholders

### Grading with AI

- Keep foundational principles, operational guidelines, risk table
- Clean up verbosity
- Updates require collaboration with academic stakeholders

### How AI Works

- Landing page (`Learn-About-AI/learn-about-ai.mdx`) with image cards linking to subpages
- **Purpose:** Educational content that builds AI literacy across the BYU-Idaho community. Articles explain *how AI works* at a conceptual level -- not "do this, not that" (that's Best Practices), but "here's what's happening under the hood and why it matters"
- **Audience calibration:** Write for accessibility first -- any employee should be able to follow the article without a technical background. Do not shy away from more advanced concepts, but explain them without assuming prior knowledge
- **Distinction from Best Practices:** Best Practices = actionable guidance (protect yourself, avoid pitfalls). How AI Works = understanding the technology (how LLMs are trained, what RAG is, how alignment works). There will be natural overlap in concepts, but the framing differs
- **Existing source content:** Ron has previously authored educational articles at `https://byui.mintlify.app/`. When adapting existing content for this site, generalize product-specific references (e.g., references to the Support Agent or specific model versions) so articles serve all employees, not just users of one system
- **Article structure pattern:** accessible introduction, concept explanation with analogies, why it matters at BYU-Idaho, key takeaways
- Planned articles: How LLMs Are Trained (complete), What Are Tokens (complete), additional topics TBD (e.g., What is RAG, What is Model Alignment)

### Best Practices

- Landing page (`Best-Practices/best-practices.mdx`) with image cards linking to subpages
- Why AI Agrees with You subpage (`sycophancy.mdx`): why AI agrees with users, how to prompt for honest answers
- Why AI Makes Things Up subpage (`hallucination.mdx`): why AI fabricates information, how to detect and prevent it
- Managing Context subpage: how context shapes AI output, context window management, persistent context features per tool
- Additional subpages TBD -- potential topics include AI usage tips, staying safe with AI
- Write for an employee audience: practical, actionable guidance (not generic AI hype)
- Article structure pattern: scenario/definition, causes, why it matters, best practices

### Data Privacy

- Landing page (`Data-Privacy/protecting-data.mdx`) with image cards linking to subpages
- Data Privacy (`data-privacy.mdx`): largely accurate -- clean up and polish; keep 4-tier data classification system
- Data Usage Guide (`data-usage-guide.mdx`): step-by-step decision guide for AI data usage
- AI and Copyright (`copyright.mdx`): largely accurate -- clean up and polish; legal content is time-sensitive

### Working with AI

- Landing page (`Working-with-AI/working-with-ai.mdx`) should organize image cards under three section headings per `.claude/reference-docs/landing-pages.md`: Topics & Standards (Data Protection, AI Priorities & Strategy, Ethics), Training Resources (tutorials and best practices), and Available Tools (link to `Resources/approved-tools.mdx`)
- Employee-centric audience (staff and administrative employees) -- language should speak to day-to-day work applications
- Getting Started subpage: practical onboarding guide for employees new to AI tools

### Learning with AI

- Landing page (`Learning-with-AI/learning-with-ai.mdx`) should organize image cards under three section headings per `.claude/reference-docs/landing-pages.md`: Topics & Standards (Data Protection and Ethics -- note: no AI Priorities & Strategy for students), Training Resources (student-specific tutorials), and Available Tools
- Student-centric audience -- language should speak directly to students and their academic context
- Deeper student resources are a future phase; for now this is a landing page only

## Editorial Principles

- **Cut aggressively:** When content is outdated, inaccurate, or confusing, remove it. Err on the side of less content, not more.
- **Employee audience:** Write for faculty, admin, and staff. No need to explain basic concepts that employees would already understand.
- **Plain language:** Avoid jargon, buzzwords, and aspirational fluff. Be direct and actionable.
- **Policy accuracy:** Do not invent or assume policy. If something is unclear, flag it for review rather than guessing.
- **Academic content boundary:** Do not unilaterally rewrite academic policy pages. Flag proposed changes for stakeholder review.
- **No visual/design decisions:** Output is Markdown content only. University Communications handles styling and publishing in Brightspot.

## Project Knowledge

Reference documents in `.claude/reference-docs/` provide authoritative context for content decisions. Read the relevant document before writing or revising content in its domain.

- **Church AI Guiding Principles** (`.claude/reference-docs/church-guidance.md`): Official guiding principles from The Church of Jesus Christ for AI use, introduced by Elder Gerrit W. Gong (March 2024). The four principles -- Spiritual Connection, Transparency, Privacy and Security, and Accountability -- are the upstream authority that BYU-Idaho's AI strategy references as "Alignment with Prophetic Guidance." Reference this document when writing content that touches on ethics, transparency (e.g., disclosing AI use), data privacy, or the institutional mission. Content should reflect these principles in spirit without turning the site into a doctrinal publication -- the audience is employees using AI tools at work, not a general church audience.

- **AI Strategy** (`.claude/reference-docs/strategy.md`): BYU-Idaho's institutional AI strategy as defined by university leadership -- critical requirements, priorities to support students, and enabling workstreams. Use as background context that informs the purpose and tone of all site content. Content should support the strategic priorities (prophetic guidance alignment, data privacy, advancing knowledge, workforce readiness, student support) without quoting them verbatim. When a content decision could go multiple directions, favor the direction that better serves the strategy.

- **Governance Objectives** (`.claude/reference-docs/objectives.md`): Five objectives defined by AI Governance that this website must serve: Informed Leadership, Clear Governance, Clear Rules, Proactive Sharing, and Communication Hub. Use as a content decision filter -- before writing or revising any page, consider which objective(s) the content supports. If a page doesn't clearly serve at least one objective, question whether the content belongs on the site.

- **Landing Page Structure** (`.claude/reference-docs/landing-pages.md`): Defines audience-specific landing page structure for the three audience landing pages (Teaching with AI, Working with AI, Learning with AI). Reference when creating or revising any audience landing page. Each landing page should organize image cards under three section headings: Topics & Standards, Training Resources, and Available Tools.

- **Data Classification** (`.claude/reference-docs/data-classification-policy.md`): BYU-Idaho's official data classification policy and the modified classification system leadership has adopted for AI tools. Reference when writing content about data privacy, data handling, or tool-specific data classification levels.

- **Naming Conventions** (`.claude/reference-docs/naming-conventions.md`): Rules for consistent labeling across all surfaces (frontmatter title, H1, navbar, landing page cards, home page cards, cross-references, CLAUDE.md). Reference when creating, renaming, or reviewing any page. Defines the label hierarchy (frontmatter title is canonical), terminology rules ("AI" not "Artificial Intelligence" except in site name), and title patterns by section.

## Workflow

### Content Authoring

1. Apply the per-page directives from this CLAUDE.md
2. Write the new content to Website/<page-name>.mdx
3. Output format: MDX (Markdown with JSX components)

### File Inventory

| File | Notes |
|---|---|
| home.mdx | Site homepage |
| navbar.mdx | Navigation structure (source of truth) |
| footer.mdx | Site footer content |
| Teaching-with-AI/teaching-with-ai.mdx | Teaching with AI landing page (faculty audience) |
| Teaching-with-AI/ai-in-academics.mdx | Academic stakeholder review required |
| Teaching-with-AI/academic-integrity.mdx | Academic stakeholder review required |
| Teaching-with-AI/ai-in-the-syllabus.mdx | Academic stakeholder review required |
| Teaching-with-AI/grading-with-ai.mdx | Academic stakeholder review required |
| Learn-About-AI/learn-about-ai.mdx | How AI Works landing page |
| Learn-About-AI/how-llms-are-trained.mdx | How LLMs Are Trained (source content exists at mintlify) |
| Learn-About-AI/tokens.mdx | What Are Tokens article |
| Best-Practices/best-practices.mdx | Best Practices landing page |
| Best-Practices/sycophancy.mdx | Why AI Agrees with You article |
| Best-Practices/hallucination.mdx | Why AI Makes Things Up article |
| Best-Practices/managing-context.mdx | Managing Context article |
| Data-Privacy/protecting-data.mdx | Protecting Your Data landing page |
| Data-Privacy/data-privacy.mdx | Data privacy guidelines |
| Data-Privacy/data-usage-guide.mdx | Data Usage Guide -- step-by-step AI data usage decision guide |
| Data-Privacy/copyright.mdx | AI and Copyright considerations |
| Working-with-AI/working-with-ai.mdx | Working with AI landing page (staff/admin audience) |
| Working-with-AI/getting-started.mdx | Getting Started with AI article for employees |
| Learning-with-AI/learning-with-ai.mdx | Learning with AI landing page (student audience) |
| Resources/approved-tools.mdx | Approved Tools with data classification |
| Resources/chatgpt.mdx | ChatGPT access guide |
| Resources/copilot.mdx | Copilot access guide |
| Resources/gemini.mdx | Gemini access guide |

### Review Process

- Academic content changes should be flagged for stakeholder review before finalizing
- All content is reviewed by Ron before being sent to University Communications

### Exporting for University Communications

When content is ready to hand off to Jericho (Strategic Communication Coordinator), use the export script to convert Markdown to Word docs:

```bash
# Export only pages changed since a reference point (preferred)
./export-docx.sh --since <git-ref>

# Examples
./export-docx.sh --since HEAD~5          # Last 5 commits
./export-docx.sh --since handoff-v1      # Since a tagged handoff

# Export all pages (first-time handoff or full refresh)
./export-docx.sh
```

- **Script:** `export-docx.sh` (project root)
- **Output:** `export/` directory with `.docx` files mirroring `Website/` structure, plus a date-stamped zip (`ai-website-content-YYYYMMDD.zip`)
- **Cover sheet:** When using `--since`, a `CHANGES.docx` is included listing which pages changed and a summary pulled from commit messages
- **Handoff tagging:** After delivering to Jericho, tag the repo (e.g., `git tag handoff-v1`) so the next export can diff against it
- `export/` and `ai-website-content-*.zip` are gitignored

Jericho receives Word docs only -- no Markdown. The quality of the change summary depends on descriptive commit messages (see Commits section above).

## Preview Site

A Docusaurus preview site lives in `preview-site/`. It reads content from `../Website/` and renders it locally.

- **Run:** `cd preview-site && npm start` (serves at `http://localhost:3000/Artificial-Intelligence-Website/`)
- **Build:** `cd preview-site && npm run build`
- **baseUrl:** `/Artificial-Intelligence-Website/` -- all internal links must use Docusaurus `Link` component (not raw `<a>` tags) to get the prefix applied automatically
- **Directory index convention:** A file named the same as its parent directory (e.g., `teaching-with-ai.mdx` in `Teaching-with-AI/`) routes to the directory path (`/Teaching-with-AI`), not the file path (`/Teaching-with-AI/teaching-with-ai`)
- **Custom components:** `AccordionDropdown` (audience-grouped nav), `ImageCard` (landing page cards) -- source in `preview-site/src/components/`
- **Verify with Playwright**, not curl -- curl checks server-side routes but misses client-side routing issues like missing `baseUrl` prefixes

## Progress

Track content authoring status here. Update as pages are completed.

| Page | Status | Notes |
|------|--------|-------|
| Home | Draft complete | Rewritten per directives |
| Navbar | Draft complete | Restructured: 6 top-level items, "Get Started" with audience routing |
| Footer | Draft complete | IT contact info |
| Teaching with AI landing | Draft complete | New dedicated landing page (needs restructuring per landing-pages.md) |
| AI in Academics | Baseline copied | Requires academic stakeholder review |
| Academic Integrity | Baseline copied | Requires academic stakeholder review |
| AI in the Syllabus | Baseline copied | Requires academic stakeholder review |
| Grading with AI | Baseline copied | Requires academic stakeholder review |
| How AI Works landing | Draft complete | Renamed from "Learn About AI"; image cards linking to subpages |
| How LLMs Are Trained | Draft complete | Educational article covering three-phase training process |
| What Are Tokens | Draft complete | Educational article covering tokens, tokenization, context windows, and token economics |
| Best Practices landing | Draft complete | Image cards with plain-language titles |
| Why AI Agrees with You | Draft complete | First best practices article (sycophancy) |
| Why AI Makes Things Up | Draft complete | Second best practices article (hallucination) |
| Managing Context | Draft complete | Third best practices article |
| Protecting Your Data landing | Draft complete | Image cards linking to subpages |
| Data Privacy | Baseline copied | Not yet rewritten |
| Data Usage Guide | Draft complete | Step-by-step decision guide for AI data usage |
| AI and Copyright | Baseline copied | Not yet rewritten |
| Working with AI landing | Draft complete | Landing page for staff/admin employees (needs restructuring per landing-pages.md) |
| Getting Started with AI | Draft complete | Employee guide covering tool access, use cases, data basics |
| Learning with AI landing | Draft complete | Landing page for students (needs restructuring per landing-pages.md) |
| Approved Tools | Draft complete | Includes access guides, other tools acknowledgment |

## Git

### Commits

- Use imperative mood (e.g., "Add tools page content" not "Added tools page content")
- No emojis
- No Claude Code signatures (no "Co-Authored-By: Claude", no generated-with tags)
- Scope commits to logical units of work -- one page or one coherent change per commit, not bulk "update everything" commits
- Always run `git diff` before committing to verify what's being committed
- **Write descriptive messages that explain what changed and why.** Commit messages are consumed downstream by `export-docx.sh` to generate a plain-language change summary for University Communications. Write them so a non-technical reader (Jericho) understands what happened on each page.
  - Bad: `Update academic-integrity.md`
  - Bad: `Revise content`
  - Good: `Rewrite Academic Integrity page to clarify citation requirements and reduce redundancy`
  - Good: `Add Data Protection 101 article with examples for each classification level`

### Branching

- `main` is the primary branch
- Ask before creating feature branches unless a branching strategy has been discussed

### Changelog

This project maintains a `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.

- **Update CHANGELOG.md with every commit.** Every commit that changes content, structure, or project configuration must have a corresponding CHANGELOG entry.
- Use the standard categories: Added, Changed, Removed, Fixed
- Write entries from the perspective of the project's purpose (content overhaul), not implementation details
- Keep entries concise -- one line per change
- Group related changes under `## [Unreleased]` until a version is tagged
- Examples:
  - Added: "New Future-State content for the Tools page"
  - Changed: "Updated Privacy page to reflect new governance contacts"
  - Removed: "Removed Custom Bots and Connectors pages (inaccurate, out of scope)"
  - Fixed: "Corrected data classification levels for Copilot on Tools page"

