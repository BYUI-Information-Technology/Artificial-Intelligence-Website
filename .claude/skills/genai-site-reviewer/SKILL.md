---
name: genai-site-reviewer
description: Review and audit content pages on the BYU-Idaho Artificial Intelligence website against institutional reference documents. Use this skill when the user asks to review, audit, check, or validate any page or article for alignment with BYU-Idaho's AI strategy, governance objectives, Church guiding principles, editorial standards, or data classification policy. Also trigger when the user says things like "review this page", "check alignment", "audit the site", "does this page meet our standards", or asks to validate content before committing or handing off. Can review a single page, a section, or the entire site.
---

# AI Site Content Reviewer

Review content pages on BYU-Idaho's Artificial Intelligence website for alignment with institutional reference documents and editorial standards. This skill acts as a quality gate. Run it after writing new content, before committing, or to audit existing drafts.

## Workflow

### Step 1: Identify Target

Determine what to review. Ask the user if unclear.

- **Single page:** User specifies a file (e.g., `Website/Best-Practices/sycophancy.mdx`)
- **Section:** All pages in a subdirectory (e.g., `Website/Protecting-Your-Data/`)
- **Full site:** All pages under `Website/`

### Step 2: Load Reference Documents

Read all five reference documents before reviewing any content. These are the grounding sources:

1. `.claude/reference-docs/church-guidance.md`: Church AI Guiding Principles
2. `.claude/reference-docs/strategy.md`: BYU-Idaho AI Strategy
3. `.claude/reference-docs/objectives.md`: Governance Objectives
4. `.claude/reference-docs/data-classification-policy.md`: Data Classification Policy
5. `.claude/reference-docs/landing-pages.md`: Landing Page Structure
6. `.claude/reference-docs/naming-conventions.md`: Naming Conventions

Also read the CLAUDE.md editorial principles and per-page directives for the target page(s).

### Step 3: Review Each Page

For each page, evaluate against the six check areas below. Read the page content fully before evaluating.

#### Check 1: Governance Objectives Alignment

Does the page clearly serve at least one of the five governance objectives?

| Objective | What to look for |
|-----------|-----------------|
| **Informed Leadership** | Does it help leaders make better AI decisions with accurate, current information? |
| **Clear Governance** | Does it clarify who decides what, and how AI questions get answered? |
| **Clear Rules** | Does it help employees and students know what's acceptable AI use? |
| **Proactive Sharing** | Does it share lessons learned, patterns, or practices others can apply? |
| **Communication Hub** | Does it serve as a channel for news, events, or updates about AI? |

**Flag if:** The page doesn't clearly serve any objective. Recommend which objective(s) it could better serve and how.

#### Check 2: Strategy Alignment

Does the content support BYU-Idaho's AI strategy without contradicting it?

- **Critical requirements:** Does it respect alignment with prophetic guidance and data privacy/security?
- **Student priorities:** If relevant, does it support advancing knowledge, workforce readiness, or student support?
- **Enabling workstreams:** Does it contribute to AI literacy, R&D, institutional learning, or IT processes?

**Flag if:** Content contradicts a strategic priority, overemphasizes one priority while ignoring others that apply, or makes claims that conflict with the institutional direction.

#### Check 3: Church Principles Alignment

Does the content reflect the four Church AI guiding principles where relevant?

| Principle | What to look for |
|-----------|-----------------|
| **Spiritual Connection** | AI is positioned as a tool that supports (not replaces) human judgment and connection |
| **Transparency** | Content is honest about AI limitations; any AI-generated content is disclosed |
| **Privacy and Security** | Data protection guidance is present where needed; sacred/personal information is treated with care |
| **Accountability** | Content encourages testing, reviewing outputs, and compliance; doesn't promote uncritical AI use |

**Flag if:** Content encourages blind trust in AI, omits relevant data protection guidance, or frames AI in ways that conflict with the principles. Not every principle applies to every page; only flag when a principle is relevant and absent.

#### Check 4: Style and Editorial Compliance

Does the page follow the editorial principles and style guide?

