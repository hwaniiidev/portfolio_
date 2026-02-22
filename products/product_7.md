---
id: 'arx'
title: 'ARX'
date: '2026.11 - Present'
summary: 'AI agent-driven tool for architectural visualization. Enables natural language editing of architectural renders using advanced AI models and custom UX workflows.'
description: 'ARX is a web-based architectural rendering tool built to improve designer workflows. It leverages AI models for photorealistic rendering, enhanced with a custom natural language interface for iterative design adjustments. Built entirely using AI agents to accelerate development and showcase modern AI-driven engineering practices.'
company: 'Side Project'
company_url: 'https://arx-five.vercel.app/'
web_url: 'https://arx-five.vercel.app/'
tags: ['AI Agents', 'Next.js', 'TypeScript', 'Python', 'FastAPI', 'OpenAI', 'Architecture', 'ConTech']
---

<table>
  <tr>
    <td><img src="/images/product/arx/figure_1.png" alt="ARX Architecture" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;"></td>
    <td><img src="/images/product/arx/figure_2.png" alt="Natural Language Interface" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;"></td>
    <td><img src="/images/product/arx/figure_3.png" alt="AI Agent Workflow" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;"></td>
    <td><img src="/images/product/arx/figure_4.png" alt="Rendering Samples" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;"></td>
  </tr>
</table>

### Background

Architectural rendering tools produce high-quality outputs but lack intuitive UX for iterative design. Architects and designers need to repeatedly adjust renders (lighting, materials, camera angles) using technical parameters — a slow, friction-heavy process.

ARX wraps AI rendering capabilities in a natural language interface, allowing users to request changes like "make the building warmer tones" or "add sunset lighting" without parameter tuning. This mirrors the workflow improvements needed in construction tech, where field teams need tools that remove technical friction.

**Key motivation:** Demonstrate proficiency with AI agents while solving a real design workflow problem relevant to the construction and architecture industries.

### Project Scope

- **Full-stack development (100%):** Next.js frontend + Python backend
- **AI agent integration (100%):** Built the entire project using AI pair programming and agent-assisted development
- **UX design (100%):** Simplified complex rendering controls into conversational interface
- **Architecture & DevOps (100%):** System design, API integration, deployment workflow

### Key Features

- **Natural Language Rendering Control:** Users describe changes in plain English; AI translates to rendering API calls
- **Real-time Preview:** Iterative rendering with diff visualization for quick iterations
- **Architecture-First UI:** Tailored for architectural workflows with material palettes, lighting presets, and camera control
- **AI Agent Development Workflow:** Leveraged Claude/Cursor/AI agents for rapid prototyping and development
- **Responsive Design:** Works seamlessly on desktop and tablet devices for on-site design reviews

### Technical Architecture

The system follows a modern three-tier architecture:

1. **Frontend Layer (Next.js 14 + TypeScript)**
   - Server-side rendering for optimal performance
   - Real-time WebSocket connections for rendering updates
   - Tailwind CSS for responsive, mobile-first design
   - React Query for efficient data fetching and caching

2. **Backend Layer (Python + FastAPI)**
   - RESTful API for rendering requests
   - Natural language processing pipeline using OpenAI/Anthropic models
   - Parameter mapping system that translates user intent to rendering API calls
   - Queue system for managing concurrent rendering jobs

3. **AI Integration Layer**
   - Intent parsing using GPT-4/Claude for semantic understanding
   - Parameter extraction and validation
   - Context-aware rendering suggestions
   - Feedback loop for improving translation accuracy

### Development Process

This project showcases modern AI-assisted development practices:

- **AI Pair Programming:** Used Claude Code and Cursor for real-time code generation and refactoring
- **Agent-Driven Architecture:** AI agents helped design system architecture and API contracts
- **Automated Testing:** AI-generated test cases and edge case scenarios
- **Documentation:** AI-assisted technical documentation and code comments

**Development Speed Impact:** 10x faster prototyping compared to traditional coding, with focus on high-level design decisions rather than boilerplate implementation.

### Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, React Query
- **Backend:** Python, FastAPI, Pydantic
- **AI Integration:** OpenAI API, Anthropic Claude API
- **Database:** PostgreSQL (future: rendering history and user preferences)
- **Development Tools:** Claude Code, Cursor, GitHub Copilot
- **Deployment:** Vercel (frontend), Railway/Fly.io (backend)

### ConTech Relevance

ARX directly addresses workflow challenges in the architecture and construction industries:

- **Client Presentations:** Enables rapid iteration during client meetings without technical expertise
- **Design Approvals:** Reduces time from concept to approved renders, accelerating project timelines
- **Field Collaboration:** Tablet-optimized interface allows on-site design discussions
- **Stakeholder Communication:** Natural language interface makes rendering accessible to non-technical stakeholders

### Impact & Metrics

- **Development Time:** 2 months from concept to working prototype (estimated 6+ months with traditional development)
- **Iteration Speed:** Reduces per-change rendering time from 5-10 minutes to <1 minute
- **User Workflow:** Enables designers to focus on creative decisions rather than parameter tuning
- **Learning Outcome:** Validated AI agent development practices applicable to production software engineering

### Future Roadmap

- **Multi-user Collaboration:** Real-time co-editing for design teams
- **Project Management Integration:** Connect with construction project management tools
- **Mobile App:** Native iOS/Android apps for field use
- **Advanced AI Models:** Integration with latest architectural rendering AI models
- **Template Library:** Pre-built architectural styles and material combinations
