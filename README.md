# POHLE Konferenzserver App für MacOS und Windows

Desktopanwendung für den [POHLE Konferenzserver] für Windows und MacOS. 

![](screenshot.png)

## Funktionen

- Fork des jitsi-meet-electron Client
- Auf Deutsch übersetzt
- Für meinen Konferenzserver angepaßt (Titel, Logos, Farben, ServerURL)
- Die Anwendung kann natürlich mit jedem anderen [Jitsi Meet] Server verwendet werden
- Lokal gespeicherte Settings
- Automatische Updates
- Fernsteuerung
- Kleines Extrafenster, wenn die App nicht den Fokus hat
- Initiales Fenster vergrößert
- Signierte App für MacOS und Windows
- Setup für Nicht-Admins auf Windows

## Installation

Für Windows gibt es das [Windows Setup EXE] zum einfach installieren (für die meisten Anwender empfohlen) und als [Windows Setup MSI] für Administratoren, die das Program automatisch auf die Arbeitsstationen installieren möchten. Wer keine Adminrechte auf seinem Windows PC hat, nimmt das [Windows NonAdmin Setup], das installiert die Anwendung in das AppData Verzeichnis. 

Für MacOS gibt es ein DMG File zum Download, dieses einfach mounten und die App ins Applications Verzeichnis ziehen, wie Ihr das von anderen MacApps gewohnt seid: [MacOS Setup]

Du kannst auch den [Quellcode] laden und die Anwendung für Deine Zwecke modifizieren und neu kompilieren. 

## Weitere Informationen

Für den [POHLE Konferenzserver] brauchst Du ein Konto, damit Du Konferenzen starten kannst. Um an Konferenzen teilzunehmen brauchst Du nur den Namen der Konferenz und ggf. das Kennwort für die Konferenz, aber kein Konto. 

Weitere Informationen zum [POHLE Konferenzserver]

Du kannst diesen Client aber mit jedem anderen [Jitsi Meet] Server verwenden, dann mußt Du nur nach dem Setup den Namen des Servers in den Einstellungen eintragen. 

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
[Windows NonAdmin Setup]: https://github.com/cpohle/jitsi-meet-electron/releases/download/v2.1.2/POHLE_Konferenzserver_NonAdmin_2.1.2.exe
[Windows Setup EXE]: https://github.com/cpohle/jitsi-meet-electron/releases/download/v2.1.2/POHLE_Konferenzserver_2.1.2.exe
[Windows Setup MSI]: https://github.com/cpohle/jitsi-meet-electron/releases/download/v2.1.2/POHLE_Konferenzserver_2.1.2.msi 
[MacOS Setup]: https://github.com/cpohle/jitsi-meet-electron/releases/download/v2.1.2/POHLE_Konferenzserver_2.1.2.dmg
[Quellcode]: https://github.com/cpohle/jitsi-meet-electron/archive/v2.1.2.zip
