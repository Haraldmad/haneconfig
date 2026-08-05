# Stitch MCP & Claude Code Execution Prompt – Novo Studio

Detta dokument innehåller den officiella GPACCG V8.0-prompten för att generera eller importera UI-komponenter och skärmar för **Novo Studio** via Google Stitch MCP och Claude Code.

---

```markdown
[Context / Goal]
Bygg landningssidan för **Novo Studio** (novostudio.se) – en modern skandinavisk tech- och designstudio som erbjuder Web-as-a-Service (WaaS) åt småföretagare för 500 kr/månad. Hemsidan skall övertyga företagare att be om ett gratis designförslag/prototyp.

[Change Classification]
- TYPE: NEW
- Skapa en produktionstestad, krispig och responsiv landningssida i Vite + React + Tailwind CSS / Vanilla CSS utifrån designreglerna i DESIGN.md.

[Task Specifications]
1. **Hero Section:**
   - Huvudrubrik: "Din nya hemsida – gratis prototyp innan du bestämmer dig."
   - Underrubrik: "Blixtsnabb laddtid, inkluderat SSL-certifikat, teknisk SEO och fria ändringar för 500 kr/månad."
   - Signaturkomponent: Live mätarkort för 100/100 Google Speed Index, SSL A+ HTTPS-skydd och < 0.2s laddtid.
   - CTA-knapp: "Be om ett gratis förslag" med Electric Blue glow.

2. **Fördelar & Jämförelse (När kunden redan har en hemsida):**
   - Visa 6 tydliga kort: Blixtsnabb prestanda, Gratis SSL, Teknisk SEO för lokala sökningar, 100% Managed Service (Noll admin), Inga engångsavgifter på 30 000 kr, 3 månaders risktrygg provtid.

3. **Prissektion:**
   - 3 Månaders Provtid: 1 000 kr/mån (exkl. moms).
   - Ordinarie Abonnemang: 500 kr/mån (exkl. moms).
   - Tydliga bockar för alla inkluderade funktioner.

4. **Prototyp-Formulär:**
   - Enkelt 3-fältsformulär: Företagsnamn, Stad/Bransch, E-post/Telefon.

[Constraints to Enforce]
- **Design Tokens Precedence:** Följ alla Tokens och regler i `DESIGN.md` (#0B0F17 mörk bakgrund, #3B82F6 Electric Blue accent, #10B981 Emerald Green SSL/Speed badge, Plus Jakarta Sans & Inter typsnitt).
- **Stitch MCP Integration:** Stitch MCP (@_davideast/stitch-mcp proxy) skall användas för att importera/synka skärmar och ladda ner bild-assets.
- **Governance:** GPACCG V8.0 governance gäller enligt `CLAUDE.md`.

[Exploration Mandate]
- Inspektera projektroten (`~/projekt/haneconfig/novostudio/`) och läs `DESIGN.md`, `affarskoncept.md` och `CLAUDE.md` innan editeringssteg påbörjas.

[Verification & Definition of Done]
- Kör `npm run build` eller `vite build` för att verifiera att koden bygger felfritt.
- Manuell verifiering (Vibe Check) på mobil och desktop.
- Avsluta obligatoriskt med AI HANDOFF STATE-blocket.
```
