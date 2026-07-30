---
name: stitch-mcp
description: Interactive Google Stitch Project Import Wizard and MCP execution guidelines for Claude Code.
---

# Stitch MCP Skill & Mandatory Listing Directive for Claude Code

## MANDATORY DIRECTIVE
Whenever requested to list or show Stitch projects (e.g. "visa mina stitch projekt", "show my stitch projects"), ALWAYS immediately execute `list_projects` via Stitch MCP and present all projects with IDs, screen counts, and design system summaries.

## Interactive Wizard Chain

1. **List Projects (ALWAYS DIRECT):** Immediately execute `list_projects` and present a numbered list of available Stitch projects. Prompt user for selection.
2. **List Screens:** Call `list_screens` for the selected project. Ask user whether to import specific screen(s) or all screens.
3. **Target Path:** Ask user where components should be created (default: `src/components/`).
4. **Code Generation:** Call `get_screen_code` for selected screens, generate production React components complying with `DESIGN.md`, and report AI Handoff State.
