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
- **Design Tokens Precedence:** Importerade skärmars inline-tokens (`index.html` / Stitch JSON) är primära designtokens för den varianten. Uppdatera `DESIGN.md` vid behov så att färgkoder/typografi stämmer överens.
- **Asset Downloads:** Om Stitch MCP `download_assets` inte sparar filer lokalt, extrahera bild-URL:er direkt från HTML/JSON och ladda ner via `curl -L -o <sökväg> "<url>"`.
- **Governance:** GPACCG V8.0 är det aktiva projekt-governance-ramverket enligt `CLAUDE.md`.

[Exploration Mandate]
- Instruera Claude Code att söka och inspektera filsystemet innan editering.

[Verification & Definition of Done]
- Kör projektspecifika tester/byggsteg (`npm run build`).
- Manuell verifieringsguide (Vibe Check).
- Avsluta obligatoriskt med AI HANDOFF STATE-blocket.
```
