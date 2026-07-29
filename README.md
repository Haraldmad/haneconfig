# ⚙️ haneconfig (Modular Agent Skills & Rules)

Detta repository innehåller alla dina modulära **Skills, Regler och Styrningsramverk (GPACCG V8.0)** för både **Gemini (Antigravity IDE)** och **Claude Code**.

---

## 📁 Repository-struktur

```text
haneconfig/
├── gemini/
│   ├── AGENTS.md                  # Globala instruktioner & regler för Gemini
│   └── skills/
│       ├── gpaccg-architect/      # Master Architect & Vibe Coding Governance
│       └── claude-prompt-gen/     # GPACCG V8.0 Prompt Generator för Claude Code
└── claude/
    ├── CLAUDE.md                  # Global mall för projektets CLAUDE.md
    └── skills/
        ├── handoff-enforcer/      # Tvingande AI HANDOFF STATE-rapportering
        └── anti-loop-rollback/    # 2-try limit & automatisk git rollback
```

---

## 🚀 Snabbguide för synkronisering

### 1. Spara nya skills eller ändringar (Push)
När du skapat eller uppdaterat en skill i `haneconfig`:
```bash
git add .
git commit -m "Uppdaterade haneconfig skills"
git push origin main
```

### 2. Hämta på en ny dator (Pull)
Klona repot eller kör `git pull` i `haneconfig`:
```bash
git pull origin main
```
Kopiera sedan vid behov mappen `gemini/skills/` till `~/.gemini/config/skills/` och `claude/skills/` till `~/.claude/skills/`.
