---
name: genai-site-writer
description: Write and revise content pages for the BYU-Idaho Artificial Intelligence website (byui.edu/genai). Use this skill whenever the user asks to write, rewrite, draft, or revise any page or article for the GenAI site, including Best Practices articles, landing pages, privacy content, academic content, or any Markdown page destined for Brightspot CMS. Also trigger when the user says things like "write an article about...", "draft a page for...", "revise the privacy page", or references writing content for Website/ in this repo. Even if the user just names a topic (e.g., "prompt injection", "data privacy"), invoke this skill if the context is clearly about adding or updating site content.
---

# AI Site Article Writer

Write content pages for BYU-Idaho's Artificial Intelligence website. This skill handles the full lifecycle: interviewing the user to understand the content, planning the article structure, and writing the final Markdown.

## Workflow

The workflow has three phases. Complete them in order.

### Phase 1: Interview

Before writing anything, understand what the user needs. Use `AskUserQuestion` for each clarifying question. Ask one question at a time. Prefer multiple-choice questions when possible.

**Questions to answer before moving on:**

1. **What page is this?** New page or revision of an existing page? If existing, read the current file first.
2. **What section does it belong to?** Best Practices, Academics, Data Privacy, Resources, or top-level?
3. **What is the core message?** What should the reader walk away knowing or doing?
4. **Who is the primary audience within employees?** Faculty, staff, admin, or all employees?
5. **Are there any constraints?** Academic stakeholder review needed? Policy content that must be verified? Specific sources or references to include?
6. **What tone or depth?** Does the user want a practical how-to, a conceptual explainer, or a reference page?

For Best Practices articles specifically, also ask:
- What is the primary risk scenario employees should worry about?
- Should the article open with a scenario or lead with the definition?
- Any tool-specific tips to include (ChatGPT, Copilot, Gemini)?

Stop interviewing when you have enough to write a clear plan. You do not need to ask every question above -- skip any that are already obvious from context or the user's initial request. Limit yourself to 2-4 questions total unless the topic genuinely requires more.

### Grounding: Read Reference Documents

Before planning or writing, read the reference documents that apply to this page. At minimum, always read:

1. `.claude/reference-docs/objectives.md` -- identify which governance objective(s) this page will serve
2. `.claude/reference-docs/strategy.md` -- confirm the content supports the institutional AI strategy

Also read these when relevant:

3. `.claude/reference-docs/church-guidance.md` -- when the page touches on ethics, transparency, data privacy, or institutional mission
4. `.claude/reference-docs/data-classification-policy.md` -- when the page involves data handling, tool approval levels, or privacy guidance
5. `.claude/reference-docs/landing-pages.md` -- when creating or revising an audience landing page (Teaching with AI, Working with AI, Learning with AI)

You do not need to quote these documents in the article. They inform tone, emphasis, and what belongs on the page.

### Phase 2: Plan

Enter Plan mode. Present a structured plan that includes:

- **Article title**
- **File path** (where it will be saved in `Website/`)
- **Governance objective(s) served** (which of the five objectives this page supports -- identified from the grounding step)
- **Section-by-section outline** with a 1-2 sentence description of each section's content
- **Estimated length** (word count range)
- **Style notes** (any deviations from the defaults below)
- **Integration steps** (what else needs updating: landing page, navbar, CLAUDE.md, CHANGELOG)

Wait for the user to approve the plan before proceeding.

### Phase 3: Implementation

Write the article to the specified file path. After writing:

1. If the article belongs to a section with a landing page, update the landing page to include a card for the new article.
2. Update `Website/navbar.md` if the navigation structure changed.
3. Offer to update `CLAUDE.md` (progress table, file inventory, directory tree) and `CHANGELOG.md`.
4. Offer to commit.

## Style Guide

These rules apply to all content written for this site.

### Voice and Tone

- **Practical and direct.** Lead with what the reader needs to know or do. No preamble.
- **Plain language.** Avoid jargon, buzzwords, and aspirational fluff. If a simpler word works, use it.
- **Employee audience.** Write for faculty, administrative staff, and staff at BYU-Idaho. Do not over-explain basic concepts. Do not write for students (future phase).
- **Second person.** Address the reader as "you." Exception: opening scenarios in Best Practices articles use third person ("an employee"), then transition to "you."
- **Cut aggressively.** When in doubt, cut it. Less content, not more.

