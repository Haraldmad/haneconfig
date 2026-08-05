# DESIGN.md — Novo Studio (saas-clean preset)

## Brand & Vibe
- Name: Novo Studio (novostudio.se)
- Identity: Skandinavisk krispig modern WaaS-studio. Arkitektonisk skärpa möter varm skandinavisk minimalism.
- Personality: Självsäker, krispig, transparent, högpresterande.
- Tone: Värdeskapande, rak, professionell ("Value First").

## Colors
- Background: Zinc Pure Off-White #FAFAF9
- Surface: Crisp White #FFFFFF
- Surface Secondary: #F4F4F5
- Surface Contrast: Deep Graphite #18181B (för asymmetriska färgblock)
- Text Primary: Deep Graphite #18181B
- Text Secondary: Muted Zinc #52525B
- Text on Dark: Zinc Off-White #FAFAF9
- Accent Primary: Electric Amber #D97706 (knappar, CTA och aktiva tillstånd)
- Accent Hover: Amber Light #F59E0B
- Accent Soft Tint: #FEF3C7
- Accent Security & Trust: Emerald Green #059669 (för SSL-certifikat & Google Speed 100/100)
- Border: Crisp Hairline #E4E4E7 (1.5px solid)
- Border Dark: rgba(255,255,255,0.12)

## Typography
- Headings: Plus Jakarta Sans 700, tracking -0.02em
- Display/Hero Statement: Bricolage Grotesque 800 (används i Herosektionen för maximal karaktär)
- Body: Outfit 400, 16px, line-height 1.6
- Data/Metrics: JetBrains Mono 500, 13px, tabular-nums (för 100/100 Speed, SSL A+, <0.3s)
- Labels: Plus Jakarta Sans 600, 11px, uppercase, tracking 0.08em

## Spacing & Radius System
- Section padding: 80px vertical (Hero får 110px)
- Card padding: 28px
- Grid gap: 20px
- Cards Radius: 16px
- Buttons Radius: 10px
- Badges Radius: 999px (full pill)
- Hairline Border: 1.5px solid #E4E4E7

## Visual Texture & Tactile Buttons
- Texture: Inga generiska toningsfläckar eller tråkiga AI-gradienter. Asymmetrisk kontrasthierarki mellan krispigt vita ytor (#FFFFFF) och djupsvarta grafitpaneler (#18181B).
- Buttons:
  - Primary (CTA): Electric Amber #D97706 bakgrund, White text. 1px inset top-highlight (rgba(255,255,255,0.20)), bottom 2px shadow #B45309. Vid hover: knappen lyfter 1px (translateY -1px) med bärnstensglöd box-shadow 0 4px 16px rgba(217,119,6,0.25).
  - Secondary: Deep Graphite #18181B bakgrund, White text, 1px border. Vid hover: lyfter 1px.

## Signature Feature Component
"The Living Industry Showcase Card" i Herosektionen:
- Ett Bento-kort med 3 branschflikar (🛠️ Hantverkare, ✂️ Frisör, 🍽️ Restaurang).
- Inuti kortet visas en RIKTIG miniatyrvy av en färdig kundsajt med grönt SSL-märke (🔒 HTTPS Aktiv), klickbar "Ring direkt"-knapp och animerad 100/100 Google Speed-mätare.

## Anti-Slop Strict Rules
- BANNED: Blå standardknappar (#2563EB), centrerad tråkig 3-kortsgalleri, tomma grå wireframe-streck, generisk "Get Started"-text.
- MANDATORY: Explicita handlingsknappar ("Se din färdiga prototyp gratis"), asymmetrisk Bento Grid, 1.5px solid kantlinje.
