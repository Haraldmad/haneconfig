# ⚙️ haneconfig (Modular Agent Skills, Rules & Governance)

Detta repository innehåller alla dina modulära **Skills, Regler, Designsystem och Styrningsramverk (GPACCG V8.0)** för både **Gemini (Antigravity IDE)** och **Claude Code**.

---

## 📁 Repository-struktur

```text
haneconfig/
├── skills/                        # Central källmapp för ALLA skills (Single Source of Truth)
│   ├── vibe-extractor/            # (vibe) Extraherar stämning & stödord från bilder
│   ├── web-architect/             # (stitch) Skapar DESIGN.md & Stitch start-prompter (stöder presets)
│   ├── slop-detective/            # (slop) Anti-slop audit (0-100%) & korrigeringsprompter
│   ├── import-stitch/             # (import-stitch) Auto-scaffoldar ett React/Vite-projekt från Stitch
│   ├── haneconfig-status/         # (haneconfig) Interaktiv instrumentpanel & hjälp
│   ├── claude-prompt-generator/   # GPACCG V8.0 Prompt Generator för Claude Code
│   ├── gpaccg-architect/          # Master Architect & Vibe Coding Governance
│   ├── anti-loop-rollback/        # 2-try limit & automatisk git rollback
│   ├── claude-handoff-enforcer/   # Tvingande AI HANDOFF STATE-rapportering
│   └── stitch-mcp/                # Stitch MCP Proxy & wizard
├── webarchitect/                  # Kunskapsbank (7 referensfiler för slop-fri webbdesign)
│   ├── ADJECTIVES.md              # 200+ stämningsord uppdelade i kategorier
│   ├── ANTI-SLOP.md               # Quality checklist mot generisk AI-design
│   ├── DESIGN-MD-TEMPLATES.md     # 8 startmallar för populära estetiker (Japandi, SaaS m.fl.)
│   ├── DESIGN-STYLES.md           # 30 namngivna stilar med HEX-paletter & kodsnuttar
│   ├── EXAMPLES.md                # 25 färdiga prompter tvärs över branscher
│   ├── PROMPT-FORMULAS.md         # 12 prompt-mallar för olika webbplatstyper
│   └── SYSTEM.md                  # Systeminstruktioner för promptgenerering
├── gemini/
│   └── AGENTS.md                  # Globala instruktioner & regler för Gemini
├── claude/
│   └── CLAUDE.md                  # Global mall för projektets CLAUDE.md
└── sync.ps1                        # Universellt synkskript (Push & Pull)
```

---

## 🔑 Kodord & Triggers

| Kodord / Trigger | Skill | Beskrivning |
| :--- | :--- | :--- |
| `vibe` | `vibe-extractor` | Extraherar stämning & 4–6 stödord från en bild. |
| `stitch` | `web-architect` | Genererar `DESIGN.md` och start-prompt för Stitch. Stöder `-preset <namn>`. |
| `slop` | `slop-detective` | Anti-slop audit (0–100 %), visar fällor och ger korrigeringsprompt. |
| `import-stitch` | `import-stitch` | Skapar ett komplett React + Vite-projekt i `~/projekt/<namn>/`. |
| `haneconfig` | `haneconfig-status` | Visar interaktiv instrumentpanel och hjälp. |

---

## 🎨 Designtema Presets (`stitch -preset <namn>`)
- `japandi` – Lugn, krämvit (#FAF9F5), valnöt, bambu.
- `saas-clean` – Skandinavisk modern SaaS, krispig zinc (#FAFAF9), pastell-accents.
- `neo-brutalism` – Hög kontrast, starka färger, 2px solida ramar, taktila skuggor.
- `dark-luxury` – Nattgrafit (#09090B), borstat guld/brons accenter, exklusiv serif.
- `minimal-editorial` – Tidningskänsla, ståtlig typografi (Fraunces), mycket whitespace.
- `warm-cozy` – Jordnära, terrakotta, varm sand (#FDFBF7).
- `retro-tech` – Monospace-accenter, arkitektur-linjer, 90-tals krisp.
- `bold-playful` – Färgstark, rundade bento-former, hög energi.

---

## 🚀 Synkroniseringsguide

### 1. Pusha ändringar till systemet (Standard)
Kör synkskriptet i PowerShell för att skicka alla skills från repot till Gemini och Claude:
```powershell
.\sync.ps1
```

### 2. Pull ändringar från systemet
Om du redigerat eller skapat nya skills direkt i `~/.gemini/config/skills`:
```powershell
.\sync.ps1 -Pull
```

### 3. Spara till Git
```bash
git add .
git commit -m "Uppdaterade haneconfig skills och struktur"
git push origin main
```
