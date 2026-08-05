---
name: anti-loop-rollback
description: Enforces 2-try limit and automatic git rollback when tests or edits repeatedly fail in Claude Code.
---

# Anti-Loop & Rollback Protocol for Claude Code

## Regler för Claude Code
1. **Max Retries:** Avbryt och stoppa automatiskt efter 2 misslyckade försök med samma fel/test.
2. **Rollback Protocol:** Återställ alla ändringar (`git checkout .` / `git restore`) om tester eller byggsteg misslyckas upprepade gånger så att kodbasen förblir i ett fungerande tillstånd.
