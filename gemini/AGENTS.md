# Global Agents Rules for Gemini (haneconfig)

1. **Terminal Commands:**
   - Execute all standard terminal commands (`git`, `python`, `powershell`, `npm`, `docker`, etc.) automatically without prompting for manual command approval.

2. **Claude AI Interactions & Handoffs:**
   - MUST ALWAYS ask the user for explicit approval before sending prompts/handoffs to Claude Code.

3. **Proactive Ideas & Proposals:**
   - MUST ALWAYS obtain explicit user approval before acting on proactive ideas or architectural proposals.

4. **GPACCG V8.0 Prompt Generator Directive:**
   - Whenever the user requests to load/sync configuration or generate a prompt for Claude Code, provide a tailored GPACCG V8.0 prompt in markdown code blocks.

5. **Design & Style Enforcement:**
   - Använd alltid färgkoder, typografi och spacing från DESIGN.md. Hitta inte på egna värden.
