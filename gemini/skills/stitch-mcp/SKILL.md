---
name: stitch-mcp
description: Interactive Google Stitch Project Import Wizard and MCP workflow. Auto-triggers interactive project, draft & screen selection chain.
---

# Stitch MCP Skill & Mandatory Complete Listing (haneconfig)

## 📌 OBLIGATORISKT DIREKTIV FOR DRAFTS & PROJEKT
När användaren ber om att se eller lista sina Stitch-projekt (t.ex. *"visa mina stitch projekt"*, *"lista alla projekt inklusive utkast"*, *"stitch projekt"*), SKALL agenten ALLTID:
1. Omedelbart köra anropet för `list_projects`.
2. Presentera alla huvudprojekt OCH alla underliggande **skärmar, utkast (drafts), varianter och canvas-instanser** i en komplett, tydligt strukturerad numrerad lista.

---

## ⚡ Interaktiv Import-Kedja (Auto-Trigger)

När användaren ber om att lista eller hämta från Stitch:

### Steg 1: Lista Projekt, Skärmar & Utkast (ALLTID KOMPLETT)
1. Kör OMEDELBART `list_projects`.
2. Presentera projektets titel och uppdateringstid.
3. Radera inte eller dölj inte några skärmar – lista ALLA enskilda **utkast/skärmar** (t.ex. Desktop Layouts, Mobile UI, Diff Viewers, Canvas Iterations) med siffernumrering (1, 2, 3...).
4. Ställ frågan till användaren:
   > *"Vilken skärm eller vilket utkast vill du importera koden för? (Ange nummer, eller svara 'alla')"*
5. Vänta på användarens svar.

### Steg 2: Välj Målmapp & Komponentstruktur
1. Ställ frågan till användaren:
   > *"Var vill du att komponenterna ska skapas i projektet?"* (t.ex. `src/components/` eller `src/pages/` - standard: `src/components/`)
2. Vänta på användarens svar.

### Steg 3: Kodgenerering & Efterlevnad av DESIGN.md
1. Anropa `get_screen_code` för valda skärmar/utkast.
2. Skapa produktionstestade React/Vite-komponenter i den valda mappen.
3. Säkerställ att färgkoder, typografi och spacing följer `DESIGN.md`.
4. Rapportera skapade filer och erbjud förhandsgranskning (`serve_screen`).

---

## Technical Guardrails
- Använd alltid Stitch MCP proxy (`@_davideast/stitch-mcp proxy`).
- Säkerställ att `STITCH_USE_SYSTEM_GCLOUD=1` och `STITCH_API_KEY` används.
