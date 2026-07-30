---
name: stitch-mcp
description: Interactive Google Stitch Project Import Wizard and MCP execution guidelines for Claude Code.
---

# Stitch MCP Skill & Interactive Wizard for Claude Code

## Purpose
Provide a step-by-step interactive project & screen selection chain when retrieving Google Stitch UI designs into code.

## Interactive Wizard Chain

When triggered with:
- "Show my Stitch projects" / "Visa mina Stitch-projekt"
- "Import from Stitch" / "Importera från Stitch"
- "Stitch wizard"

Follow this exact sequential chain:

1. **List Projects:** Call `list_projects` and present a numbered list of available Stitch projects. Prompt user for selection.
2. **List Screens:** Call `list_screens` for the selected project. Ask user whether to import specific screen(s) or all screens.
3. **Target Path:** Ask user where components should be created (default: `src/components/`).
4. **Code Generation:** Call `get_screen_code` for selected screens, generate production React components complying with `DESIGN.md`, and report AI Handoff State.
