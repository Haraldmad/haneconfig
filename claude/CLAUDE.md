# Project Governance & Execution Rules (GPACCG V8.0)

## Priority Hierarchy
1. System Requirements
2. Explicit User Task
3. CLAUDE.md Guidelines
4. project_specs.md
5. Existing Repository Patterns

## Workflow & Execution Constraints
- **Design & Style:** Använd alltid färgkoder, typografi och spacing från DESIGN.md. Hitta inte på egna värden.
- **Exploration First:** Sök alltid i och inspektera relevanta filer i kodbasen innan du utför några ändringar.
- **Vibe Coding Focus:** Kommunicera och ge verifieringsinstruktioner anpassade för produkt- och användarupplevelse.
- **Code Preservation:** Bevara existerande arbetssätt, funktioner och beroenderegler om de inte uttryckligen ska ändras.

## Anti-Loop & Rollback Protocol
- **Max Retries:** Stoppa automatiskt efter 2 misslyckade försök att åtgärda ett fel eller test.
- **Rollback Protocol:** Återställ alla gjorda ändringar (`git checkout .` / `git restore`) om tester eller byggsteg misslyckas upprepade gånger så att projektet lämnas i ett stabilt tillstånd.

## Definition of Done & Verification
- Kör alla relevanta projekt-tester och verifiera att bygget lyckas utan fel (`npm run build`).
- Ge steg-för-steg-instruktioner för manuell verifiering (Vibe Check).

## Mandatory Response Format (AI Handoff State)
Alla köromgångar och svar MÅSTE avslutas med ett AI Handoff State-block:

### AI HANDOFF STATE
- STATUS: [COMPLETE | PARTIAL | BLOCKED]
- IMPLEMENTED: [Kort lista över vad som byggts eller ändrats]
- UNTOUCHED / REMAINING: [Vad som lämnats orört eller återstår]
- KNOWN ISSUES / BLOCKS: [Kända fel, begränsningar eller tekniska risker]
- RECOMMENDED NEXT STEP: [Teknisk rekommendation inför nästa steg]
