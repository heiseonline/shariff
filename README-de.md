# Shariff – Schützen und teilen [![Build Status](https://travis-ci.org/heiseonline/shariff.svg?branch=master)](https://travis-ci.org/heiseonline/shariff)

Um die Privatsphäre ihrer Besucher gegenüber den Social-Media-Netzwerken zu bewahren, können Webseiten-Betreiber mit dem Projekt Shariff eigene Teilen-Buttons integrieren.  [Demo](http://heiseonline.github.io/shariff/)

![Shariff Logo © 2015 Heise Medien](http://www.heise.de/icons/ho/shariff-logo.png)

Der Code der offiziellen Buttons beispielsweise von Facebook überträgt von jedem Besucher kennzeichnende Daten an die Social-Media-Netzwerke. Shariff erzeugt hingegen Share-Buttons, die mit einem Klick teilen, die Anzahl der Likes und Plus-Ones für die aktuelle Seite anzeigen und trotzdem keine unnötigen Daten übertragen.

Shariff `(/ˈʃɛɹɪf/)` ist ein Open-Source Projekt von c't und heise online.

Shariff besteht aus zwei Teilen. Der erste Teil ist eine einfache JavaScript-Bibliothek einschließlich Vektor-Icons und CSS zur Formatierung der Knöpfe. Der zweite ist die optionale, server-seitige Komponente (derzeit für PHP, Perl oder NodeJS). Mit dem Shariff-Backend auf dem eigenen Server muss der Browser des Besuchers zur Darstellung der Share-Counts keine Verbindung zu den Social-Media-Netzwerken aufbauen. Daten werden erst dann übertragen, wenn der Besucher den Inhalt tatsächlich teilen möchte.

## Erste Schritte

1. Das [aktuellste Shariff-Release](https://github.com/heiseonline/shariff/releases/latest) herunterladen
2. Alle im Release enthaltenen Dateien hochladen
3.  CSS im `<head>` einbinden:
    * `shariff.complete.css` verlässt sich auf die im Release enthaltenen Abhängigkeiten
    * `shariff.min.css` verwenden, wenn [Font Awesome](https://github.com/FortAwesome/Font-Awesome) bereits in Ihrer Seite geladen wird
4. JavaScript unmittelbar vor `</body>` einbinden:
    * `shariff.complete.js` verlässt sich auf die im Release enthaltenen Abhängigkeiten
    * `shariff.min.js` verwenden, wenn [jQuery](https://github.com/jquery/jquery) bereits in der Seite vorhanden ist
5. Beliebig viele `<div class="shariff">` Elemente einfügen
6. Mit den unten beschriebenen `data`-Attributen Aussehen und Funktion konfigurieren

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

Nach dem Download von Shariff mit `npm install` die Abhängigkeiten installieren. Anschließend kann mit `npm run dev` ein lokaler Webserver gestartet werden, der eine Seite mit verschiedenen Konfigurations-Beispielen bereitstellt:

```sh
$ git clone https://github.com/heiseonline/shariff.git
$ cd shariff
$ npm install
$ npm run dev
```

## Optionen (data-Attribute)

| Attribut         | Beschreibung | Default |
|------------------|--------------|---------|
| `data-backend-url` | Pfad zum Shariff-[Backend](#backends). Der Wert `null` deaktiviert die Anzeige von Share-Counts.  | `null` |
| `data-button-style` | Wie die Buttons angezeigt werden. Werte: `standard`, `icon`, `icon-count`. Bei `icon` wird nur das Icon angezeigt, bei `icon-count` werden Icon und Zähler und bei `standard` Icon, Text und Zähler abhängig von der Display-Größe angezeigt. | `standard` |
| `data-flattr-category` | Kategorie für Flattr-Spende. | `null` |
| `data-flattr-user` | Benutzer, der die Flattr-Spende erhält. | `null` |
| `data-info-url` | URL der Infoseite. | `http://ct.de/-2467514` |
| `data-info-display` | Wie die Infoseite angezeigt wird. Werte: `blank`, `popup`, `self`. | `blank` |
| `data-lang`      | Lokalisierung auswählen. Verfügbar: `bg`, `cs`, `da`, `de`, `en`, `es`, `fi`, `fr`, `hr`, `hu`, `it`, `ja`, `ko`, `nl`, `no`, `pl`, `pt`, `ro`, `ru`, `sk`, `sl`, `sr`, `sv`, `tr`, `zh` | `de` |
| `data-mail-body` | Wenn `data-mail-url` ein `mailto:`-Link ist, wird dieser Wert als Mail-Body verwendet. Der Mail-Body-Text sollte den Platzhalter `{url}` enthalten. Dieser wird durch die zu teilende URL ersetzt. | siehe `data-url` |
| `data-mail-subject` | Wenn `data-mail-url` ein `mailto:`-Link ist, wird dieser Wert als Mail-Betreff verwendet. | siehe `data-title` |
| `data-mail-url`  | Der Link des `mail`-Buttons | `?view=mail` |
| `data-media-url` | Zu teilendes Bild (pinterest) | `null` |
| `data-orientation` | Anordnung der Buttons. Verfügbar: `horizontal`, `vertical` | `horizontal`  |
| `data-referrer-track` | Wenn angegeben, wird dieser String an die geteilte URL angehängt. Mit `null` deaktivieren. | `null` |
| `data-services`   | Liste der Services, die verwendet werden sollen. Für die Verwendung im `data`-Attribut muss die Angabe Entity-enkodiert werden. Die Reihenfolge wird berücksichtigt. Beispiel: `data-services="[&quot;facebook&quot;,&quot;twitter&quot;]"` <br> Verfügbare Dienste: `twitter`, `facebook`, `linkedin`, `pinterest`, `xing`, `whatsapp`, `mail`, `info`, `addthis`, `tumblr`, `flattr`, `diaspora`, `reddit`, `stumbleupon`, `threema`, `weibo`, `tencent-weibo`, `qzone`, `print`, `telegram`, `vk`, `flipboard`, `pocket`, `buffer`  | `twitter`, `facebook`, `info` |
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

Shariff unterstützt folgende Browser:

- Firefox
- Google Chrome
- Internet Explorer/Edge
- Safari

Die jeweils aktuell letzten und vorletzten Versionen von Firefox, Google Chrome, Internet Explorer/Edge und Safari werden untersützt.

## Unterstützte Services

Shariff unterstützt folgende Social-Sharing-Services:

- AddThis
- buffer
- diaspora*
- facebook
- Flattr
- Flipboard
- LinkedIn
- Mail
- Pinterest
- Pocket
- Print
- Qzone
- reddit
- StumbleUpon
- Telegram
- Tencent Weibo
- Threema
- Tumblr
- Twitter
- VK
- Weibo
- WhatsApp
- XING

Zusätzlich stellt der Service `Info` einen Button zur Anzeige einer Infoseite über die Social-Sharing-Buttons bereit.
Die URL dieser Seite kann mit einer Option festgelegt werden. Standardwert: `http://ct.de/-2467514`, d.h. der c't-Artikel zur Einführung von Shariff.

## Backends

Wenn in den Shariff-Buttons die Share-Counts angezeigt werden sollen, wird das folgende Backend benötigt:

* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Drittanbieter-Backends:

* [shariff-backend-java](https://github.com/shred/shariff-backend-java)

Die URL, unter der das Backend erreichbar ist, muss im `data`-Attribut `data-backend-url` angegeben werden. Ein Backend unter der URL `http://example.com/my-shariff-backend/` wird in `data-backend-url` so angegeben: `/my-shariff-backend/`. Den Rest erledigt das Skript.

## Drittanbieter-Integrationen

Bekannte Shariff-Integrationen für Drittanbieter-Systeme:

* [Contao-Integration](https://github.com/hofff/contao-shariff)
* [Drupal-Modul](https://www.drupal.org/project/shariff)
* [Joomla! 3 Shariff-Plugin](https://github.com/joomla-agency/plg_jooag_shariff)
* [Kirby-CMS Shariff-Plugin](https://github.com/SpicyWeb-de/kirby-plugin-shariff)
* [MediaWiki Extension](https://github.com/vonloxley/Shariff-Mediawiki/)
* [Open Monograph Press-Plugin](https://github.com/langsci/shariff)
* [Pagekit Extension](https://pagekit.com/marketplace/package/spqr/shariff)
* [Serendipity Plugin](https://github.com/s9y/additional_plugins/tree/master/serendipity_event_social)
* [SilverStripe-Modul](https://github.com/andrelohmann/silverstripe-shariff)
* [Symfony ShariffBundle](https://github.com/core23/ShariffBundle)
* [TYPO3-Plugin rx_shariff](http://typo3.org/extensions/repository/view/rx_shariff)
* [Wordpress-Plugin shariff-sharing](https://wordpress.org/plugins/shariff-sharing/)
* [WordPress-Plugin Shariff Wrapper](https://wordpress.org/plugins/shariff/)
* [Xenforo [ITM] ctSSB für Xenforo 1.5](https://github.com/McAtze/-ITM-ctShariffSocialButtons)
* [Xenforo [WMTech] Social Share Privacy Plugin](https://wmtech.net/products/wmtech-social-share-privacy.41/)
* [Magento 2 Shariff Social Share](https://www.jajuma.de/de/jajuma-develop/extensions/shariff-social-share-buttons-extension-fuer-magento-2)
