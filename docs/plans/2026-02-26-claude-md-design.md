# CLAUDE.md Design for BYUI-GenAI-Site

**Date:** 2026-02-26
**Author:** Ron Vallejo
**Status:** Approved

## Context

BYU-Idaho reorganized GenAI governance. IT now has a leadership role. The CIO tasked the AI Engineering team with overhauling the GenAI website (www.byui.edu/genai). This repository manages that content overhaul.

## Design Decisions

### Approach

Hybrid CLAUDE.md -- editorial principles + site structure + per-page directives in a single file. Chosen for single-source-of-truth simplicity over separating strategic and tactical concerns.

### Key Decisions

1. **Audience:** Employees only (faculty, admin, staff). Student content is a future phase.
2. **IT's role:** Owns technology side (tool approvals, security, acquisitions) and serves as intake point. Academic policy stays with academic stakeholders.
3. **Academic content:** Maintained on the site for now, but updates require collaboration with academic stakeholders.
4. **IT Help Center:** Prominently featured on Home and Tools pages. All new software/AI requests route through it.
5. **Tools page:** Renamed from Products. Only ChatGPT, Copilot, Gemini. Data classification governance replaces "Conditionally Approved" status.
6. **Removed pages:** Custom Bots and Connectors (inaccurate noise).
7. **Training:** Placeholder page until curated content is ready.
8. **Privacy and Copyright:** Largely accurate, keep with cleanup.
9. **About GenAI:** Modernize tone and content for employee audience.
10. **Contact info:** Replace old University AI Office and Learning Innovation & Technology references with IT Help Center + team contact (TBD).

### Site Structure

```
Home
About GenAI
Tools
AI in Academics
  Academic Integrity
  AI in the Syllabus
  Grading with AI
Privacy
Copyright
Training
```

### Removed Pages

- Custom Bots
- Connectors
- Product-specific subpages
- Events/Expo

## CLAUDE.md Sections

1. **Project Overview** -- repo purpose, directories, scope, audience
2. **Governance Model** -- IT's role, academic content boundaries, key directives (IT Help Center, noise removal, contact info)
3. **Site Structure** -- new navigation, removed pages
4. **Per-Page Directives** -- specific instructions for each page's transformation
5. **Editorial Principles & Workflow** -- content authoring rules, file naming, review process
