# Design Spec: Hallucination Best Practices Article

**Date:** 2026-03-17
**Author:** Ron Vallejo (with Claude)
**Output:** `Website/Best-Practices/hallucination.md`

## Purpose

Write a Best Practices article for BYU-Idaho employees on how to detect and prevent AI hallucination. This is the second article in the Best Practices series (after sycophancy).

## Audience

BYU-Idaho employees: faculty, administrative staff, and staff. Not students (future phase).

## Design Decisions

- **Approach:** Hybrid (Approach C) -- mirrors sycophancy article's section pattern for series consistency, but splits Best Practices into Detection and Prevention subsections to give hallucination's verification angle proper treatment.
- **Technical depth:** Accessible "why" without deep technical dive. No mention of attention mechanisms, token probabilities, or training architectures.
- **Tool specificity:** General principles that apply to any AI tool, with ChatGPT-specific tips woven naturally into relevant sections (not siloed).
- **Risk framing:** Equal weight on internal bad decisions and external reputational risk.
- **Opening:** Relatable scenario (unlike sycophancy, which leads with definition).
- **"What Engineers Are Doing" section:** Intentionally omitted. The sycophancy article includes this section because the mitigations (RLAIF, activation steering) are distinct research efforts the reader can't act on but may find interesting. For hallucination, the engineering mitigations (RAG, grounding, citations) are better covered as practical tips within the Best Practices section itself -- they're things the reader can actually use. A separate "what engineers are doing" section would either duplicate the Best Practices content or drift into technical depth we've agreed to avoid.
- **Voice transition:** Opening scenario uses third-person ("an employee"), then the article transitions to second-person ("you") starting with the definition section and stays there. This is intentional -- the scenario is observational, then the article speaks directly to the reader.
- **Inline examples:** Include Bad/Good prompt examples in the Prevention subsection where they add clarity (matching sycophancy's style). Detection section uses descriptive red flags without prompt examples.
- **Target length:** Approximately 600-800 words. The opening scenario and Detection/Prevention split will make this slightly longer than sycophancy (~550 words), but the CLAUDE.md directive to "cut aggressively" still applies.
- **Title convention:** Use "Best Practices for Detecting and Preventing Hallucination" to match sycophancy's "Best Practices for Mitigating Sycophancy" pattern.
- **ChatGPT specificity boundary:** Mention ChatGPT by name where a feature is directly relevant (e.g., asking for source citations). Do not create ChatGPT-specific subsections or walkthroughs.
- **Cross-linking:** Do not cross-link to the sycophancy article within the body. The Best Practices landing page handles navigation between articles.

## Article Structure

### Opening Scenario

3-4 sentence vignette set at BYU-Idaho. An employee asks ChatGPT about a university policy, gets a confident and detailed answer with a specific policy name and section number -- but the policy doesn't exist. Shows what hallucination feels like before defining the term. No character names, just "an employee." Written in third person.

### Section 1: What Is Hallucination?

1-2 short paragraphs. AI generating information that sounds confident and plausible but is partially or completely fabricated. Emphasize: not "lying" (no intent), it's a fundamental limitation of how these tools work. Accessible, no jargon.

### Section 2: What Causes It?

Three key points, one short paragraph each:

1. **Pattern completion, not knowledge retrieval** -- LLMs predict the next most likely word based on training data. They don't look things up from a database of facts. When the model lacks good information, it fills gaps with what sounds right.
2. **No awareness of its own uncertainty** -- Unlike a person who might say "I'm not sure," the model generates text with the same confident tone whether accurate or fabricating.
3. **Training data has limits** -- Knowledge cutoff date, no internal/proprietary information (like BYU-Idaho policies), can reflect errors from training data.

### Section 3: Why Is It a Problem?

Two equally weighted angles, one short paragraph each with concrete university-context examples:

1. **Bad decisions internally** -- Acting on fabricated facts: citing a nonexistent policy, relying on made-up statistics, trusting a hallucinated procedure. Risk: output looks authoritative enough that you don't question it.
2. **Reputational risk externally** -- Sharing AI-generated content with students, colleagues, or external partners that contains inaccuracies. Erodes trust in the university.

### Section 4: Best Practices

Split into two subsections. Each point gets a bold lead-in with 1-2 sentences of explanation (matching sycophancy article format).

**Detection (How to Spot It)**

Red flags:
- Overly specific details you didn't ask for (exact dates, section numbers, statistics)
- Citations or references you can't find with a quick search
- Information that's almost right but slightly off
- The model confidently answers something highly niche or internal to BYU-Idaho that it shouldn't know

**Prevention (How to Reduce and Verify It)**

Prompting strategies and verification habits:
- **Give the model verified context** -- Hallucination often happens because the model is guessing without good source material. You can reduce this by providing context yourself. Two practical methods:
  - Prompt ChatGPT to search the web (or another resource) to look up the information before answering. This gives the AI externally verified context rather than relying on its training data alone.
  - Attach the relevant content directly as a file upload. For example, upload the policy as a PDF, then ask questions about it. The AI now has the verified source material and is far less likely to fabricate details.
- Ask the model to flag where it's uncertain ("If you're not sure, say so")
- Break complex questions into smaller, verifiable pieces
- Cross-reference factual claims against a primary source before acting
- ChatGPT-specific: ask for sources, then actually check them -- they may not exist
- Don't use AI output as a primary source for policy, data, or anything consequential without human verification
- When drafting communications, verify every factual claim before sending

### Closing

Horizontal rule followed by a single italicized line: *For support, visit the [IT Help Center](https://td.byui.edu/SBTDClient/79/ITHelpCenter/Home/?ToUrl=).* This matches the closing format used on the access guide pages (chatgpt.md, copilot.md, gemini.md). Note: the sycophancy article currently lacks this closing -- it should be added to sycophancy.md in a separate commit for series consistency.

## Style Guide

- Tone: practical, direct, plain language
- No jargon, buzzwords, or aspirational fluff
- No emojis
- GitHub Flavored Markdown
- Matches sycophancy article's voice and formatting conventions
- Employee audience -- no over-explaining basic concepts

## Out of Scope

- Visual/design decisions (University Communications handles Brightspot styling)
- Student-facing content
- Tool-specific guides beyond brief ChatGPT mentions (no ChatGPT-specific subsections or walkthroughs)
- Deep technical explanations of model architectures

## Follow-Up Items (Separate Commits)

- Add IT Help Center closing line to sycophancy.md for series consistency
- Fix sycophancy.md title typo: "Syncophancy" should be "Sycophancy"
- Update CLAUDE.md Progress table when article is completed