- **Voice:** Practical, direct, second person ("you"). No preamble or filler.
- **Language:** Plain language. No jargon, buzzwords, or aspirational fluff.
- **Audience:** Written for employees (faculty, staff, admin). Not over-explaining basics. Not writing for students (except Learning with AI).
- **Policy accuracy:** No invented policy. Unclear items flagged for review, not guessed at.
- **Academic boundary:** Academic policy pages not unilaterally rewritten.
- **Formatting:** GFM, no emojis, no horizontal rules between sections, no double hyphens (`--`) or em dashes (`---`), correct heading hierarchy.
- **IT Help Center:** Visible on pages discussing tool requests, acquisitions, or AI development requests.
- **Data classification:** If data classification is mentioned, does it match the modified 4-tier system in the reference doc?
- **Per-page directives:** Does the content follow the specific directives in CLAUDE.md for this page?
- **Frontmatter completeness:** Every page must have YAML frontmatter with three fields: `url` (production URL on byui.edu), `title` (canonical page title), and `slug` (Docusaurus route). Flag any missing fields. The expected format is:
  ```yaml
  ---
  url: "https://www.byui.edu/genai/<path>"
  title: "<Page Title>"
  slug: /<Section>/<filename>
  ---
  ```

#### Check 5: Naming & IA Consistency

Does the page's labeling match across all surfaces where it appears?

**Pre-check:** Read `.claude/reference-docs/naming-conventions.md` for the authoritative rules.

For each page under review, verify consistency across these surfaces:

| Surface | Where to find it | What to check |
|---------|-------------------|---------------|
| **Frontmatter title** | The page's own `title:` field | This is the canonical label. All other surfaces derive from it. |
| **H1** | The page's first `#` heading | Must match frontmatter title exactly (exception: access guides may use longer descriptive form) |
| **Navbar label** | `Website/navbar.mdx` | Must be recognizable as the canonical title; may shorten by dropping trailing qualifiers |
| **Landing page card** | The parent section's landing page | Card title should match canonical title or natural short form |
| **Home page card** | `Website/home.mdx` (if applicable) | May use concise verb-phrase form |
| **Cross-references** | Other pages that link to this page | Should use canonical title on first mention |
| **CLAUDE.md** | Navigation section, file inventory, directory tree | Must use canonical title with correct file path |

**Check each of the following:**

1. **Title-H1 match:** Does the H1 match the frontmatter title exactly?
2. **Navbar accuracy:** Does the navbar label in `navbar.mdx` point to the correct file path and use a label consistent with the canonical title?
3. **Landing page card accuracy:** Is the page listed on its parent landing page with a matching title?
4. **Cross-reference accuracy:** Do other pages that link to this page use the correct path and a recognizable form of the title?
5. **CLAUDE.md sync:** Does CLAUDE.md reference this page with the correct canonical title and file path in all relevant sections (navigation, file inventory, directory tree)?
6. **Terminology compliance:**
   - "AI" is used (not "Artificial Intelligence") except in the site name on home.mdx
   - No "GenAI" anywhere
   - Abbreviations follow naming conventions rules
7. **Structural consistency:**
   - Audience landing pages use "[Verb]-ing with AI" pattern
   - Best Practices articles use plain-language titles (not "Best Practices for...")
   - Access guides use "Access [Tool Name]" in nav, descriptive form in H1
   - No "at BYU-Idaho" or "BYU-Idaho" in page titles (site context provides this)

**Flag if:** Any surface has a label that doesn't match the naming conventions, any file path reference is stale, or CLAUDE.md is out of sync with the actual file system.

#### Check 6: AI Writing Patterns

Does the page read like a human wrote it? Scan for the following LLM writing tropes. Individual instances are not automatic flags. The tell is **clustering**: when 3+ patterns appear on a single page, the content reads as unmistakably AI-generated and must be revised.

**Sentence-level patterns:**

