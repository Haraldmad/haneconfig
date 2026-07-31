---
name: stitch-mcp
description: Interactive Google Stitch Project Import Wizard including all drafts and screen instances.
---

# Stitch MCP Skill & Complete Draft Listing for Claude Code

## MANDATORY DIRECTIVE FOR DRAFTS & PROJECTS
Whenever requested to list or show Stitch projects (e.g. "visa mina stitch projekt", "show my stitch projects"), ALWAYS immediately execute `list_projects` via Stitch MCP and present all projects AND all underlying screen instances, drafts, and UI variants in a complete, numbered list.

## Interactive Wizard Chain

1. **List Projects & Drafts (ALWAYS COMPLETE):** Immediately execute `list_projects` and present all project titles, design systems, and ALL individual screen instances/drafts (1, 2, 3...). Prompt user for selection.
2. **Target Project Path (Dynamic User Profile):** NEVER hardcode username. Use dynamic home path (`$env:USERPROFILE\projekt\<project-name>` or `~/projekt/<project-name>`). Automatically create project folder under `<user-home>/projekt/<project-name>/`.
3. **Code Generation & Asset Download:** Call `get_screen_code` for selected screens/drafts. If Stitch `download_assets` does not write files locally, extract `downloadUrl` and image URLs directly from the HTML/JSON response and fetch them using `curl -L -o <path> "<url>"`.
4. **Design Tokens Precedence:** Importerade skärmars inline design-tokens (t.ex. `index.html` inline Tailwind config) utgör källan till sanning för den skärmen. Synka/uppdatera `DESIGN.md` därefter.
5. **Add Folder to Workspace:** ALWAYS add or prompt the user to set the new project directory (`<user-home>/projekt/<project-name>/`) as the active workspace in Antigravity IDE and Claude Code immediately after import.


