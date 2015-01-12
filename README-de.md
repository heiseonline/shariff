# Shariff – Schützen und teilen

Um die Privatsphäre ihrer Besucher gegenüber den Social-Media-Netzwerken zu bewahren, können Webseiten-Betreiber mit dem Projekt Shariff eigene Teilen-Buttons integrieren.

![Shariff Logo © 2014 Heise Zeitschriften Verlag](http://www.heise.de/icons/ho/shariff-logo.png)

Der Code der offiziellen Buttons von Facebook, Google+ und Twitter überträgt von jedem Besucher kennzeichnende Daten an die Social-Media-Netzwerke. Shariff erzeugt hingegen Share-Buttons, die mit einem Klick teilen, die Anzahl der Likes, Tweets und Plus-Ones für die aktuelle Seite anzeigen und trotzdem keine unnötigen Daten übertragen.

Shariff `(/ˈʃɛɹɪf/)` ist ein Open-Source Projekt von c't und heise online.

Shariff besteht aus zwei Teilen. Der erste Teil ist eine einfache JavaScript-Bibliothek einschließlich Vektor-Icons und CSS zur Formatierung der Knöpfe. Der zweite ist die optionale, server-seitige Komponente (derzeit für PHP, Perl oder NodeJS). Mit dem Shariff-Backend auf dem eigenen Server muss der Browser des Besuchers zur Darstellung der Share-Counts keine Verbindung zu Facebook, Twitter oder Google+ aufbauen. Daten werden erst dann zum Social-Media-Netzwerk übertragen, wenn der Besucher den Inhalt tatsächlich teilen möchte.

## Erste Schritte

1. Das [aktuellste Shariff-Release](https://github.com/heiseonline/shariff/releases/latest) herunterladen
2. JavaScript `build/shariff.min.js` bzw. `build/shariff.complete.js` (enthält jQuery) und CSS `build/shariff.min.css` einbinden
3. Beliebig viele `<div class="shariff">` Elemente einfügen
4. Mit den unten beschriebenen `data`-Attributen Aussehen und Funktion konfigurieren

Die Share-Counts in den Buttons benötigen ein [Backend](#backends) auf ihrem Server.

Code-Beispiel:

```html
<!DOCTYPE html>
<html>
<head>
    <link href="/path/to/shariff.min.css" rel="stylesheet">
</head>
<body>
    <h1>My article</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <h2>Einfache Buttons:</h2>
    <div class="shariff"></div>

    <h2>Fortgeschrittene Optionen:</h2>
    <div class="shariff" data-backend-url="/path/to/backend" data-url="http://www.example.com/my-article.html" data-theme="grey" data-orientation="vertical"></div>

    <!-- vor dem schließenden </body>-Tag -->
    <script src="/path/to/shariff.min.js"></script>
</body>
</html>
```

## Shariff mit `npm` einrichten

Shariff ist auch als Node-Paket verfügbar und kann mit `npm` in ein Projekt eingebunden werden:

```sh
$ cd my-project
$ npm install shariff --save
```

Dann kann Shariff im eigenen Skript initialisiert und an DOM-Elemente gebunden werden:

```js
// my-app.js
var Shariff = require('shariff');
var $ = require('jquery');
var buttonsContainer = $('.some-selector');
new Shariff(buttonsContainer, {
    orientation: 'vertical'
});
```

## Demo-Webseite starten

Nach dem Download von Shariff mit `npm install` die Abhängigkeiten installieren. Anschließend kann mit `grunt demo` ein lokaler Webserver gestartet werden, der eine Seite mit verschiedenen Konfigurations-Beispielen bereitstellt:

```sh
$ git clone https://github.com/heiseonline/shariff.git
$ cd shariff
$ npm install
$ grunt demo 
```

Für den Aufruf von `grunt demo` muss [Grunt CLI](http://gruntjs.com/getting-started#installing-the-cli) installiert sein. Die Beispielseite verwendet [`shariff-backend-node`](https://github.com/heiseonline/shariff-backend-node), um die Share-Counts für die Buttons bereitzustellen.

## Optionen (data-Attribute)

| Attribut         | Beschreibung | Default |
|------------------|--------------|---------|
| `data-backend-url` | Pfad zum Shariff-[Backend](#backends). Der Wert `null` deaktiviert die Anzeige von Share-Counts.  | `null` |
| `data-lang`      | Lokalisierung auswählen. Verfügbar: `de`, `en`, `es` | `de` |
| `data-orientation` | Anordnung der Buttons. Verfügbar: `horizontal`, `vertical` | `horizontal`  |
| `data-referrer-track` | Wenn angegeben, wird dieser String an die geteilte URL angehängt. Mit `null` deaktivieren. | `null` |
| `data-services`  | Liste der Services, die verwendet werden sollen. Für die Verwendung im `data`-Attribut muss die Angabe Entity-enkodiert werden. Die Reihenfolge wird berücksichtigt. Beispiel: `data-services="[&quot;facebook&quot;,&quot;googleplus&quot;]"` <br> Verfügbare Dienste: `twitter`, `facebook`, `googleplus`, `whatsapp`, `tumblr`, `reddit`, `pinterst`, `flattr`, `mail`, `info` | 'facebook', 'googleplus', 'twitter', 'pinterest', 'reddit', 'tumblr', 'mail', 'info' |
| `data-theme`     | Farbschema auswählen. Verfügbar: `standard`, `grey` und `white`. | `standard` |
| `data-url`       | URL, die geteilt werden soll. | Wenn `data-url` nicht gesetzt ist, wird `link[rel="canonical"]`, `meta[property="og:url"]` oder `location.href` verwendet. |
| `data-title`     | Überschrift, die geteilt werden soll. | Wenn `data-title` nicht gesetzt ist, wird `meta[(name|property)="(og:)?title"]` oder `<title>` verwendet. |
| `data-description` | Beschreibungstext, der geteilt werden soll. | Wenn `data-description` nicht gesetzt ist, wird `meta[(name|property)="(og:)?description"]` verwendet. |
| `data-image`     | Bild, das geteilt werden soll. | Wenn `data-image` nicht gesetzt ist, wird `meta[(name|property)="(og:)?image"]` verwendet. |
| `data-tags`      | Tags, die geteilt werden sollen. Im Format: `Tag 1,foo,bar`| Wenn `data-tags` nicht gesetzt ist, wird `meta[property="article:tag"]` verwendet. |

Die Optionen `data-title`, `data-description`, `data-image`, `data-tags` und `data-referrer-track` können für jeden Service separat angegeben werden: z.B.: `data-facebook-referrer-track`

Folgende Optionen sind nicht für jeden Service verfügbar:

| Service   | `title` | `description` | `image` | `tags` |
|:----------|:-------:|:-------------:|:-------:|:------:|
| Facebook  | :negative_squared_cross_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: |
| Google+   | :negative_squared_cross_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: |
| Twittr    | :white_check_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: |
| Whatsapp  | :white_check_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: |
| E-Mail    | :white_check_mark: | :white_check_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: |
| Tumblr    | :white_check_mark: | :white_check_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: |
| Reddit    | :white_check_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: | :negative_squared_cross_mark: |
| Pinterest | :white_check_mark: | :negative_squared_cross_mark: | :white_check_mark: | :negative_squared_cross_mark: |
| Flattr    | :white_check_mark: | :white_check_mark: | :negative_squared_cross_mark: | :white_check_mark: |

Der Service Flattr muss zudem über die zusätzlichen Optionen `data-flattr-user` und `data-flattr-category` konfiguriert werden.

## Backends

Wenn in den Shariff-Buttons die Share-Counts angezeigt werden sollen, wird eines der folgenden Backends benötigt:

* [shariff-backend-node](http://github.com/heiseonline/shariff-backend-node)
* [shariff-backend-perl](http://github.com/heiseonline/shariff-backend-perl)
* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Drittanbieter-Backends:

* [shariff-backend-java](http://github.com/headissue/shariff-backend-java)

Die URL, unter der das Backend erreichbar ist, muss im `data`-Attribut `data-backend-url` angegeben werden. Ein Backend unter der URL `http://example.com/my-shariff-backend/` wird in `data-backend-url` so angegeben: `/my-shariff-backend/`. Den Rest erledigt das Skript.
