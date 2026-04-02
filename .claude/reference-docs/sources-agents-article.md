# Sources to use for the "What are AI Agents" article

Here are 5 authoritative sources that I'd consider the "canon" for defining and explaining AI agents right now. I've ordered them by how foundational they are:

**1. Anthropic — "Building Effective Agents" (Dec 2024)**
`https://www.anthropic.com/research/building-effective-agents`

This is the most widely-cited practitioner reference. Anthropic draws an important architectural distinction between **workflows** (LLMs and tools orchestrated through predefined code paths) and **agents** (systems where LLMs dynamically direct their own processes and tool usage). They also published a follow-up, "Effective Context Engineering for AI Agents," where they've gravitated toward an even simpler definition: "LLMs autonomously using tools in a loop." Extremely practical, pattern-based, and the source your Support Agent architecture is already built on.

**2. OpenAI — "A Practical Guide to Building Agents" (Apr 2025)**
`https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf`

34-page PDF. OpenAI defines agents as systems that independently accomplish tasks on behalf of users, leveraging an LLM to manage workflow execution and make decisions, with the ability to recognize when a workflow is complete and proactively correct actions if needed. More prescriptive than Anthropic's post — covers orchestration patterns (single-agent → multi-agent), guardrails, and when *not* to build an agent. Good complement to source #1.

**3. Google Cloud — "Agents" Whitepaper (Sep 2024, widely circulated Jan 2025)**
`https://www.kaggle.com/whitepaper-agents`
Authors: Julia Wiesinger, Patrick Marlow, Vladimir Vuskovic

Presents a comprehensive framework for understanding how interlinked cognitive architectures extend isolated LLMs beyond their current limitations to form AI agents, built on three essential components: the Model (central decision maker), Tools (the bridge to the real world), and an Orchestration layer. More academic in tone than Anthropic/OpenAI — good for the "what are the component parts" framing, with LangChain examples.

**4. IBM — "What Are AI Agents?"**
`https://www.ibm.com/think/topics/ai-agents`

IBM defines an AI agent as a system that autonomously performs tasks by designing workflows with available tools, encompassing functions beyond NLP including decision-making, problem-solving, interacting with external environments, and performing actions. This is IBM's canonical explainer page — vendor-neutral enough for leadership audiences, well-maintained, and hits the right level for non-technical stakeholders. Also check their companion piece "AI Agents in 2025: Expectations vs. Reality" for the skeptic's perspective (Marina Danilevsky's take on agents-as-rebranded-orchestration is worth reading).

**5. The Conversation / TechXplore — "AI agents arrived in 2025" (Dec 2025)**
`https://theconversation.com/ai-agents-arrived-in-2025-heres-what-happened-and-the-challenges-ahead-in-2026-272325`

This is the best *contextual* source — not a vendor piece. It tracks how the definition of AI agent shifted from the academic framing of "systems that perceive, reason and act" to Anthropic's more practical description of LLMs capable of using software tools and taking autonomous action. Also covers MCP, A2A protocol, the open-weight model surge, and governance (Linux Foundation's Agentic AI Foundation). Great for situating the term historically.

---

**Quick take on how I'd use these:** Sources 1-3 are the builder's trinity — they're technical deep dives into agents, but we can use the information provided and tailor it to a beginners guide. Source 4 is your leadership-friendly explainer. Source 5 is the "state of the field" narrative for context.