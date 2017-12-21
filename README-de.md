# Shariff-Plus – Social-Media-Buttons mit Datenschutz [![Build Status](https://travis-ci.org/richard67/shariff-plus.svg?branch=master)](https://travis-ci.org/richard67/shariff-plus)

Um die Privatsphäre ihrer Besucher gegenüber den Social-Media-Netzwerken zu bewahren, können Webseiten-Betreiber mit dem Projekt Shariff-Plus eigene Social-Media-Buttons zum Teilen oder Anzeigen des Facebook-Buttons "Gefällt mir" integrieren.

Shariff-Plus ist identisch mit [Shariff von Heise Medien](https://github.com/heiseonline/shariff) plus Erweiterungen wie die Anzeige des Facebook-Buttons "Gefällt mir" in einem Dialog, welche nicht für die Integration in Shariff vorgesehen sind, oder andere Erweiterungen und Korrekturen für Shariff, die (noch) nicht in Shariff integriert wurden.

Der Code der offiziellen Buttons von Facebook, Google+ und Twitter überträgt von jedem Besucher kennzeichnende Daten an die Social-Media-Netzwerke. Shariff-Plus erzeugtze hingegen Buttons, die mit einem Klick die Dialoge zum Teilen oder Vergeben von "Gefällt mir" bei Facebook anzeigen, die Anzahl der Likes für die aktuelle Seite anzeigen und trotzdem keine unnötigen Daten übertragen.

**Shariff** `(/ˈʃɛɹɪf/)` ist ein Open-Source Projekt von c't und heise online.

Shariff besteht aus zwei Teilen. Der erste Teil ist eine einfache JavaScript-Bibliothek einschließlich Vektor-Icons und CSS zur Formatierung der Knöpfe. Der zweite ist die optionale, server-seitige Komponente (derzeit für PHP, Perl oder NodeJS). Mit dem Shariff-Backend auf dem eigenen Server muss der Browser des Besuchers zur Darstellung der Share-Counts keine Verbindung zu Facebook, Twitter oder Google+ aufbauen. Daten werden erst dann zum Social-Media-Netzwerk übertragen, wenn der Besucher den Inhalt tatsächlich teilen möchte.

**Shariff-Plus** ist ein Open-Source Projekt von [mir](https://github.com/richard67). Es kann anstelle der Shariff-JavaScript-Bibliothek genutzt werden und verwendet optional die server-seitige Komponente von (Original-)Shariff.

## Erste Schritte

1. Das [aktuellste Shariff-Plus-Release](https://github.com/richard67/shariff-plus/releases/latest) herunterladen
2.  CSS im `<head>` einbinden:
    * `shariff.complete.css` enthält alle Abhängigkeiten
    * `shariff.min.css` verwenden, wenn [Font Awesome](https://github.com/FortAwesome/Font-Awesome) bereits in Ihrer Seite geladen wird
3. JavaScript unmittelbar vor `</body>` einbinden:
    * `shariff.complete.js` enthält alle Abhängigkeiten
    * `shariff.min.js` verwenden, wenn [jQuery](https://github.com/jquery/jquery) bereits in der Seite vorhanden ist
4. Beliebig viele `<div class="shariff">` Elemente einfügen
5. Mit den unten beschriebenen `data`-Attributen Aussehen und Funktion konfigurieren

Die Zähler in den Buttons benötigen ein [Backend](#backends) auf ihrem Server.

Code-Beispiel:

```html
<!DOCTYPE html>
<html>
<head>
    <link href="/path/to/shariff.complete.css" rel="stylesheet">
</head>
<body>
    <h1>My article</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <h2>Einfache Buttons:</h2>
    <div class="shariff"></div>

    <h2>Fortgeschrittene Optionen:</h2>
    <div class="shariff" data-backend-url="/path/to/backend" data-url="http://www.example.com/my-article.html" data-theme="grey" data-orientation="vertical"></div>

    <!-- vor dem schließenden </body>-Tag -->
    <script src="/path/to/shariff.complete.js"></script>
</body>
</html>
```

## Demo-Webseite starten

Nach dem Download von Shariff-Plus mit `npm install` die Abhängigkeiten installieren. Anschließend kann mit `npm run dev` ein lokaler Webserver gestartet werden, der eine Seite mit verschiedenen Konfigurations-Beispielen bereitstellt:

```sh
$ git clone https://github.com/richard67/shariff-plus.git
$ cd shariff-plus
$ npm install
$ npm run dev
```

## Optionen (data-Attribute)

| Attribut         | Beschreibung | Default |
|------------------|--------------|---------|
| `data-backend-url` | Pfad zum Shariff-[Backend](#backends). Der Wert `null` deaktiviert die Anzeige von Share-Counts.  | `null` |
| `data-dialogs-media-url` | Pfad zu css oder js für spezielle Dialoge wie z.B. den des Services `facebooklike`. | Pfad zum Verzeichnis, in dem Shariff installiert ist. |
| `data-facebook-count-btn` | Die Buttons(s), die den Zähler vom Backend anzeigen sollen, wenn beide Services `facebook` und `facebooklike` verwendet werden. Werte: `like`, `share`, `both`. | `both` |
| `data-facebooklike-options` | Objekt mit Optionen für den Button "Gefällt mir" von Facebook, wie sie der Facebook Konfigurator für den Button liefert. Für die Verwendung im `data`-Attribut muss die Angabe Entity-enkodiert werden. Beispiel mit den Standardwerten von Facebook: `data-facebooklike-options="{&quot;width&quot;:450,&quot;layout&quot;:&quot;standard&quot;,&quot;action&quot;:&quot;like&quot;,&quot;size&quot;:&quot;large&quot;,&quot;show_faces&quot;:true,&quot;share&quot;:true,&quot;appId&quot;:&quot;99999&quot;}"` mit 99999 = Facebook `app_id`. | Siehe Beispiel, mit appId = Wert des Meta-Tags `fb:app_id` oder `null`, wenn nicht definiert. |
| `data-flattr-category` | Kategorie für Flattr-Spende. | `null` |
| `data-flattr-user` | Benutzer, der die Flattr-Spende erhält. | `null` |
| `data-info-url` | URL der Infoseite. | `http://ct.de/-2467514` |
| `data-lang`      | Lokalisierung auswählen. Verfügbar: `bg`, `de`, `en`, `es`, `fi`, `hr`, `hu`, `ja`, `ko`, `no`, `pl`, `pt`, `ro`, `ru`, `sk`, `sl`, `sr`, `sv`, `tr`, `zh` | `de` |
| `data-mail-body` | Wenn `data-mail-url` ein `mailto:`-Link ist, wird dieser Wert als Mail-Body verwendet. Der Mail-Body-Text sollte den Platzhalter `{url}` enthalten. Dieser wird durch die zu teilende URL ersetzt. | siehe `data-url` |
| `data-mail-subject` | Wenn `data-mail-url` ein `mailto:`-Link ist, wird dieser Wert als Mail-Betreff verwendet. | siehe `data-title` |
| `data-mail-url`  | Der Link des `mail`-Buttons | `?view=mail` |
| `data-media-url` | Zu teilendes Bild (pinterest) | `null` |
| `data-orientation` | Anordnung der Buttons. Verfügbar: `horizontal`, `vertical` | `horizontal`  |
| `data-referrer-track` | Wenn angegeben, wird dieser String an die geteilte URL angehängt. Mit `null` deaktivieren. | `null` |
| `data-services`   | Liste der Services, die verwendet werden sollen. Für die Verwendung im `data`-Attribut muss die Angabe Entity-enkodiert werden. Die Reihenfolge wird berücksichtigt. Beispiel: `data-services="[&quot;facebook&quot;,&quot;googleplus&quot;]"` <br> Verfügbare Dienste: `twitter`, `facebook`, `facebooklike`, `googleplus`, `linkedin`, `pinterest`, `xing`, `whatsapp`, `mail`, `info`, `addthis`, `tumblr`, `flattr`, `diaspora`, `reddit`, `stumbleupon`, `threema`, `weibo`, `tencent-weibo`, `qzone`, `print`  | Twitter, Facebook, Google+ |
| `data-theme`       | Farbschema auswählen. Verfügbar: `standard`, `grey` und `white`. | `standard` |
| `data-title`       | Titel der zu teilenden Seite. | Entweder `DC.title`/`DC.creator` oder `<title>` |
| `data-twitter-via` | User von dem der Tweet ursprünglich stammt. | `null` |
| `data-url`         | URL, die geteilt werden soll. | Wenn `data-url` nicht gesetzt ist, wird `link[rel="canonical"]`, `meta[property="og:url"]` oder `location.href` verwendet. |

## Konstruktor-Argumente

Alle data-Attribute von oben sind auch als Konstruktor-Argumente in JavaScript verwendbar. Dabei wird das `data-` am Anfang weggestrichen und camelCase statt kebab-case verwendet:

```js
var buttonsContainer = $('.some-selector');
new Shariff(buttonsContainer, {
    backendUrl: '/my/backend/url',
    orientation: 'vertical',
    mailUrl: 'mailto:me@example.com',
});
```

## Unterstützte Browser

Shariff-Plus unterstützt folgende Browser:

- Firefox
- Google Chrome
- Internet Explorer/Edge
- Safari

Die jeweils aktuell letzten und vorletzten Versionen von Firefox, Google Chrome, Internet Explorer/Edge und Safari werden untersützt.

## Unterstützte Services

Shariff-Plus unterstützt folgende Social-Sharing-Services:

- AddThis
- diaspora*
- facebook
- Flattr
- Google+
- LinkedIn
- Mail
- Pinterest
- Print
- Qzone
- reddit
- StumbleUpon
- Tencent Weibo
- Threema
- Tumblr
- Twitter
- Weibo
- WhatsApp
- XING

Zusätzlich stellt der Service `facebooklike` einen Button zur Anzeige des Buttons "Gefällt mir" von Facebook bereit.

Schließlich stellt der Service `Info` einen Button zur Anzeige einer Infoseite über die Social-Sharing-Buttons bereit.
Die URL dieser Seite kann mit einer Option festgelegt werden. Standardwert: `http://ct.de/-2467514`, d.h. der c't-Artikel zur Einführung von Shariff.

## Backends

Wenn in den Shariff-Plus-Buttons die Share-Counts angezeigt werden sollen, wird eines der folgenden Shariff-Backends benötigt:

* [shariff-backend-node](http://github.com/heiseonline/shariff-backend-node)
* [shariff-backend-perl](http://github.com/heiseonline/shariff-backend-perl)
* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Drittanbieter-Backends:

* [shariff-backend-java](http://github.com/headissue/shariff-backend-java)

Die URL, unter der das Backend erreichbar ist, muss im `data`-Attribut `data-backend-url` angegeben werden. Ein Backend unter der URL `http://example.com/my-shariff-backend/` wird in `data-backend-url` so angegeben: `/my-shariff-backend/`. Den Rest erledigt das Skript.

## Drittanbieter-Integrationen

Es gibt noch Shariff-Plus-Integrationen für Drittanbieter-Systeme.