---
name: stitch-mcp
description: Interactive Google Stitch Project Import Wizard and MCP workflow. Auto-triggers interactive project & screen selection chain.
---

# Stitch MCP Skill & Interactive Import Wizard (haneconfig)

## 📌 OBLIGATORISKT DIREKTIV
När användaren ber om att se eller lista sina Stitch-projekt (t.ex. *"visa mina stitch projekt"*, *"lista mina stitch projekt"*, *"stitch projekt"*), SKALL agenten ALLTID omedelbart anropa `list_projects` och presentera alla tillgängliga projekt med Projektnamn, ID, senast uppdaterad och antal skärmar.

---

## ⚡ Interaktiv Import-Kedja (Auto-Trigger)

När användaren ber om att lista eller hämta från Stitch:

### Steg 1: Lista & Välj Projekt (ALLTID DIREKT)
1. Kör OMEDELBART Stitch MCP-verktyget `list_projects`.
2. Presentera alla tillgängliga Stitch-projekt i en snygg numrerad lista med Projektnamn, ID och design-system-summering.
3. Ställ därefter frågan till användaren:
   > *"Vilket Stitch-projekt vill du arbeta med? (Ange nummer eller namn)"*
4. Vänta på användarens svar.

### Steg 2: Lista & Välj Skärmar
1. Anrop `list_screens` för det valda projektet.
2. Presentera alla skärmar i projektet i en numrerad lista.
3. Ställ frågan till användaren:
   > *"Vilka skärmar vill du importera koden för?"*
   > - **1.** En specifik skärm (ange nummer/namn)
   > - **2.** Alla skärmar i projektet
4. Vänta på användarens svar.

### Steg 3: Välj Målmapp & Komponentstruktur
1. Ställ frågan till användaren:
   > *"Var vill du att komponenterna ska skapas i projektet?"* (t.ex. `src/components/` eller `src/pages/` - standard: `src/components/`)
2. Vänta på användarens svar.

### Steg 4: Kodgenerering & Efterlevnad av DESIGN.md
1. Anrop `get_screen_code` för valda skärmar.
2. Skapa snygga React/Vite-komponenter i den valda mappen.
3. Säkerställ att färgkoder, typografi och spacing följer `DESIGN.md`.
4. Rapportera skapade filer och erbjud att förhandsgranska (`serve_screen`) eller köra dev-servern.

---

## Technical Guardrails
- Använd alltid Stitch MCP proxy (`@_davideast/stitch-mcp proxy`).
- Säkerställ att `STITCH_API_KEY` används från miljön.