| Pattern | What to look for |
|---------|-----------------|
| **Negative parallelism** | "It's not X, it's Y" constructions that manufacture false profundity. Includes: "not because X, but because Y" and cross-sentence reframes ("The question isn't X. The question is Y."). One per page max; more is a flag. |
| **Rhetorical Q&A** | Self-posed questions answered immediately: "The result? Devastating." "The takeaway? Simple." Nobody writes like this at scale except LLMs. |
| **"Not X. Not Y. Just Z."** | Dramatic countdown negation to build false tension before a reveal. |
| **Anaphora abuse** | Repeating the same sentence opening 3+ times in quick succession. |
| **Participial tacking** | Ending sentences with shallow "-ing" analysis phrases: "highlighting its importance," "reflecting broader trends," "contributing to the development of..." These say nothing. |
| **False ranges** | "From X to Y" where X and Y aren't on any real spectrum. "From innovation to cultural transformation" has no meaningful middle. |
| **"It's worth noting"** | Filler transitions that connect nothing: "It bears mentioning," "Importantly," "Interestingly," "Notably." Cut or replace with an actual transition. |

**Word choice patterns:**

| Pattern | What to look for |
|---------|-----------------|
| **"Delve" and friends** | Overuse of: "delve," "utilize," "leverage" (as verb), "robust," "streamline," "harness," "foster," "bolster," "spearhead." Replace with plain verbs. |
| **"Tapestry" / "Landscape"** | Ornate nouns where simpler words work: "tapestry," "landscape," "paradigm," "synergy," "ecosystem," "framework," "realm." |
| **Magic adverbs** | "Quietly," "deeply," "fundamentally," "remarkably," "arguably" used to inject false significance. |
| **The "Serves as" dodge** | Replacing "is" with "serves as," "stands as," "represents," "marks" to avoid simple copulas. Just say "is." |

**Tone patterns:**

| Pattern | What to look for |
|---------|-----------------|
| **"Here's the kicker"** | False suspense before an unremarkable point. Also: "Here's the thing," "Here's where it gets interesting," "Here's what most people miss." |
| **"Let's break this down"** | Patronizing pedagogical voice. Also: "Let's unpack this," "Let's explore," "Let's dive in/deeper." The site audience is professional adults. |
| **Grandiose stakes inflation** | Everything is world-historically important. A page about prompt tips becomes a meditation on the future of education. Keep stakes proportional. |
| **Excessive hedging** | Uniform cautiousness that strips writing of conviction. Every claim softened with "may," "might," "could potentially," "it's possible that." Take a position. |
| **Invented concept labels** | Fabricated compound terms that sound analytical but aren't established: "the supervision paradox," "the acceleration trap." Name a thing, skip the argument. |
| **Vague attributions** | "Experts argue..." "Industry observers note..." without naming anyone. If you can't name the source, cut the claim or find a real citation. |

**Structure patterns:**

| Pattern | What to look for |
|---------|-----------------|
| **Fractal summaries** | "What I'm going to tell you; what I'm telling you; what I just told you" at every level. Every section summarized, then the page summarized again. Say it once. |
| **One-point dilution** | A single argument restated 5+ ways across the page. Padding a simple point with different metaphors and framings to seem comprehensive. |
| **Listicle in a trench coat** | Numbered points disguised as prose: "The first challenge is... The second challenge is... The third challenge is..." Either commit to a list or write actual prose. |
| **Signposted conclusions** | "In conclusion," "To sum up," "In summary." Competent writing doesn't announce it's ending. |

**Formatting patterns:**

