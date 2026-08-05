---
name: haneconfig-status
description: haneconfig System Status & Interactive Dashboard (Triggers: haneconfig, haneconfig-status, status, help-haneconfig). Displays an interactive dashboard of all active skills, triggers, Stitch MCP status, and system configuration.
---

# haneconfig System Dashboard & Help

## Trigger Keywords
Triggas när användaren skriver: `haneconfig`, `haneconfig-status`, `status`, `help-haneconfig`.

---

## Instrumentpanel för haneconfig

När användaren anropar denna skill, skriv ut följande snygga, strukturerade instrumentpanel:

```markdown
# ⚙️ haneconfig – System Instrumentpanel

### 🟢 Aktiva Skills & Kodord

| Kodord / Trigger | Skill Name | Beskrivning |
| :--- | :--- | :--- |
| `vibe` | `vibe-extractor` | Extraherar stämning & 4-6 stödord från bilder |
| `stitch` | `web-architect` | Genererar anti-slop DESIGN.md & Stitch start-prompter |
| `slop` | `slop-detective` | Anti-slop audit (0-100%), identifierar fällor & ger korrigeringsprompt |
| `import-stitch` | `import-stitch` | Auto-scaffoldar ett komplett React/Vite-projekt från Stitch-kod |
| `haneconfig` | `haneconfig-status` | Visar denna instrumentpanel och hjälp |

---

### 🎨 Designtema Presets (`stitch -preset <namn>`)
Du kan snabbt kalla på `stitch` med en färdig aesthetic:
- `japandi` (Lugn, varm trä, krämvit, minimalistisk)
- `saas-clean` (Skandinavisk modern SaaS, krispig vit, zink, accent)
- `neo-brutalism` (Höga kontraster, tjocka linjer, starka accentfärger)
- `dark-luxury` (Grafit, guld/brons accenter, djup elegans)
- `minimal-editorial` (Tidningskänsla, ståtlig typografi, mycket whitespace)
- `warm-cozy` (Jordnära, terrakotta, valnöt, mjuk värme)
- `retro-tech` (Monospace, krispiga linjer, 90-tals arkitektur-känsla)
- `bold-playful` (Färgstark, rundade former, hög energi)

---

### 🔧 System & Sökvägar
- **Gemini Config:** `C:\Users\Harald\.gemini\config\skills`
- **Claude Config:** `C:\Users\Harald\.claude\skills`
- **haneconfig Repo:** `C:\Users\Harald\Projekt\haneconfig`
- **Stitch MCP:** Nativt integrerad via `~/.claude.json` (gcloud ADC)

---

### 🔄 Synkroniseringskommando
Kör `powershell -File C:\Users\Harald\Projekt\haneconfig\sync.ps1` i terminalen för att synka nya ändringar.
Använd `-Pull` flaggan (`sync.ps1 -Pull`) för att dra hem ändringar från systemmapparna till repot.
```
