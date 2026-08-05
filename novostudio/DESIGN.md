# Novo Studio – Design System (DESIGN.md)

**Framework:** Stitch Web Architect Framework (preset: `dark-luxury`)  
**Karaktär:** Djup natt, exklusiv brons/champagne-accent, krispiga 1px-linjer, taktila knappar med fysiskt djup, noll AI-slop.

---

## 🎨 Designfilosofi (webarchitect)
Inga platta generiska AI-ytor eller runda 8px-standardknappar. Novo Studio byggs som en exklusiv skandinavisk mission control-studio för företagare som vill ha kvalitet i varje pixel.

---

## 🎨 Colors (Design Tokens)
- **Background Primary:** `#09090B` (Obsidian Void)
- **Surface:** `#141417` (Dark Slate Card)
- **Surface Raised:** `#1F1F24` (Elevated Surface)
- **Text Primary:** `#FAF8F5` (Ivory Off-White)
- **Text Secondary:** `#8B8B93` (Ash Gray)
- **Accent Primary:** `#C9A84C` (Champagne Bronze – knapp och fokus)
- **Accent Hover:** `#D4B760` (Champagne Glow)
- **Accent Dim:** `rgba(201, 168, 76, 0.08)`
- **Accent Trust / Security:** `#2DD4A0` (Mint Green – SSL & Google Speed)
- **Border:** `#2A2A35` (1px Crisp Hairline)
- **Border Active:** `rgba(201, 168, 76, 0.30)`

---

## ✒️ Typography (Anti-Slop Strict)
- **Headings:** `Plus Jakarta Sans` (600 / 800, tracking -0.02em)
- **Display Statement:** `Playfair Display` (400 italic – använd endast i Hero-rubrik)
- **Body:** `Outfit` (400, line-height 1.6)
- **Data / Metrics:** `JetBrains Mono` (500, tabular-nums – för 100/100, SSL A+, <0.2s)
- **Labels:** `Plus Jakarta Sans` (600, 11px uppercase, tracking 0.08em)

---

## 🚀 Tactile Buttons & Component Rules (webarchitect)
- **Primary Button:** Champagne #C9A84C bakgrund, Obsidian #09090B text. 1px inset top-highlight (white 15%), bottom shadow 0 2px 0 #A08535. Vid hover: knappen lyfter (translateY -1px) med champagne glow `0 0 20px rgba(201,168,76,0.2)`. Radius: 8px.
- **Cards:** Background `#141417`, border 1px `#2A2A35`, radius 12px. Inga tunga skuggor i mörkt läge – separation sker via linjer och kontraster.
- **Signature Feature:** "Mission Control Audit Card" i Herosektionen med tre levande indikatorer (100/100 Google Speed, 🔒 SSL A+ HTTPS, < 0.2s svarstid).

---

## 📐 Bento Grid Layout (webarchitect)
Asymmetrisk 12-kolumners Bento Grid med 6 jämförelsekort som förklarar alla fördelar med Novo Studio vs gamla utdaterade hemsidor.
