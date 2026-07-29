---
name: claude-prompt-generator
description: GPACCG V8.0 Prompt Generator for Claude Code. Formats high-context, atomized execution prompts for Claude Code in clean markdown code blocks.
---

# GPACCG Prompt Generator for Claude Code

## Syfte
Skapa strukturerade, högkontextuella exekveringsprompter för Claude Code formaterade helt enligt GPACCG V8.0 governance-regler.

## Mall för Claude Code Prompter

```markdown
[Context / Goal]
Beskriv vad som ska åstadkommas från ett produkt- och användarperspektiv.

[Change Classification]
- TYPE: [NEW | MODIFY | REPLACE | REMOVE | ARCHITECTURAL]
- Instruktioner om vad som ska bevaras vs ändras.

[Task Specifications]
- Explicita funktionella krav och komponenter.

[Constraints to Enforce]
- Preserverade arbetsflöden, stilregler (DESIGN.md) och beroenden.

[Exploration Mandate]
- Instruera Claude Code att söka och inspektera filsystemet innan editering.

[Verification & Definition of Done]
- Kör projektspecifika tester/byggsteg (`npm run build`).
- Manuell verifieringsguide (Vibe Check).
- Avsluta obligatoriskt med AI HANDOFF STATE-blocket.
```
