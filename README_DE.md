<!--
    Datei: README_DE.md
    Zuletzt aktualisiert: 04.12.2025 17:30 MEZ
    Version: 2.0
-->

# Zeitzonen-Umrechner

Ein eleganter Zeitzonen-Umrechner für weltweite Videokonferenzen und internationale Meetings. Perfekt für alle, die Meeting-Einladungen mit Zeitzonenkürzel wie CET, PST oder EST erhalten und schnell ihre lokale Zeit wissen möchten.

## Features

- **50+ Zeitzonenkürzel** (CET, PST, EST, JST, GMT, etc.)
- **Alphabetisch sortierte Dropdown-Listen** für einfache Navigation
- **Getrennte Datums- & Zeitauswahl** - Kalender für Datum, Dropdown für Stunden
- **Zwei visuelle Stile** - Wechsel zwischen Normal und Neumorphic Layout
- **Persistente Präferenzen** - Ihre Stilwahl wird automatisch gespeichert
- **Responsive Design** - Funktioniert auf Desktop, Tablet und Mobile
- **Keine Abhängigkeiten** - Reines HTML, CSS und JavaScript
- **Offline-fähig** - Funktioniert ohne Internetverbindung
- **Plattformübergreifend** - Mac, PC, Linux kompatibel

## Anwendungsfälle

Perfekt für Szenarien wie:
- "Meeting um 15 Uhr CET" → Was ist das in meiner Zeitzone?
- Internationale Team-Koordination
- Planung über mehrere Zeitzonen hinweg
- Schnelle Zeitzonen-Referenz für Reisende
- Planung zukünftiger Meetings mit spezifischen Daten

## Installation

### Option 1: ZIP herunterladen
1. Neueste Version herunterladen
2. ZIP-Datei entpacken
3. `timezone-converter.html` im Browser öffnen

### Option 2: Repository klonen
```bash
git clone https://github.com/Rigel-Computer/timezone-converter.git
cd timezone-converter
open timezone-converter.html
```

### Option 3: Direkte Nutzung
Keine Installation nötig! Einfach herunterladen und in einem modernen Browser öffnen.

## Verwendung

### Basis-Umrechnung
1. Wähle deine Zeitzone aus dem Dropdown (z.B. CET)
2. Wähle die Ziel-Zeitzone (z.B. PST)
3. Optional: Wähle ein Datum über den Kalender
4. Optional: Wähle eine Uhrzeit aus dem Stunden-Dropdown (00:00 - 23:00)
5. Klicke auf "Convert", um das Ergebnis zu sehen

### Datums- & Zeitauswahl
- **Datum:** Klicke auf das Kalender-Icon, um ein beliebiges Datum zu wählen
- **Zeit:** Wähle aus ganzen Stunden (00:00 bis 23:00) via Dropdown
- **Standard:** Lasse beide Felder leer, um aktuelles Datum und Zeit zu nutzen
- **Kombinationen:** Du kannst nur Datum, nur Zeit oder beides auswählen

### Layout-Stile
Wähle zwischen zwei verschiedenen visuellen Stilen:
- **Normal Layout:** Sauberes, flaches Design mit blauen Akzenten
- **Neumorphic Layout:** Premium 3D-Design mit metallischen Silber-Effekten

Deine Wahl wird automatisch gespeichert und bleibt über Browser-Sitzungen hinweg erhalten.

## Projektstruktur

```
timezone-converter/
├── timezone-converter.html    # HTML-Hauptstruktur
├── styles.css                 # Normales Flat-Design
├── styles_metallic.css        # Neumorphisches Metallic-Design
├── timezone-data.js           # 50+ Zeitzonenkürzel
├── app.js                     # Anwendungslogik & Konvertierungsfunktionen
├── timezone_clock_icon.ico    # Anwendungs-Icon
├── LICENSE                    # MIT-Lizenz
├── README.md                  # Englische Dokumentation
└── README_DE.md               # Diese Datei (Deutsch)
```

## Unterstützte Zeitzonen

### Beliebte Kürzel
- CET/CEST - Mitteleuropäische (Sommer-)Zeit
- GMT/BST - Greenwich Mean Time / British Summer Time
- EST/EDT - Eastern Standard/Daylight Time (USA)
- CST/CDT - Central Standard/Daylight Time (USA)
- MST/MDT - Mountain Standard/Daylight Time (USA)
- PST/PDT - Pacific Standard/Daylight Time (USA)
- JST - Japan Standard Time
- AEST/AEDT - Australian Eastern Standard/Daylight Time
- IST - India Standard Time
- SGT - Singapore Time
- Und über 40 weitere!

