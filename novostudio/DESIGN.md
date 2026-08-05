# Novo Studio – Anti-Slop Design System (DESIGN.md)

**Framework:** Stitch Web Architect Framework (preset: `minimal-editorial` / `signal-system`)  
**Anti-Slop Directives:** Förbjuder uttryckligen alla 12 slop-mönster (inga blå standardknappar, inga identiska 3-kortsgrid, inga grå wireframe-boxar, inga runda 8px-standardhörn).

---

## 🎨 Identity & Vibe
Novo Studio är en **krispig, kompromisslös skandinavisk tech- och designstudio**. 
Designen har karaktär som en högklassig arkitektutställning: generöst med whitespace, djup typografisk kontrast, asymmetrisk bento-layout och taktila komponenter.

---

## 🎨 Color System (Design Tokens)
- **Background Primary:** `#F4F2EC` (Warm Nordic Paper / Off-White – ALDRIG ren vit eller tråkig ljusgrå)
- **Surface Card:** `#FFFFFF` (Pure White Contrast Panel)
- **Surface Dark Accent:** `#121316` (Deep Ink Black – för asymmetriska färgblock)
- **Text Primary:** `#121316` (Deep Ink Black – maximal typografisk skärpa)
- **Text Secondary:** `#575962` (Muted Charcoal Slate)
- **Accent Primary (Action):** `#D946EF` / `#F97316` (Electric Terracotta / Warm Vermilion – ALDRIG standardblå)
- **Accent Trust / Security:** `#059669` (Emerald Green – för SSL & 100/100 Google Speed)
- **Border:** `#D8D5CB` (1.5px Solid Architectural Linework)

---

## ✒️ Typography (Anti-Slop Strict)
- **Display Hero Statement:** `Fraunces` / `Bricolage Grotesque` (700 Italic / Bold, tracking -0.03em) – Ståtlig, redaktionell och omisskännlig.
- **Headings & Subheadings:** `Space Grotesk` (700, uppercase/sentence-case tracking -0.02em).
- **Body Text:** `Outfit` (400, line-height 1.7) – Extremt lättläst och luftig.
- **Data / Metrics:** `JetBrains Mono` (500, tabular-nums) – För mätdata, laddtid och SSL.

---

## 🚫 STRIKT ANTI-SLOP REGLER (Måste följas)
1. **FÖRBUD mot blå standardknappar:** Primärknappar har 1.5px solid svart ram (`#121316`) med 4px offset-skugga ELLER djupsvart bakgrund med krispig vit text och 1px inset highlight.
2. **FÖRBUD mot identiska 3-kort:** Använd asymmetrisk Bento Grid där korten har OLIKA storlekar, färger och innehållstyper (ett mörkt kort, ett stort sifferkort, ett bildkort, ett mätarkort).
3. **FÖRBUD mot grå wireframe-boxar:** Inga tomma grå rektanglar i demo-boxen! Visa en RIKTIG, krispig miniatyr av en färdig hemsida för en hantverkare med klickbar ring-knapp, grönt SSL-märke och animerad 100/100-mätare.
4. **FÖRBUD mot generiska knappar:** Använd explicita handlingsknappar: *"Se din färdiga prototyp gratis"* eller *"Bygg mitt kostnadsfria förslag"*.

---

## 🚀 Signature Component (The Live Transformation Widget)
Herosektionen domineras av en **Live Transformation Widget**:
- En interaktiv före/efter-jämförelse som visar skillnaden mellan en trög 6-sekunders WordPress-sajt och Novo Studios blixtsnabba 0.3s Jamstack-sajt med inbyggt SSL-certifikat.
