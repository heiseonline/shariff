# Shariff – Give Social Media Buttons Some Privacy [![Build Status](https://travis-ci.org/heiseonline/shariff.svg?branch=master)](https://travis-ci.org/heiseonline/shariff)


Shariff enables website users to share their favorite content without compromising their privacy. [Demo](http://heiseonline.github.io/shariff/)

![Shariff Logo © 2015 Heise Medien](http://www.heise.de/icons/ho/shariff-logo.png)

Some social service providers like e.g. Facebook supply official sharing code snippets which quietly siphon personal data from all page visitors. Shariff enables visitors to see how popular your page is on Facebook and share your content with others without needless data leaks.

Shariff `(/ˈʃɛɹɪf/)` is an open-source, low-maintenance, high-privacy solution maintained by German computer magazine c't and heise online.

Shariff consists of two parts: a simple JavaScript client library and an optional server-side component. The latter fetches the number of likes or shares. Share buttons and share counts work without a connection between your visitors' browsers and *social networks* (unless they decide to share, of course).

## Getting Started

1. Download the [latest release](https://github.com/heiseonline/shariff/releases/latest)
2. Upload all files included in the release
3. Include CSS in `<head>`:
    * `shariff.complete.css` uses the dependencies included in the release files
    * if [Font Awesome](https://github.com/FortAwesome/Font-Awesome) is already included in your site, use `build/shariff.min.css`
4. Include JavaScript right before `</body>`:
    * `shariff.complete.js` uses the dependencies included in the release files
    * if [jQuery](https://github.com/jquery/jquery) is already included in your site, use `build/shariff.min.js`
5. Insert one or more `<div class="shariff">` elements.
6. Customize the look using data-* attributes.

To enable the counters in the buttons, see section [Backends](#backends).

Usage example:

```html
<!DOCTYPE html>
<html>
<head>
    <link href="/path/to/shariff.min.css" rel="stylesheet">
</head>
<body>
    <h1>My article</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

    <h2>Minimum buttons:</h2>
    <div class="shariff"></div>

    <h2>More advanced buttons:</h2>
    <div class="shariff" data-backend-url="/path/to/backend" data-url="http://www.example.com/my-article.html" data-theme="grey" data-orientation="vertical"></div>

    <!-- immediately before </body> -->
    <script src="/path/to/shariff.min.js"></script>
</body>
</html>
```

## Getting Started using `npm`

You can also use Shariff's node package by installing it via `npm`:

```sh
$ cd my-project
$ npm install shariff --save
```

Edit your JS main script, include Shariff and initialize it in one or more containers:

```js
// my-app.js
var Shariff = require('shariff');
var $ = require('jquery');
var buttonsContainer = $('.some-selector');
new Shariff(buttonsContainer, {
    orientation: 'vertical'
});
```

## Running demo site

After downloading Shariff, install its dependencies by running `npm install`.

```sh
$ git clone https://github.com/heiseonline/shariff.git
$ cd shariff
$ npm install
$ npm run dev
```

## Options (data attributes)

| Attribute        | Description | Default |
|------------------|-------------|---------|
| `data-backend-url` | The path to your Shariff backend, see below. Setting the value to `null` disables the backend feature. No counts will occur.  | `null` |
| `data-button-style` | How to display the buttons. Values: `standard`, `icon`, `icon-count`. With `icon` only the icon is shown, with `icon-count` icon and counter and with `standard` icon, text and counter are shown, depending on the display size.  | `standard` |
| `data-flattr-category` | Category to be used for Flattr. | `null` |
| `data-flattr-user` | User that receives Flattr donation. | `null` |
| `data-info-url` | URL of the info page. | `http://ct.de/-2467514` |
| `data-info-display` | How to display the info page. Values: `blank`, `popup`, `self`. | `blank` |
| `data-lang`      | The localisation to use. Available: `bg`, `cs`, `da`, `de`, `en`, `es`, `fi`, `fr`, `hr`, `hu`, `it`, `ja`, `ko`, `nl`, `no`, `pl`, `pt`, `ro`, `ru`, `sk`, `sl`, `sr`, `sv`, `tr`, `zh` | `de` |
| `data-mail-body` | If a `mailto:` link is used in `data-mail-url`, then this value is used as the mail body. The body text should contain the placeholder `{url}` which will be replaced with the share URL. | see `data-url`  |
| `data-mail-subject` | If a `mailto:` link is used in `data-mail-url`, then this value is used as the mail subject. | see `data-title` |
| `data-mail-url`  | The url target used for the `mail` service button | `?view=mail` |
| `data-media-url` | Media url to be shared (pinterest) | `null` |
| `data-orientation` | `vertical` will stack the buttons vertically. | `horizontal`  |
| `data-referrer-track` | A string that will be appended to the share url. Can be disabled using `null`. | `null` |
| `data-services`   | An entity-encoded JSON string containing an array of service names to be enabled. Example: `data-services="[&quot;facebook&quot;,&quot;twitter&quot;]"` Available service names: `twitter`, `facebook`, `linkedin`, `pinterest`, `xing`, `whatsapp`, `mail`, `info`, `addthis`, `tumblr`, `flattr`, `diaspora`, `reddit`, `stumbleupon`, `threema`, `weibo`, `tencent-weibo`, `qzone`, `print`, `telegram`, `vk`, `flipboard`, `pocket`, `buffer` | `twitter`, `facebook`, `info` |
| `data-theme`       | We include 3 color schemes, `standard`, `grey` and `white`. | `standard` |
| `data-title`       | Title to be used as share text in Twitter/Whatsapp | page's `DC.title`/`DC.creator` or `<title>` |
| `data-twitter-via` | Screen name of the user to attribute the Tweet to | `null` |
| `data-url`         | The canonical URL of the page to check. | page's canonical URL or `og:url` or current URL |

## Constructor arguments

All data attributes above are also available as constructor arguments in JavaScript. However, the
leading `data-` is omitted and the name is in camelCase instead of kebab-case:

```js
var buttonsContainer = $('.some-selector');
new Shariff(buttonsContainer, {
    backendUrl: '/my/backend/url',
    orientation: 'vertical',
    mailUrl: 'mailto:me@example.com',
});
```

## Supported browsers

Shariff supports the following Browsers:

- Firefox
- Google Chrome
- Internet Explorer/Edge
- Safari

The current and previous major releases of Firefox, Google Chrome, Internet Explorer/Edge and Safari are supported on a rolling basis.

## Supported services

Shariff supports the following social sharing services:

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

In addition, the service `Info` provides a button to show an info page about the social sharing buttons.
The URL of this page can be set with an option. Default value: `http://ct.de/-2467514`, i.e. the c't article introducing Shariff.

## Backends

In order to display share counts with Shariff, you need the following backend:

* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Third-party backends:

* [shariff-backend-java](https://github.com/shred/shariff-backend-java)

Once you have one of these backends up and running, insert its URL into the `data-backend-url` attribute. For example, if the backend runs under `http://example.com/my-shariff-backend/`, the `data-backend-url` should be `/my-shariff-backend/`. The script will handle the rest.

## Third-party integrations

This is a list of integrations for third-party systems:

* [Contao integration](https://github.com/hofff/contao-shariff)
* [Drupal module](https://www.drupal.org/project/shariff)
* [Joomla! 3 Shariff Plugin](https://github.com/joomla-agency/plg_jooag_shariff)
* [Kirby-CMS Shariff-Plugin](https://github.com/SpicyWeb-de/kirby-plugin-shariff)
* [MediaWiki Extension](https://github.com/vonloxley/Shariff-Mediawiki/)
* [Open Monograph Press Plugin](https://github.com/langsci/shariff)
* [Pagekit Extension](https://pagekit.com/marketplace/package/spqr/shariff)
* [Serendipity](https://github.com/s9y/additional_plugins/tree/master/serendipity_event_social)
* [SilverStripe Module](https://github.com/andrelohmann/silverstripe-shariff)
* [Symfony ShariffBundle](https://github.com/core23/ShariffBundle)
* [TYPO3 Plugin rx_shariff](http://typo3.org/extensions/repository/view/rx_shariff)
* [Wordpress Plugin shariff-sharing](https://wordpress.org/plugins/shariff-sharing/)
* [WordPress Plugin Shariff Wrapper](https://wordpress.org/plugins/shariff/)
* [Xenforo [ITM] ctSSB for Xenforo 1.5](https://github.com/McAtze/-ITM-ctShariffSocialButtons)
* [Xenforo [WMTech] Social Share Privacy Plugin](https://wmtech.net/products/wmtech-social-share-privacy.41/)
* [Magento 2 Shariff Social Share](https://www.jajuma.de/en/jajuma-develop/extensions/shariff-social-share-buttons-extension-for-magento-2)
