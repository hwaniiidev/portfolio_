# Project 18 Images - Natural Language to Rendering API Translation

## Required Image

### `figure_1.png` - NLP Translation Pipeline Architecture

**Purpose:** Visualize how natural language input is converted to rendering API parameters

**Content:** System architecture diagram showing the translation flow

```
┌──────────────────────────────────────────────────────────┐
│  USER INPUT                                              │
│  "Make the building warmer tones"                        │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│  INTENT PARSER (GPT-4 / Claude)                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Extract: intent_type, target, property, intensity │  │
│  │ Output: JSON structured intent                    │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│  CONTEXT MANAGER                                         │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Current render state: color_temp = 3000K          │  │
│  │ Conversation history: [previous requests]         │  │
│  │ User preferences: warm bias                       │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│  PARAMETER MAPPER                                        │
│  ┌────────────────────────────────────────────────────┐  │
│  │ "Warmer" + context → +1500K shift                 │  │
│  │ New parameters:                                    │  │
│  │   color_temperature: 4500K                        │  │
│  │   saturation: 1.2                                 │  │
│  │   ambient_warmth: 0.6                             │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│  VALIDATION                                              │
│  ✓ Range check: 4500K within [1000K - 6500K]            │
│  ✓ No parameter conflicts                               │
│  ✓ Safe for rendering API                               │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│  RENDERING API CALL                                      │
│  POST /api/render { color_temperature: 4500K, ... }     │
└──────────────────────────────────────────────────────────┘
```

**Key Elements:**
1. **Five components:** Input → Intent Parser → Context → Mapper → Validation → API
2. **Data flow arrows** between components
3. **Example data** shown at each stage (makes it concrete)
4. **LLM integration** highlighted (GPT-4/Claude logo in Intent Parser box)
5. **JSON examples** for structured data

**Visual Style:**
- Clean, technical diagram
- Use boxes and arrows
- Color coding for different layer types:
  - Blue: User input/output
  - Orange: AI/LLM processing
  - Green: Data management
  - Purple: Validation/safety
- Monospace font for code/JSON snippets

**Tools to Create:**
- Figma (best for clean professional look)
- Excalidraw (quick, simple diagrams)
- Mermaid diagram (code-based, then screenshot)
- Draw.io / Lucidchart

**Size:** 1200-1600px wide, 1000-1400px tall (vertical flow)

---

## Alternative: Side-by-Side Comparison

Show the "before/after" of the translation:

```
┌─────────────────────┐         ┌─────────────────────┐
│   USER INPUT        │         │   API PARAMETERS    │
├─────────────────────┤         ├─────────────────────┤
│                     │         │                     │
│ "Make it warmer"    │  ────>  │ color_temp: 4500K   │
│                     │         │ saturation: 1.2     │
│                     │         │ ambient: 0.6        │
├─────────────────────┤         ├─────────────────────┤
│ "Add sunset         │  ────>  │ sun_elevation: 5°   │
│  lighting"          │         │ color_temp: 2800K   │
│                     │         │ shadow: 0.8         │
├─────────────────────┤         ├─────────────────────┤
│ "More dramatic"     │  ────>  │ contrast: 1.6       │
│                     │         │ HDR: 1.4            │
│                     │         │ saturation: 1.3     │
└─────────────────────┘         └─────────────────────┘

         Natural Language  →  Precise Technical Parameters
```

This emphasizes the **translation capability** (key feature).

---

## Optional: UI Screenshot Version

If you have a working prototype, screenshot the interface showing:

**Left Panel:** Natural language chat interface
- User: "Make the building warmer tones"
- System: "Applied color temperature +1500K, saturation +20%"

**Right Panel:** Parameter display
- Color Temperature: 3000K → 4500K
- Saturation: 1.0 → 1.2
- Ambient Warmth: 0.3 → 0.6

**Center:** Before/After render comparison

---

## Quick Placeholder

For testing layout:

```bash
convert -size 1200x1000 -background white -gravity center \
  -pointsize 30 label:"Natural Language to API Translation\nIntent Parser → Context → Mapper → Validation" \
  figure_1.png
```

---

## Priority: MEDIUM-HIGH

This image is important for showcasing the core technical contribution of the project.
If you only create one image for this project, make it this one.
