# Shariff – Schützen und teilen [![Build Status](https://travis-ci.org/heiseonline/shariff.svg?branch=master)](https://travis-ci.org/heiseonline/shariff)

Um die Privatsphäre ihrer Besucher gegenüber den Social-Media-Netzwerken zu bewahren, können Webseiten-Betreiber mit dem Projekt Shariff eigene Teilen-Buttons integrieren.  [Demo](http://heiseonline.github.io/shariff/)

![Shariff Logo © 2015 Heise Medien](http://www.heise.de/icons/ho/shariff-logo.png)

Der Code der offiziellen Buttons von Facebook, Google+ und Twitter überträgt von jedem Besucher kennzeichnende Daten an die Social-Media-Netzwerke. Shariff erzeugtze hingegen Share-Buttons, die mit einem Klick teilen, die Anzahl der Likes, Tweets und Plus-Ones für die aktuelle Seite anzeigen und trotzdem keine unnötigen Daten übertragen.

Shariff `(/ˈʃɛɹɪf/)` ist ein Open-Source Projekt von c't und heise online.

Shariff besteht aus zwei Teilen. Der erste Teil ist eine einfache JavaScript-Bibliothek einschließlich Vektor-Icons und CSS zur Formatierung der Knöpfe. Der zweite ist die optionale, server-seitige Komponente (derzeit für PHP, Perl oder NodeJS). Mit dem Shariff-Backend auf dem eigenen Server muss der Browser des Besuchers zur Darstellung der Share-Counts keine Verbindung zu Facebook, Twitter oder Google+ aufbauen. Daten werden erst dann zum Social-Media-Netzwerk übertragen, wenn der Besucher den Inhalt tatsächlich teilen möchte.

## Erste Schritte

1. Das [aktuellste Shariff-Release](https://github.com/heiseonline/shariff/releases/latest) herunterladen
2.  CSS im `<head>` einbinden:
    * `build/shariff.complete.css` enthält alle Abhängigkeiten
    * `build/shariff.min.css` verwenden, wenn [Font Awesome](https://github.com/FortAwesome/Font-Awesome) bereits in Ihrer Seite geladen wird
3. JavaScript unmittelbar vor `</body>` einbinden:
    * `build/shariff.complete.js` enthält alle Abhängigkeiten
    * `build/shariff.min.js` verwenden, wenn [jQuery](https://github.com/jquery/jquery) bereits in der Seite vorhanden ist
4. Beliebig viele `<div class="shariff">` Elemente einfügen
5. Mit den unten beschriebenen `data`-Attributen Aussehen und Funktion konfigurieren

Die Share-Counts in den Buttons benötigen ein [Backend](#backends) auf ihrem Server.

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
| `data-flattr-category` | Kategorie für Flattr-Spende. | `null` |
| `data-flattr-user` | Benutzer, der die Flattr-Spende erhält. | `null` |
| `data-lang`      | Lokalisierung auswählen. Verfügbar: `bg`, `de`, `en`, `es`, `fi`, `hr`, `hu`, `ja`, `ko`, `no`, `pl`, `pt`, `ro`, `ru`, `sk`, `sl`, `sr`, `sv`, `tr`, `zh` | `de` |
| `data-mail-body` | Wenn `data-mail-url` ein `mailto:`-Link ist, wird dieser Wert als Mail-Body verwendet. Der Mail-Body-Text sollte den Platzhalter `{url}` enthalten. Dieser wird durch die zu teilende URL ersetzt. | siehe `data-url` |
| `data-mail-subject` | Wenn `data-mail-url` ein `mailto:`-Link ist, wird dieser Wert als Mail-Betreff verwendet. | siehe `data-title` |
| `data-mail-url`  | Der Link des `mail`-Buttons | `?view=mail` |
| `data-media-url` | Zu teilendes Bild (pinterest) | `null` |
| `data-orientation` | Anordnung der Buttons. Verfügbar: `horizontal`, `vertical` | `horizontal`  |
| `data-referrer-track` | Wenn angegeben, wird dieser String an die geteilte URL angehängt. Mit `null` deaktivieren. | `null` |
| `data-services`   | Liste der Services, die verwendet werden sollen. Für die Verwendung im `data`-Attribut muss die Angabe Entity-enkodiert werden. Die Reihenfolge wird berücksichtigt. Beispiel: `data-services="[&quot;facebook&quot;,&quot;googleplus&quot;]"` <br> Verfügbare Dienste: `twitter`, `facebook`, `googleplus`, `linkedin`, `pinterest`, `xing`, `whatsapp`, `mail`, `info`, `addthis`, `tumblr`, `flattr`, `diaspora`, `reddit`, `stumbleupon`, `threema`, `weibo`, `tencent-weibo`, `qzone`, `print`  | Twitter, Facebook, Google+ |
| `data-theme`       | Farbschema auswählen. Verfügbar: `standard`, `grey` und `white`. | `standard` |
| `data-title`       | Titel der zu teilenden Seite. | Entweder `DC.title`/`DC.creator` oder `<title>` |
| `data-twitter-via` | User von dem der Tweet ursprünglich stammt. | `null` |
| `data-url`         | URL, die geteilt werden soll. | Wenn `data-url` nicht gesetzt ist, wird `link[rel="canonical"]`, `meta[property="og:url"]` oder `location.href` verwendet. |


## Unterstützte Browser

Shariff unterstützt folgende Browser:

- Firefox
- Google Chrome
- Internet Explorer/Edge
- Safari

Die jeweils aktuell letzten und vorletzten Versionen von Firefox, Google Chrome, Internet Explorer/Edge und Safari werden untersützt.

## Unterstützte Services

Shariff unterstützt folgende Social-Sharing-Services:

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

## Backends

Wenn in den Shariff-Buttons die Share-Counts angezeigt werden sollen, wird eines der folgenden Backends benötigt:

* [shariff-backend-node](http://github.com/heiseonline/shariff-backend-node)
* [shariff-backend-perl](http://github.com/heiseonline/shariff-backend-perl)
* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Drittanbieter-Backends:

* [shariff-backend-java](http://github.com/headissue/shariff-backend-java)

Die URL, unter der das Backend erreichbar ist, muss im `data`-Attribut `data-backend-url` angegeben werden. Ein Backend unter der URL `http://example.com/my-shariff-backend/` wird in `data-backend-url` so angegeben: `/my-shariff-backend/`. Den Rest erledigt das Skript.

## Drittanbieter-Integrationen

Bekannte Shariff-Integrationen für Drittanbieter-Systeme:

* [Contao-Integration](https://github.com/hofff/contao-shariff)
* [Drupal-Modul](https://www.drupal.org/project/shariff)
* [Joomla! 3 Shariff-Plugin](https://github.com/joomla-agency/plg_jooag_shariff)
* [Kirby-CMS Shariff-Plugin](https://github.com/SpicyWeb-de/kirby-plugin-shariff)
* [MediaWiki Extension](https://github.com/vonloxley/Shariff-Mediawiki/)
* [Open Monograph Press-Plugin](https://github.com/langsci/shariff)
* [Serendipity Plugin](https://github.com/s9y/additional_plugins/tree/master/serendipity_event_social)
* [SilverStripe-Modul](https://github.com/andrelohmann/silverstripe-shariff)
* [Symfony ShariffBundle](https://github.com/core23/ShariffBundle)
* [TYPO3-Plugin rx_shariff](http://typo3.org/extensions/repository/view/rx_shariff)
* [Wordpress-Plugin shariff-sharing](https://wordpress.org/plugins/shariff-sharing/)
* [WordPress-Plugin Shariff Wrapper](https://wordpress.org/plugins/shariff/)
* [Xenforo [ITM] ctSSB für Xenforo 1.5](https://github.com/McAtze/-ITM-ctShariffSocialButtons)
* [Xenforo [WMTech] Social Share Privacy Plugin](https://wmtech.net/products/wmtech-social-share-privacy.41/)
