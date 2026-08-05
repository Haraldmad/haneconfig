# Novo Studio – Hemsida (Stitch Import Root)

Denna mapp innehåller källkoden för Novo Studios hemsida, genererad och importerad från Google Stitch.

## Hur du importerar från Stitch hit:

1. **Kopiera koden från Google Stitch** (HTML/React + Tailwind).
2. **Kör följande kommando i AI-chatten:**
   ```text
   import-stitch i novostudio/hemsida
   ```
3. Agenten kommer då automatiskt att:
   - Skapa en modulär React + Vite + Tailwind-applikation i denna mapp.
   - Ladda ner alla bild-assets till `public/assets/`.
   - Provisionsera `CLAUDE.md` och `DESIGN.md`.
   - Skapa en baseline git-commit.