### Formatting

- GitHub Flavored Markdown (GFM)
- No emojis
- Use `##` for major sections, `###` for subsections
- Bold lead-ins (`**Term:**`) for list items that need emphasis
- Italicized descriptions for card items on landing pages

#### Formatting Don'ts

Do not use any of the following:

- Horizontal rules (`---`) between major sections

### Content Rules

- **Do not invent policy.** If something is unclear, flag it for review rather than guessing.
- **Academic content boundary.** Pages in the Teaching with AI section require collaboration with academic stakeholders. Do not unilaterally rewrite academic policy. Flag proposed changes.
- **No visual/design decisions.** Output is Markdown content only. University Communications handles styling in Brightspot.
- **IT Help Center prominence.** The IT Help Center request form must be visible on any page that discusses tool requests, software acquisitions, or AI development requests.
- **Contact info.** Use IT Help Center link for requests. Use the team contact in footer.md for general questions.

### Landing Page Card Pattern

Landing pages use numbered lists to represent image cards:

```markdown
1. **Card Title**
   - *Short description of what the reader will find*
   - Links to page-name page (see `Section/filename.md`)
```

## Best Practices Article Structure

Best Practices articles follow a consistent pattern established by the sycophancy and hallucination articles. When writing a new Best Practices article, follow this structure:

1. **Opening scenario** (optional but recommended) -- 3-4 sentence vignette set at BYU-Idaho showing the problem in action. Third person ("an employee"), no character names. Transition to second person after this.
2. **What Is [Topic]?** -- 1-2 short paragraphs defining the concept. Accessible, no jargon. Emphasize this is a limitation, not malice.
3. **What Causes It?** -- 2-4 key points, one short paragraph each with bold lead-ins. Accessible explanation, not a deep technical dive.
4. **Why Is It a Problem?** -- Concrete examples grounded in university work context. Consider both internal risks (bad decisions) and external risks (reputational damage).
5. **Best Practices** -- Split into subsections as appropriate (e.g., Detection + Prevention). Each point gets a bold lead-in with 1-2 sentences of explanation. Include Bad/Good prompt examples where they add clarity:
   - *Bad:* "Example of what not to do"
   - *Good:* "Example of what to do instead"
6. **IT Help Center closing line.**

Target length: 600-800 words.

For style reference, existing Best Practices articles are at:
- `Website/Best-Practices/sycophancy.mdx`
- `Website/Best-Practices/hallucination.mdx`

Reading these before writing a new article is recommended but not required.

## Project Integration

### File Locations

- All site content lives in `Website/`
- Subdirectories: `Teaching-with-AI/`, `Best-Practices/`, `Data-Privacy/`, `Resources/`, `Working-with-AI/`, `Learning-with-AI/`, `Learn-About-AI/`
- Navigation source of truth: `Website/navbar.mdx`
- Landing pages: `best-practices.mdx`, `teaching-with-ai.mdx`, `protecting-data.mdx`, `approved-tools.mdx`, `working-with-ai.mdx`, `learning-with-ai.mdx`, `learn-about-ai.mdx`

### After Writing

Always check whether these need updating:
- The relevant landing page (add a card for new articles)
- `Website/navbar.mdx` (if nav structure changed)
- `CLAUDE.md` (directory tree, file inventory, progress table)
- `CHANGELOG.md` (every content change gets an entry)

### Reference Documents

All reference documents live in `.claude/reference-docs/`. See the Grounding step above for when to read each one. Quick index:

| Document | Use when writing about... |
|----------|--------------------------|
| `church-guidance.md` | Ethics, transparency, institutional mission, AI limitations |
| `strategy.md` | Strategic priorities, institutional direction, why AI matters at BYU-Idaho |
| `objectives.md` | Content relevance -- does this page serve a governance objective? |
| `data-classification-policy.md` | Data classification levels, tool approval, privacy guidance |
| `landing-pages.md` | Audience landing page structure (Teaching/Working/Learning with AI) |
| `naming-conventions.md` | Page titles, nav labels, terminology rules, label hierarchy across surfaces |
