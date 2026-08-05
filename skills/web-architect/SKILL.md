---
name: web-architect
description: Stitch Web Architect & Industry Archetype Engine (Triggers: stitch, webarchitect, stitch-architect, design-md). Generates anti-slop design systems (DESIGN.md) and precise start prompts for Google Stitch using keywords, screenshot analysis, or industry presets (-preset hantverkare, -preset frisör, -preset restaurang, -preset saas-clean, -preset dark-luxury, -preset minimal-editorial, -preset japandi).
---

# Stitch Web Architect (Industry Archetype & Anti-Slop Engine)

## Trigger Keywords
Triggas när användaren skriver: `stitch`, `webarchitect`, `stitch-architect`, `design-md` eller ber om att bygga ett designsystem/Stitch-prompt för ett nytt webbprojekt.

---

## 💡 KRITISK EXECUTION-PRINCIP: Zero-Context Fresh Start
Alla `web-architect`-prompter ska ALLTID skrivas under förutsättningen att **Stitch startar i ett HET NYTT TOMT PROJEKT utan tidigare kontext**.
Prompten måste därför vara **100% självförsörjande (Self-Contained)**: 
* Inkludera hela `DESIGN.md`-systemet, alla färgkoder, alla typsnitt, förbudslistan, layout-ritningen och alla sektioner i samma samlade kodblock.
* **UNDANTAG:** Endast när användaren kör `slop-detective` för att justera en skärm i ett redan pågående Stitch-projekt genereras riktade del-instruktioner (*Segmented Iteration Prompts*).

---

## ⚡ 3 Sätt att Starta (Instant Execution)

### Sätt 1: Med Stödord / Beskrivning
Om användaren skickar stödord (t.ex. `stitch "Svenssons Bygg - mörk, industriell, orange accent, trygg"`):
* Identifiera branschen, matcha med rätt **Branschar ketyp** nedan och välj färg/typografi från `DESIGN-STYLES.md`.
* Generera omedelbart den kompletta, självförsörjande `DESIGN.md` + Stitch-prompten!

### Sätt 2: Med Bild / Skärmdump på Befintlig Hemsida
Om användaren laddar upp en skärmdump och skriver `stitch`:
* Kör automatiskt `vibe-extractor`-analys. Bevara kundens firmanamn, logotyp, kontaktuppgifter och tjänster.
* Transformerar den gamla sajtens fula/tröga layout till ett unikt, slop-fritt mästerverk anpassat för branschen.

### Sätt 3: Med Preset / Branschar ketyp
Om användaren anger en preset (t.ex. `stitch -preset hantverkare`, `stitch -preset frisör`, `stitch -preset restaurang`, `stitch -preset studio` eller `stitch -preset saas-clean`):
* Hoppa direkt över frågor och generera omedelbart den kompletta `DESIGN.md` + Stitch-prompten baserad på den valda branschar ketypen!

---

## 🏢 Branschar ketyper (Industry Archetypes)

Varje bransch har unika konverteringsbehov. `web-architect` anpassar sektioner och funktioner till 100% utifrån bransch:

### 🛠️ 1. Hantverkare & Bygg (Snickare, Elektriker, VVS, Måleri)
* **Nyckelelement:** Klickbar *"Ring direkt"*-knapp på mobilen, *Före/Efter-galleri*, Certifieringsmärken (ID06, Säker Vatten, Boverket), *Trygghetsgaranti*, *Snabb Offertförfrågan*.
* **Vibe:** Rå, industriell, trygg, hög kontrast (grafit, varm orange/gul accent, krispig typografi).

### ✂️ 2. Frisör, Skönhet & Spa
* **Nyckelelement:** Visuellt bildmagasin, *Typografisk prislista i 2 kolumner*, *BokaDirekt / Online-bokningsknapp*, *Kundrecensioner (Star Ratings)*, *Instagram-feed*.
* **Vibe:** Japandi / Warm Atelier / Clinical Boutique (krämvit, varm valnöt, lugn dämpad terrakotta eller salvia).

