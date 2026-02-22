# ARX Product Images - Required Assets

This folder needs the following images for the ARX product page:

## Required Images

### 1. `representation.png` (CRITICAL - Homepage Carousel)
- **Size:** 400px wide (recommended)
- **Purpose:** Thumbnail for product carousel on homepage (first visible position)
- **Content:** ARX logo or hero screenshot showcasing the interface
- **Requirements:**
  - Eye-catching visual (AI-generated render or main UI screenshot)
  - Should convey "architectural rendering" at a glance
  - Clean, professional look
  - Consider showing split-screen: natural language input → beautiful render

**Suggestions:**
- ARX logo with architectural silhouette
- Screenshot of the main interface with sample render
- Before/after comparison of architectural render
- Hero image showing natural language prompt + resulting render

### 2. `figure_1.png` - System Architecture Diagram
- **Purpose:** Shows technical architecture in product detail page
- **Content:** Three-tier architecture diagram
  - Frontend Layer (Next.js + TypeScript)
  - Backend Layer (Python + FastAPI)
  - AI Integration Layer (OpenAI/Anthropic APIs)
- **Style:** Clean technical diagram with boxes and arrows
- **Tools:** Draw.io, Excalidraw, Figma, or Mermaid diagram

**Key Components to Show:**
```
User Interface (Next.js)
    ↓
FastAPI Backend
    ↓
├─→ Natural Language Parser (GPT-4/Claude)
├─→ Parameter Mapper
└─→ Rendering API Integration
    ↓
Rendered Output
```

### 3. `figure_2.png` - Natural Language Interface UI Screenshot
- **Purpose:** Showcase the main UX feature (natural language control)
- **Content:** Screenshot of the ARX interface showing:
  - Input box with natural language prompt (e.g., "make the building warmer tones")
  - Before/after render comparison
  - Parameter panel showing what changed
- **Requirements:**
  - High resolution (at least 1200px wide)
  - Clear, readable text
  - Shows the "magic moment" of natural language → rendered result

**UI Elements to Include:**
- Chat-style input interface
- Rendering preview area
- Parameter translation display (optional: show JSON or parameter list)
- Progress indicator or status message

### 4. `figure_3.png` - AI Agent Development Workflow Diagram
- **Purpose:** Visualize how AI agents were used in development process
- **Content:** Flowchart showing AI-assisted development workflow

**Workflow Steps to Show:**
```
Design Phase
  ├─→ Claude: Architecture discussion
  └─→ AI-generated system diagrams

Code Generation
  ├─→ Cursor: Component scaffolding
  ├─→ Claude Code: Complex logic
  └─→ GitHub Copilot: Inline suggestions

Testing & Validation
  ├─→ AI-generated tests
  └─→ Manual code review

Documentation
  └─→ AI-assisted docs & comments
```

**Style:** Process diagram with tool logos and workflow arrows

### 5. `figure_4.png` - Sample Architectural Renders (Optional but Recommended)
- **Purpose:** Showcase the quality of outputs ARX can produce
- **Content:** Grid of 2-4 architectural renders
  - Different styles (modern, industrial, residential)
  - Different times of day (sunrise, noon, sunset)
  - Different materials (concrete, glass, wood)
- **Requirements:**
  - High quality, photorealistic
  - Diverse architectural styles
  - Professional presentation

**Layout Options:**
- 2x2 grid with captions
- Side-by-side before/after comparisons
- Single hero render with detail callouts

---

## Image Specifications

**Format:** PNG (for transparency and quality)
**Color Mode:** RGB
**DPI:** 72 (web standard)

**Recommended Sizes:**
- `representation.png`: 400-600px wide
- Detail images (`figure_1-4.png`): 1200-1600px wide
- All images should be optimized for web (compressed but high quality)

---

## How to Create These Images

### Option 1: Design Tools
- **Figma/Sketch:** UI mockups and interface screenshots
- **Excalidraw/Draw.io:** Architecture diagrams and flowcharts
- **Canva:** Quick graphics and thumbnails

### Option 2: Screenshot + Edit
- Take screenshots of ARX interface (if working prototype exists)
- Edit in Photoshop/GIMP to add annotations
- Crop and resize to recommended dimensions

### Option 3: AI-Generated Mockups
- Use Midjourney/DALL-E for architectural render examples
- Use Claude/ChatGPT to generate Mermaid diagrams, then screenshot
- Use Figma templates + AI to speed up UI mockups

### Option 4: Placeholder Images
For quick testing, create simple placeholder images:
```bash
# Install ImageMagick
brew install imagemagick

# Create placeholders
convert -size 400x300 -background lightgray -gravity center \
  -pointsize 30 label:"ARX Logo\n(400x300)" \
  representation.png

convert -size 1200x800 -background white -gravity center \
  -pointsize 40 label:"System Architecture\n(1200x800)" \
  figure_1.png

# Repeat for figure_2, figure_3, figure_4
```

---

## Priority Order

1. **CRITICAL:** `representation.png` (homepage carousel won't display properly without this)
2. **HIGH:** `figure_1.png` (architecture diagram shows technical depth)
3. **MEDIUM:** `figure_2.png` (UI screenshot proves the concept)
4. **NICE TO HAVE:** `figure_3.png` (AI workflow) and `figure_4.png` (sample renders)

---

## Testing After Adding Images

After adding images, verify they display correctly:

1. **Homepage Carousel:**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   # Check that ARX appears FIRST in carousel with representation.png thumbnail
   ```

2. **Product Detail Page:**
   ```bash
   # Visit http://localhost:3000/products/product_7
   # Verify all figure images load in table layout
   # Check images are responsive on mobile
   ```

3. **Image Optimization:**
   ```bash
   # Optional: optimize images for web
   npm install -g imageoptim-cli
   imageoptim --imagealpha --quality 85 /Users/hwaniii/portfolio_/public/images/product/arx/*.png
   ```

---

## Example Content for Placeholder Testing

If you want to test the layout without final images, you can use these placeholder services:

```markdown
<!-- Temporary placeholders in product_7.md -->
<img src="https://via.placeholder.com/400x300?text=ARX+Logo" alt="ARX" />
<img src="https://via.placeholder.com/1200x800?text=System+Architecture" alt="Architecture" />
```

Replace with real images before deployment.

---

## ConTech Framing for Images

Remember: ARX should be positioned as **ConTech-adjacent** (architecture = construction industry).

**Visual cues to include:**
- Architectural building types (commercial, residential, industrial)
- Construction-relevant scenarios (client presentations, design approvals)
- Professional workflow context (tablets, collaboration, iteration)
- Industry-standard tools and processes

**Avoid:**
- Generic tech/SaaS imagery
- Consumer-focused design
- Gaming or entertainment aesthetics
- Overly artistic/experimental styles

Keep it professional, industry-focused, and ConTech-relevant.
