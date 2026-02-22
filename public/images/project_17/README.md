# Project 17 Images - AI Agent-Driven Development Workflow

## Required Image

### `figure_1.png` - AI Agent Development Workflow Diagram

**Purpose:** Visualize the AI-assisted development pipeline used to build ARX

**Content:** Process flowchart showing:

```
┌─────────────────────────────────────────────┐
│         SYSTEM DESIGN PHASE                 │
│  ┌─────────────────────────────────────┐   │
│  │ Claude: Architecture Discussion     │   │
│  │ → System diagrams                   │   │
│  │ → API specifications                │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│         CODE GENERATION PHASE               │
│  ┌──────────────┬──────────────┬─────────┐ │
│  │ Cursor       │ Claude Code  │ Copilot │ │
│  │ Scaffolding  │ Complex      │ Inline  │ │
│  │              │ Logic        │ Suggest │ │
│  └──────────────┴──────────────┴─────────┘ │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│         TESTING & VALIDATION PHASE          │
│  ┌─────────────────────────────────────┐   │
│  │ AI-Generated Tests                  │   │
│  │ Manual Code Review                  │   │
│  │ Quality Assurance                   │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│         DOCUMENTATION PHASE                 │
│  ┌─────────────────────────────────────┐   │
│  │ AI-Assisted Documentation           │   │
│  │ Code Comments                       │   │
│  │ Technical Specs                     │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

**Key Elements:**
1. **Four distinct phases** (Design → Code → Test → Docs)
2. **Tool logos/icons** for Claude, Cursor, GitHub Copilot
3. **Arrows showing flow** between phases
4. **Metrics callout:** "10x faster prototyping" or "2 months vs 6-8 months"
5. **Color coding:** Different colors for each phase

**Style:**
- Professional flowchart/pipeline diagram
- Clean, modern design
- Use tool brand colors (Claude orange, GitHub black, etc.)
- Include time savings metric prominently

**Tools to Create:**
- Figma (recommended for professional look)
- Excalidraw (quick, clean diagrams)
- Draw.io / Lucidchart (flowchart tools)
- Mermaid diagram → screenshot (code-based diagrams)

**Size:** 1200-1600px wide, 800-1200px tall

---

## Alternative: Comparison Diagram

Show side-by-side comparison:

```
Traditional Development  |  AI-Assisted Development
                        |
Manual scaffolding      |  Cursor auto-generation
(2-3 days)             |  (2-3 hours)
        ↓               |         ↓
Manual implementation   |  Claude Code + review
(3-4 weeks)            |  (3-4 days)
        ↓               |         ↓
Manual testing         |  AI-generated tests
(1 week)               |  (1 day)
        ↓               |         ↓
Manual docs            |  AI-assisted docs
(2-3 days)             |  (2-3 hours)
                        |
TOTAL: 6-8 months      |  TOTAL: 2 months
```

This highlights the **speed improvement** narrative.

---

## Quick Placeholder

If you need to test the layout immediately:

```bash
convert -size 1200x800 -background white -gravity center \
  -pointsize 40 label:"AI Agent Development Workflow\n(Design → Code → Test → Docs)" \
  figure_1.png
```

---

## Priority: MEDIUM

This image enhances the project detail page but is not critical for homepage display.