### 🍽️ 3. Restaurang, Café & Nattklubb
* **Nyckelelement:** *Dagens Lunch-widget*, *Digital meny med allergimärkning*, *Bordsbokning*, *Karta, Adress & Öppettider*, *Stämningsfulla matbilder*.
* **Vibe:** Mörk stämningsfull eller krispig editorial (djup natt, varm bärnsten/koppar, Fraunces/Playfair typografi).

### 💼 4. Konsult, Redovisning & B2B Tjänster
* **Nyckelelement:** Asymmetrisk Bento Grid, *ROI/Effekt-mätare*, *Kundlogotyper (Social proof)*, *Case-studies*, *Boka 15-min rådgivning (Calendly)*.
* **Vibe:** Skandinavisk modern SaaS (krispig zinc, deep charcoal, elektrisk blå/emerald accent).

### 🎨 5. WaaS Agency & Design Studio (Novo Studio)
* **Nyckelelement:** 50/50 Split-Screen comparison (Legacy vs Novo Studio), *Live Audit Showcase Card* (Google Speed 100/100, SSL A+ HTTPS, <0.3s laddtid), *100% Managed Service jämförelse*, *Transparent 3m provtid ➔ 500 kr/mån pris*.
* **Vibe:** Skandinavisk arkitektonisk minimalism (krispig paper-zinc, ink black, elektrisk bärnsten/terracotta accent).

---

## 📐 5 Layout-Arketyper (Garanterar Oändlig Variation)
Motorn väljer en av 5 unika layoutstrukturer för att förhindra att sajter ser likadana ut:
1. **Split Hero / Dual Canvas:** 50/50 vertikal jämförelse eller text 40% vänster / gigantisk showcase 60% höger.
2. **Broadsheet Editorial:** Ståtlig kursiv typografi, 2-kolumners tidningslayout, 1px vertikala hårlinjer, 0px skarpa hörn.
3. **Asymmetric Bento Grid:** Asymmetriska kort i olika storlekar, ett mörkt kontraskort, siffer- badges och taktila skuggor.
4. **Full-Bleed Visual:** Breda bildsektioner med flytande informationstext och krispiga linjer.
5. **Interactive Calculator / Live Configurator:** Interaktiv offert- eller snabbtestare i herosektionen.

---

## 🚫 STRIKT ANTI-SLOP REGLER (Obligatoriska)
1. **FÖRBUD mot blå standardknappar (#2563EB):** Använd djupsvart (#121316), elektrisk bärnsten (#D97706) eller terracotta (#F97316) med taktila skuggor.
2. **FÖRBUD mot identiska 3-kolumners kort:** Använd asymmetriska Bento Grids, redaktionella rader eller split-screen paneler.
3. **FÖRBUD mot grå wireframe-boxar:** Inga tomma grå rektanglar i demo-boxen! Visa RIKTIGA miniatyrer med klickbara knappar och gröna SSL-märken.
4. **FÖRBUD mot generiska knappar ("Get Started"):** Använd explicita knappar ("Se din färdiga prototyp gratis", "Boka via BokaDirekt", "Ring direkt").

---

## Output-struktur

Svara alltid i exakt denna struktur:

### 📋 1. BRANSCHAUDIT & KUNDANPASSNING
- **Bransch & Arketyp:** [Vald branschar ketyp och layoutmodell]
- **Nyckelelement:** [Bokning, samtal, före/efter, meny, certifieringar]
- **Varumärkesvibe:** [Färg- och typografival]

### 🎨 2. GENERERAD DESIGN.md (Kopiera och spara i projektroten)
```markdown
# DESIGN.md – [Företagsnamn]
...
```

### 🚀 3. STITCH STARTPROMPT (Klistra in i Google Stitch)
```text
...
```
