# Novo Studio – Design System (DESIGN.md)

**Syfte:** Definiera det visuella språket, färgpaletten, typografin och komponentstrukturen för **Novo Studio** (`novostudio.se`).

---

## 🎯 Designfilosofi & Positionering
Novo Studio positioneras som en **exklusiv, blixtsnabb skandinavisk tech- och designstudio**. 
Designen skall *inte* kännas som en generic AI-mall med beige bakgrund eller stark neon. Den skall ge ett intryck av **hög prestanda, absolut trygghet (SSL/SEO) och modern minimalism**.

---

## 🎨 Färgpalett (Design Tokens)

* **Background Primary:** `#0B0F17` *(Deep Obsidian Dark – djup, professionell mörk bakgrund)*
* **Surface / Cards:** `#131927` *(Elevated Slate Card – för kort, paneler och sektioner)*
* **Surface Hover:** `#1E293B` *(Subtil interaktiv yta)*
* **Accent Primary:** `#3B82F6` *(Electric Sapphire Blue – primärknappar, fokus och aktiva tillstånd)*
* **Accent Glow:** `#60A5FA` *(Soft Cyan-Blue Glow – för skuggor, gradients och hovringseffekter)*
* **Accent Security & Trust:** `#10B981` *(Emerald Green – för SSL-certifikat, 100/100 Google Speed-emblem och garantier)*
* **Text Primary:** `#F9FAFB` *(Crisp Off-White – maximal läsbarhet)*
* **Text Secondary:** `#9CA3AF` *(Muted Slate Gray – för brödtext, underrubriker och sekundär info)*
* **Borders & Dividers:** `rgba(255, 255, 255, 0.08)` *(Subtila hairline-kanter med glassmorphism-känsla)*

---

## ✒️ Typografi & Skala

### Typsnitt:
* **Display / Rubriker:** `Plus Jakarta Sans` *(Bold 700 / SemiBold 600) – Modern, självsäker och studio-mässig*
* **Brödtext / Brödtext:** `Inter` *(Regular 400 / Medium 500) – Ren, läsbar och krispig*
* **Kort/Märken/Data (Badges):** `JetBrains Mono` *(Medium 500) – För sifferdata som 100/100, 0.2s, HTTPS-status*

### Typografisk Skala:
* **Hero Heading (H1):** `clamp(2.5rem, 5vw, 4.2rem)` | Line-height: `1.1` | Weight: `800`
* **Section Heading (H2):** `clamp(1.8rem, 3vw, 2.8rem)` | Line-height: `1.2` | Weight: `700`
* **Sub-heading (H3):** `1.35rem` | Line-height: `1.4` | Weight: `600`
* **Body Large:** `1.125rem` (18px) | Line-height: `1.6` | Weight: `400`
* **Body Regular:** `1.0rem` (16px) | Line-height: `1.6` | Weight: `400`
* **Caption / Badge:** `0.875rem` (14px) | Line-height: `1.4` | Letter-spacing: `0.05em`

---

## 🚀 Signatur-element (The Unique Feature)
Sidans unika, minnesvärda visningskomponent i Herosektionen:
* **"Live Performance & Security Audit Card":**  
  Ett interaktivt kort i Herosektionen som visar tre levande mätare:
  1. ⚡ **Google Speed Index:** `100/100` *(med animerad grön mätare)*
  2. 🔒 **SSL-Säkerhet:** `A+ HTTPS Aktiv` *(med pulserande Emerald Green ikon)*
  3. 🚀 **Svarstid:** `< 0.2 sekunder`
* **Knapp för gratis prototyp:**  
  En framträdande CTA-knapp: *"Be om ett gratis förslag till din verksamhet"* med en subtil Electric Blue glödeffekt.

---

## 📐 Komponenter & Interaktionsmönster

1. **Header / Nav:**  
   Glasartad, semi-transparent header (`backdrop-filter: blur(12px)`) med logotypen **Novo Studio**, länkar till *Erbjudande*, *Fördelar*, *Pris* och en direkt CTA-knapp.
2. **Hero Section:**  
   Rubrik: *"Din nya hemsida – gratis prototyp innan du bestämmer dig."*  
   Underrubrik: *"Vi bygger, hostar och underhåller din hemsida för 500 kr/månad. Blixtsnabb laddtid, inkluderat SSL-certifikat och teknisk SEO."*
3. **Fördelar (När du redan har en hemsida):**  
   Interaktiva kort som jämför gamla långsamma sajter med Novo Studios Blixtsnabba Jamstack + Cloudflare-lösning.
4. **Prissektion:**  
   Tydligt kort för **3 månader provtid (1 000 kr/mån)** ➔ **Ordinarie (500 kr/mån)** med bockar för alla inkluderade funktioner (SSL, SEO, Fri maintenance, Hosting).
5. **Formulär (Be om Prototyp):**  
   Superenkelt 3-fältsformulär (*Företagsnamn*, *Stad*, *Kontakt-mail/SMS*).
