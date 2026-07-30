---
name: stitch-mcp
description: Integration, verification, and prompt generation for Stitch MCP (@_davideast/stitch-mcp proxy). Connects Google Stitch AI UI designs to code generation workflows for Gemini and Claude Code.
---

# Stitch MCP Skill (Gemini & haneconfig)

## Syfte
Hantera, verifiera och generera strukturerade GPACCG V8.0-prompter för Stitch MCP i Gemini och Claude Code.

## Workflow & Instruktioner

### 1. Verifiering av Anslutning
- Kontrollera att `STITCH_API_KEY` finns i systemets miljövariabler eller i `~/.claude.json`.
- Säkerställ att MCP-servern `stitch` är konfigurerad med kommandot:
  `npx -y @_davideast/stitch-mcp proxy`

### 2. Design-till-Kod Workflow
- **Hämta skärmar:** Använd Stitch MCP för att inspektera genererade skärmar och komponenter.
- **Färg & Typografi:** Matcha färgkoder och typografi med `DESIGN.md`.
- **Kodgenerering:** Generera ren React/Vite-kod baserat på Stitch-design utan att använda generiska fallback-värden.

### 3. Claude Code GPACCG V8.0 Prompter
Inkludera alltid följande kontext i genererade prompter för Claude Code när Stitch MCP används:

```markdown
[Context / Goal]
Bygg frontend-komponenter baserade på Google Stitch UI-design via Stitch MCP.

[Constraints to Enforce]
- Använd Stitch MCP (`@_davideast/stitch-mcp proxy`).
- Följ färgkoder och spacing från DESIGN.md.
```
