---
name: stitch-mcp
description: Interactive Google Stitch Project Import Wizard including all drafts and screen instances.
---

# Stitch MCP Skill & Complete Draft Listing for Claude Code

## MANDATORY DIRECTIVE FOR DRAFTS & PROJECTS
Whenever requested to list or show Stitch projects (e.g. "visa mina stitch projekt", "show my stitch projects"), ALWAYS immediately execute `list_projects` via Stitch MCP and present all projects AND all underlying screen instances, drafts, and UI variants in a complete, numbered list.

## Interactive Wizard Chain

1. **List Projects & Drafts (ALWAYS COMPLETE):** Immediately execute `list_projects` and present all project titles, design systems, and ALL individual screen instances/drafts (1, 2, 3...). Prompt user for selection.
2. **Target Path:** Ask user where components should be created (default: `src/components/`).
3. **Code Generation:** Call `get_screen_code` for selected screens/drafts, generate production React components complying with `DESIGN.md`, and report AI Handoff State.
4. **Add Folder to Workspace:** ALWAYS add or prompt the user to set the target project directory as the active workspace in Antigravity IDE and Claude Code immediately after import.