| Pattern | What to look for |
|---------|-----------------|
| **Bold-first bullets** | Every bullet point starts with a bolded keyword. Almost no human formats lists this way. (Note: this skill's own report template uses bold-first for structured output, which is appropriate for reports but not for article prose.) |
| **Em-dash overuse** | More than 2-3 em dashes per page. Already caught by editorial rules banning `--` and `---`, but also watch for Unicode em dashes (—) that bypass the formatting check. |
| **Uniform sentence length** | Every sentence is 15-25 words with no variation. Human writing naturally mixes short punchy sentences with longer complex ones. Read a paragraph aloud; if every sentence hits the same beat, flag it. |

**Scoring:**

- **0-2 patterns found:** Pass. Isolated instances are normal.
- **3-4 patterns found:** Should fix. The page has a detectable AI voice. Identify the specific patterns and rewrite those passages.
- **5+ patterns found:** Must fix. The page reads as AI-generated. Flag for full rewrite of affected sections with specific pattern callouts.

When flagging, quote the offending passage and name the pattern so the fix is actionable. Do not just say "AI-sounding." Say: "Negative parallelism on line 14: 'It's not about the tool, it's about the mindset.' Rewrite as a direct statement."

### Step 4: Report

Output a structured review report for each page. Use this format:

```
## Review: [Page Title] (`filepath`)

### Objectives Alignment
- **Serves:** [which objective(s)]
- **Finding:** [pass/flag with explanation]

### Strategy Alignment
- **Finding:** [pass/flag with explanation]

### Church Principles Alignment
- **Relevant principles:** [which apply to this page]
- **Finding:** [pass/flag with explanation]

### Editorial Compliance
- **Frontmatter:** [complete/missing fields — list which of url, title, slug are present or absent]
- **Finding:** [pass/flag with specific issues]

### Naming & IA Consistency
- **Canonical title:** [frontmatter title]
- **H1 match:** [yes/no]
- **Navbar match:** [yes/no; note label used]
- **Landing page card match:** [yes/no; note if listed]
- **CLAUDE.md sync:** [yes/no; note discrepancies]
- **Finding:** [pass/flag with specific issues]

### AI Writing Patterns
- **Patterns found:** [count and list pattern names]
- **Severity:** [pass (0-2) / should fix (3-4) / must fix (5+)]
- **Instances:** [quote offending passages with pattern name and line number]
- **Finding:** [pass/flag with rewrite guidance]

### Summary
- **Status:** [Pass / Needs Revision]
- **Action items:** [numbered list of specific fixes, if any]
```

### Severity Levels

When flagging issues, categorize by severity:

- **Must fix:** Contradicts a reference document, contains inaccurate policy, violates a hard editorial rule (e.g., invented policy, wrong data classification level), or has 5+ AI writing patterns (page reads as AI-generated)
- **Should fix:** Misses an opportunity to serve an objective, uses unclear language, has formatting issues, or has 3-4 AI writing patterns (detectable AI voice)
- **Consider:** Minor tone adjustments, opportunities to strengthen alignment, suggestions that are subjective, or 1-2 isolated AI writing patterns

### Step 5: Offer Fixes

After presenting the report, offer to fix the flagged issues directly. If the user agrees, make the edits, then re-run the relevant checks to confirm the fixes resolve the issues.

## Multi-Page Reviews

When reviewing a section or the full site, output individual page reports, then a summary:

```
## Site Review Summary

| Page | Status | Must Fix | Should Fix | Consider | AI Patterns |
|------|--------|----------|------------|----------|-------------|
| ... | ... | ... | ... | ... | [count] |

### Cross-Cutting Issues
[Issues that appear across multiple pages]

### Recommendations
[Prioritized list of actions]
```

## When NOT to Flag

- Do not flag academic policy pages for content accuracy. Those require stakeholder review, not automated correction. Only flag style/formatting issues on those pages.
- Do not flag pages for missing objectives alignment if the page is a landing page (landing pages serve as navigation, not standalone content).
- Do not require every Church principle to appear on every page. Only flag when a relevant principle is absent.
- Do not flag home page card labels for not matching canonical titles. Home page cards intentionally use concise verb phrases per naming conventions.
- Do not flag access guide H1s for being longer than the frontmatter title. Access guides are explicitly allowed to use a longer descriptive form in the H1.
- Do not flag isolated AI writing patterns (1-2 per page) as must-fix. Individual instances of common patterns like em dashes or a single "It's not X, it's Y" are normal in human writing. Only escalate when patterns cluster.
- Do not flag the report template's own bold-first bullet formatting as an AI pattern. Structured review output is not article prose.
- Do not flag technical terms like "framework" or "ecosystem" when they are used in their literal, domain-appropriate sense (e.g., "the OpenAI Agents SDK framework" or "the Azure ecosystem"). Only flag when used as vague ornamental nouns.
