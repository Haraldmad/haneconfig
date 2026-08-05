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

### Steg 2: Välj Målmapp & Projektstruktur (Dynamisk Hemkatalog)
1. Hårda ALDRIG användarnamnet i sökvägar. Använd dynamisk hemkatalog (`$env:USERPROFILE\projekt\` på Windows eller `~/projekt/`).
2. Skapa automatiskt ett dedikerat projekt i användarens projektmapp (t.ex. `<hemkatalog>/projekt/<projekt-namn>/`).
3. Fråga användaren om komponentstruktur (t.ex. `src/components/` eller `src/pages/` - standard: `src/components/`).

### Steg 3: Kodgenerering & Efterlevnad av DESIGN.md
1. Anropa `get_screen_code` för valda skärmar/utkast.
2. Ladda ned alla hosted bild-URL:er/assets till `public/` eller `assets/`. Om Stitch `download_assets` misslyckas eller körs i sandlåda, använd `curl -L -o <sökväg> "<url>"` för att hämta bilderna från HTML/JSON-responsen.
3. Importerade skärmars inline-tokens (t.ex. `index.html` Tailwind config) är källan till sanning för den skärmen. Uppdatera `DESIGN.md` så att den överensstämmer med skärmens designtokens.
4. Skapa produktionstestade React/Vite-komponenter i mappen under `<hemkatalog>/projekt/<projekt-namn>/`.
5. Skapa `CLAUDE.md` i projektroten om den saknas.

### Steg 4: Automatisk Workspace-tillägg (Add Folder to Workspace)
1. När kodimporten är slutförd SKALL agenten ALLTID automatiskt rekommendera och registrera den nyskapade projektmappen (`<hemkatalog>/projekt/<projekt-namn>/`) som aktiv Workspace ("Add Folder to Workspace").
2. Ge bekräftelse och länk till användaren att mappen satts/rekommenderats som aktiv workspace för Antigravity IDE och Claude Code.



---

## Technical Guardrails
- Använd alltid Stitch MCP proxy (`@_davideast/stitch-mcp proxy`).
- Säkerställ att `STITCH_USE_SYSTEM_GCLOUD=1` och `STITCH_API_KEY` används.