## Technische Details

### Verwendete Technologien
- **HTML5** - Semantische Struktur
- **CSS3** - Duales Stil-System (flat & neumorphic)
- **Vanilla JavaScript** - Keine Frameworks oder Bibliotheken
- **IANA Timezone Database** - Präzise Zeitzonenberechnungen
- **LocalStorage API** - Persistente Benutzer-Präferenzen

### Browser-Kompatibilität
- Chrome/Edge (v90+)
- Firefox (v88+)
- Safari (v14+)
- Opera (v76+)

### Hauptfunktionen
- **Responsive Design:** 1200px max-width mit Breakpoints bei 768px und 480px
- **Echtzeit-Konvertierung:** Nutzt JavaScript Intl.DateTimeFormat API
- **Fehlervermeidung:** Kalender und Dropdown-Menüs verhindern Eingabefehler
- **Intelligente Standards:** Nutzt automatisch aktuelles Datum/Zeit wenn nicht angegeben
- **Stil-Persistenz:** Nutzt LocalStorage, um deine Layout-Präferenz zu speichern

### Neu in Version 2.0

**Entfernt:**
- Ländersuche-Feature (zu fehleranfällig bei Tippfehlern)

**Hinzugefügt:**
- Getrennte Datums- und Zeitauswahl
- Kalender-Picker für Datumseingabe
- Stunden-Dropdown-Menü (00:00 - 23:00)
- Zwei verschiedene visuelle Stile
- Layout-Umschalter mit persistenten Präferenzen
- Vollständige englische Benutzeroberfläche

**Verbessert:**
- Zuverlässigere Eingabevalidierung
- Bessere Fehlervermeidung
- Klarere Benutzeroberfläche
- Verbesserte Mobile-Responsiveness

## Mitwirken

Beiträge sind willkommen! So kannst du helfen:

1. Repository forken
2. Feature-Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request öffnen

### Ideen für Beiträge
- Weitere Zeitzonenkürzel hinzufügen
- Dark Mode als dritte Stil-Option implementieren
- Zeitzonen-Favoriten/Lesezeichen hinzufügen
- Browser-Extension-Version erstellen
- Tastaturkürzel hinzufügen
- Zeitzonen-Suche/Filter implementieren
- "Ergebnis teilen"-Funktionalität hinzufügen
- Mobile-App-Version erstellen

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die [LICENSE](LICENSE) Datei für Details.

## Autor

Erstellt für internationale Teams und Remote-Worker weltweit.

**Version 2.0** - Erweitert mit verbesserter UX und dualem Layout-System.

## Support

Wenn du dieses Tool hilfreich findest, bitte:
- ⭐ Markiere das Repository mit einem Stern
- 🐛 Melde Fehler über Issues
- 💡 Schlage Features über Discussions vor
- 📢 Teile es mit deinen internationalen Teams
- 🔄 Trage Verbesserungen bei

## Gewährleistungsausschluss

Dieses Tool wurde mit Unterstützung von Generativer KI (Claude von Anthropic) erstellt.

Obwohl dieser Konverter die IANA-Zeitzonendatenbank für präzise Berechnungen verwendet, wurden nicht alle Zeitzonenkombinationen einzeln getestet. Bitte überprüfe kritische Meeting-Zeiten unabhängig. Es wird keine Gewährleistung oder Garantie für die Genauigkeit der Umrechnungen übernommen.

## Änderungsprotokoll

### Version 2.0 (Dezember 2025)
- Ländersuche-Feature entfernt
- Getrennte Datums- und Zeitauswahl hinzugefügt
- Kalender-Picker für Datum implementiert
- Stunden-Dropdown-Menü für Zeit hinzugefügt
- Duales Layout-System erstellt (Normal & Neumorphic)
- Layout-Präferenz-Persistenz hinzugefügt
- Vollständige englische Benutzeroberfläche
- Verbesserte Fehlervermeidung

### Version 1.0 (Dezember 2025)
- Erste Veröffentlichung
- 50+ Zeitzonenkürzel
- Ländersuche-Funktionalität
- Basis Datums-/Zeitauswahl
- Einzelnes Layout-Design
