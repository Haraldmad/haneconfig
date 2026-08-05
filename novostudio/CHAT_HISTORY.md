# Novo Studio – Fullständig Konversations- & Beslutshistorik

**Datum:** 2026-08-05  
**Projekt:** Novo Studio (WaaS - Web-as-a-Service)  
**Plats:** `~/projekt/haneconfig/novostudio/`

---

## 1. Bakgrund & Inledande Idé
* Elias vill starta en tjänst för att erbjuda helhetslösningar för hemsidor åt småföretagare (hantverkare, frisörer, restauranger, konsulter m.fl.).
* **Prismodell:** 
  * Provtid: 3 månader för 1 000 kr/månad (exkl. moms). Täcker uppstart och låter kunden utvärdera tjänsten utan stor risktagning.
  * Ordinarie abonnemang: 500 kr/månad (exkl. moms) från månad 4.
* **USP (Unik Selling Point):** Bygga en skräddarsydd grundidé/prototyp GRATIS med hjälp av Google Stitch och Gemini och skicka till kunden *innan* avtal tecknas. Noll risk för kunden.
* **Leverans:** Helhetslösning inklusive design, hosting, SSL, drift och fria mindre underhållsändringar (text, bild, priser, öppettider).

---

## 2. Varumärkesprocess & Namnval
* Inledningsvis testades namn som *Webbvisst*, *Webbklart*, *SajtStart*.
* Namn som började på "Sajt..." (t.ex. *SajtStart*) kändes lite hackiga i uttalet (/jt-st/).
* Elias önskade ett mer **vagt, abstrakt och exklusivt** namn som inte låser företaget vid enbart "hemsidor", utan som låter som en modern design/tech-studio.
* Flera korta abstrakta namn utvärderades och DNS-testades i realtid.
* **Slutgiltigt val:** **Novo Studio** 🎨
  * **Status hos Bolagsverket:** Verifierat att inget svenskt bolag heter Novo Studio / Novostudio.
  * **Domän:** `novostudio.se` är verifierad ledig på registry-nivå.

---

## 3. Tekniska Beslut & Hosting
* **Varför Statiska sidor (Jamstack / Vite / HTML / CSS / JS)?**
  * "Statisk" innebär *inte* att sidan är utan animationer eller rörelse. Det handlar enbart om hur koden levereras (förbyggd och skickad från ett blixtsnabbt globalt CDN istället för tunga PHP-databaser som WordPress).
  * **Fördelar:** 0 kr i serverkostnad, 100% säkert (kan inte hackas), blixtsnabb laddtid (100/100 på Google Lighthouse), noll nattliga larm om kraschade sidor.
* **Hostingplattform:** **Cloudflare Pages**
  * Obegränsad bandbredd, gratis automatiskt SSL-certifikat (HTTPS), 0 kr/månad oavsett om Novo Studio har 1 eller 100+ kunder.
  * **Domänköp:** Domänen `novostudio.se` (och kundernas domäner) köps via t.ex. Inwx.se eller Loopia.se (~100–140 kr/år) och pekas om till Cloudflares gratis namnservrar (NS).
* **E-post:** Beslutat att lägga e-postinställningarna på is tillfälligt. Rekommenderad lösning framåt är Cloudflare Email Routing till Gmail (0 kr/mån) eller Google Workspace (`elias@novostudio.se`).

---

## 4. Skapade Dokument i Projektet
1. [CLAUDE.md](file:///C:/Users/Harald/projekt/haneconfig/novostudio/CLAUDE.md) – Styrningsregler för AI-agenter (Gemini & Claude Code).
2. [affarskoncept.md](file:///C:/Users/Harald/projekt/haneconfig/novostudio/affarskoncept.md) – Komplett affärsmodell, prisstruktur, tjänstepaket och teknisk stack.
3. [saljmanus_och_mallar.md](file:///C:/Users/Harald/projekt/haneconfig/novostudio/saljmanus_och_mallar.md) – Säljmanus för E-post, SMS, Instagram DM, uppföljning och invändningshantering.
4. [README.md](file:///C:/Users/Harald/projekt/haneconfig/novostudio/README.md) – Huvuddokumentation och snabbstart för repot.

---

## 5. Instruktion för Framtida Agent / Session
Om en ny AI-agent eller session öppnas i detta repo (`~/projekt/haneconfig/novostudio/`), läs in `CLAUDE.md`, `affarskoncept.md` och `CHAT_HISTORY.md` för att direkt förstå hela affärsidén och fortsätta utvecklingen utan avbrott.
