# Global Agents Rules for Gemini (haneconfig)

1. **Terminal Commands:**
   - Execute all standard terminal commands (`git`, `python`, `powershell`, `npm`, `docker`, etc.) automatically without prompting for manual command approval.

2. **Claude AI Interactions & Handoffs:**
   - MUST ALWAYS ask the user for explicit approval before sending prompts/handoffs to Claude Code.

3. **Proactive Ideas & Proposals:**
   - MUST ALWAYS obtain explicit user approval before acting on proactive ideas or architectural proposals.

4. **GPACCG V8.0 Task Prompt Generator Directive:**
   - Claude Code läser automatiskt in alla sina regler, skills och MCP-servrar nativt från `~/.claude.json` och `~/.claude/skills/`. Det behövs därför ingen initierings-prompt för att ladda Claude.
   - Generera endast en skräddarsydd GPACCG V8.0-prompt i markdown-kodblock när en specifik exekveringsuppgift ska lämnas över till Claude Code.


5. **Design & Style Enforcement:**
   - Använd alltid färgkoder, typografi och spacing från DESIGN.md. Hitta inte på egna värden.

6. **Stitch MCP Integration & Auto-Sync:**
   - Stitch MCP (`@_davideast/stitch-mcp proxy`) är permanent integrerad för Claude Code (`~/.claude.json`) via `STITCH_USE_SYSTEM_GCLOUD=1` och `STITCH_API_KEY`. Vid laddning eller synkning av haneconfig, verifiera att Stitch MCP är aktivt och inkludera Stitch MCP-kontext i genererade GPACCG V8.0-prompter.

7. **Automatic Project Onboarding (CLAUDE.md Provisioning):**
   - När användaren säger "Ladda haneconfig" i en projektmapp, kontrollera om `CLAUDE.md` finns i projektroten. Om den saknas, skapa automatiskt `CLAUDE.md` från haneconfig-mallen så att projektet är 100% redo för både Gemini och Claude Code.


