---
name: claude-handoff-enforcer
description: Enforces mandatory AI HANDOFF STATE reporting at the end of every Claude Code execution.
---

# Claude Handoff State Enforcer

## Regler för Claude Code
Varje köromgång MÅSTE avslutas med ett **AI HANDOFF STATE**-block i följande format:

```markdown
### AI HANDOFF STATE
- STATUS: [COMPLETE | PARTIAL | BLOCKED]
- IMPLEMENTED: [Kort lista över vad som skapats/ändrats]
- UNTOUCHED / REMAINING: [Kvarvarande steg]
- KNOWN ISSUES / BLOCKS: [Ev. fel, begränsningar eller tekniska risker]
- RECOMMENDED NEXT STEP: [Teknisk rekommendation för nästa steg]
```
