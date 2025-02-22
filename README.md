# Dynamisk CV-sida Projekt

## Om Projektet
Detta projekt handlar om att omvandla en statisk CV-webbplats till en React-applikation. Målet är att skapa en mer dynamisk och underhållbar version av CV-portalen genom att införa moderna webbutvecklingstekniker och React-funktioner.

## Kravspecifikation

### CV Datastruktur
- CV-information (utbildning och arbetslivserfarenhet) ska lagras i en separat JSON-fil
- HTML ska inte innehålla hårdkodad CV-data
- Applikationen ska läsa och generera CV-innehållet från JSON-filen

### Portfolio-funktioner
- Hämta och visa publika projekt från din GitHub-profil
- Visa projektnamn och beskrivningar
- Visa en laddningsindikator medan projekt hämtas
- Möjlighet att behålla eller ersätta befintliga portföljprojekt med GitHub-projekt

### Navigationskrav
- Implementera navigation med React Router
- Säkerställ korrekt routingfunktionalitet genom hela applikationen
- Förhindra 404-fel vid omladdning av sidor i appen

### Publicering
- Applikationen ska publiceras på GitHub Pages
- Webbplatsen ska vara tillgänglig via en publik URL
