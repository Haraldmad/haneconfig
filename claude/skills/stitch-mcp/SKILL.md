---
name: stitch-mcp
description: Execute Stitch MCP workflows in Claude Code. Connects Google Stitch AI UI designs to production code.
---

# Stitch MCP Skill for Claude Code

## Purpose
Directly execute design-to-code workflows using the Stitch MCP proxy (`@_davideast/stitch-mcp proxy`).

## Execution Guidelines

### 1. Tool Usage
- Use available Stitch MCP tools (`list_projects`, `get_screen_code`, `serve_screen`) to inspect UI layouts, components, and design specs directly from Google Stitch.

### 2. Design System Compliance
- Map extracted component designs to project design systems and `DESIGN.md`.
- Preserve exact color tokens, typography, and layout spacing.

### 3. Execution Guardrails
- Ensure `STITCH_API_KEY` is available in environment variables or `~/.claude.json`.
- Report status using the mandatory AI Handoff State block.
