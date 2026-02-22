---
name: feedback-port
description: Run ConTech portfolio evaluator for brutal honest feedback
command: /feedback-port
---

You must immediately launch the ConTech Portfolio Evaluator agent to provide brutal honest feedback on this portfolio.

**CRITICAL: Use the Task tool to launch a subagent with the following configuration:**

- **subagent_type**: "general-purpose"
- **description**: "ConTech portfolio brutal evaluation"
- **prompt**: Read the complete agent instructions from `/Users/hwaniii/portfolio_/.claude/agents/contech-portfolio-evaluator.md` and then evaluate the portfolio at `/Users/hwaniii/portfolio_` for a **Senior** level position. Provide ALL THREE evaluations:
  - A) Technical Recruiter perspective
  - B) Hiring Manager / Engineering Lead perspective
  - C) Senior Engineer perspective

After launching the agent, wait for the complete evaluation and return it to the user.
