# POHLE Konferenzserver App für MacOS und Windows

Desktopanwendung für den [POHLE Konferenzserver] für Windows und MacOS. 

![](screenshot.png)

## Funktionen

- Fork des jitsi-meet-electron Client
- Soweit sinnvoll und möglich auf Deutsch übersetzt
- Für meinen Konferenzserver angepaßt (Titel, Logos, Farben, ServerURL)
- Die Anwendung kann natürlich mit jedem anderen [Jitsi Meet] Server verwendet werden
- Lokal gespeicherte Settings
- Automatische Updates
- Fernsteuerung
- Kleines Extrafenster, wenn die App nicht den Fokus hat
- Signierte App für MacOS und Windows 

## Installation

Für den [POHLE Konferenzserver] brauchst Du ein Konto, damit Du Konferenzen starten kannst. Um an Konferenzen teilzunehmen brauchst Du nur den Namen der Konferenz und ggf. das Kennwort für die Konferenz, aber kein Konto. 

Für Windows gibt es zwei Setupprogramme: 

- Für Anwender, die keine Adminrechte auf ihrem PC haben und deren Virenscanner kein Problem hat, Anwendungen im AppData auszuführen gibt es das Setup hier (...), dies installiert die Anwendung nach %Appdata%\Local\Applications
- Für die Administratoren meiner Kunden und Anwender, die Adminrechte auf ihrem PC haben gibt es das Setup als MSI File hier (...), dieses installiert die Anwendung nach %ProgramFiles%

Für MacOS gibt es ein DMG File zum Download, dieses einfach mounten und die App ins Applications Verzeichnis ziehen, wie Ihr das von anderen MacApps gewohnt seid. 

## Weitere Informationen

Weitere Informationen zum [POHLE Konferenzserver]

## Lizenz

Apache 2. Siehe in der [LICENSE] Datei.

## Community

Jitsi ist von einer großen Gemenschaft von Entwicklern gebaut, wenn Du teilnehmen 
möchtest, registriere Dich im [community forum].

[Download]: https://github.com/cpohle/jitsi-meet-electron/releases/latest
[community forum]: https://community.jitsi.org/
[LICENSE]: LICENSE
[POHLE Konferenzserver]: https://support.pohle.net/display/HC/Konferenzserver
[Jitsi Meet]: https://jitsi.org/jitsi-meet/
