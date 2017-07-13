# Shariff – Give Social Media Buttons Some Privacy [![Build Status](https://travis-ci.org/heiseonline/shariff.svg?branch=master)](https://travis-ci.org/heiseonline/shariff)


Shariff enables website users to share their favorite content without compromising their privacy. [Demo](http://heiseonline.github.io/shariff/)

![Shariff Logo © 2015 Heise Medien](http://www.heise.de/icons/ho/shariff-logo.png)

Facebook, Google+ and Twitter supply official sharing code snippets which quietly siphon personal data from all page visitors. Shariff enables visitors to see how popular your page is on Facebook and share your content with others without needless data leaks.

Shariff `(/ˈʃɛɹɪf/)` is an open-source, low-maintenance, high-privacy solution maintained by German computer magazine c't and heise online.

Shariff consists of two parts: a simple JavaScript client library and an optional server-side component. The latter fetches the number of likes, tweets and plus-ones. Share buttons and share counts work without a connection between your visitors' browsers and *social networks* (unless they decide to share, of course).

## Getting Started

1. Download the [latest release](https://github.com/heiseonline/shariff/releases/latest)
2. Include CSS in `<head>`:
    * `build/shariff.complete.css` contains all dependencies
    * if [Font Awesome](https://github.com/FortAwesome/Font-Awesome) is already included in your site, use `build/shariff.min.css` 
3. Include JavaScript right before `</body>`:
    * `build/shariff.complete.js` contains all dependencies
    * if [jQuery](https://github.com/jquery/jquery) is already included in your site, use `build/shariff.min.js`
4. Insert one or more `<div class="shariff">` elements.
5. Customize the look using data-* attributes.

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
$ grunt demo
```

Make sure you have installed the [Grunt CLI](http://gruntjs.com/getting-started#installing-the-cli). Run `grunt demo` to start a local web server which displays several button configurations. The demo page uses [`shariff-backend-node`](https://github.com/heiseonline/shariff-backend-node) to request and display share counts.

## Options (data attributes)

| Attribute        | Description | Default |
|------------------|-------------|---------|
| `data-backend-url` | The path to your Shariff backend, see below. Settings the value to `null` disables the backend feature. No counts will occur.  | `null` |
| `data-flattr-category` | Category to be used for Flattr. | `null` |
| `data-flattr-user` | User that receives Flattr donation. | `null` |
| `data-lang`      | The localisation to use. Available: `bg`, `de`, `en`, `es`, `fi`, `hr`, `hu`, `ja`, `ko`, `no`, `pl`, `pt`, `ro`, `ru`, `sk`, `sl`, `sr`, `sv`, `tr`, `zh` | `de` |
| `data-mail-body` | If a `mailto:` link is used in `data-mail-url`, then this value is used as the mail body. The body text should contain the placeholder `{url}` which will be replaced with the share URL. | see `data-url`  |
| `data-mail-subject` | If a `mailto:` link is used in `data-mail-url`, then this value is used as the mail subject. | see `data-title` |
| `data-mail-url`  | The url target used for the `mail` service button | `?view=mail` |
| `data-media-url` | Media url to be shared (pinterest) | `null` |
| `data-orientation` | `vertical` will stack the buttons vertically. | `horizontal`  |
| `data-referrer-track` | A string that will be appended to the share url. Can be disabled using `null`. | `null` |
| `data-services`   | An entity-encoded JSON string containing an array of service names to be enabled. Example: `data-services="[&quot;facebook&quot;,&quot;googleplus&quot;]"` Available service names: `twitter`, `facebook`, `googleplus`, `linkedin`, `pinterest`, `xing`, `whatsapp`, `mail`, `info`, `addthis`, `tumblr`, `flattr`, `diaspora`, `reddit`, `stumbleupon`, `threema`, `weibo`, `tencent-weibo`, `qzone`, `print` | `twitter`, `facebook`, `googleplus`, `info` |
| `data-theme`       | We include 3 color schemes, `standard`, `grey` and `white`. | `standard` |
| `data-title`       | Title to be used as share text in Twitter/Whatsapp | page's `DC.title`/`DC.creator` or `<title>` |
| `data-twitter-via` | Screen name of the user to attribute the Tweet to | `null` |
| `data-url`         | The canonical URL of the page to check. | page's canonical URL or `og:url` or current URL |


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

In order to display share counts with Shariff, you need one of the following backends:

* [shariff-backend-node](http://github.com/heiseonline/shariff-backend-node)
* [shariff-backend-perl](http://github.com/heiseonline/shariff-backend-perl)
* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Third-party backends:
* [shariff-backend-java](http://github.com/headissue/shariff-backend-java)

Once you have one of these backends up and running, insert its URL into the `data-backend-url` attribute. For example, if the backend runs under `http://example.com/my-shariff-backend/`, the `data-backend-url` should be `/my-shariff-backend/`. The script will handle the rest.

## Third-party integrations

This is a list of integrations for third-party systems:

* [Contao integration](https://github.com/hofff/contao-shariff)
* [Drupal module](https://www.drupal.org/project/shariff)
* [Joomla! 3 Shariff Plugin](https://github.com/joomla-agency/plg_jooag_shariff)
* [Kirby-CMS Shariff-Plugin](https://github.com/SpicyWeb-de/kirby-plugin-shariff)
* [MediaWiki Extension](https://github.com/vonloxley/Shariff-Mediawiki/)
* [Open Monograph Press Plugin](https://github.com/langsci/shariff)
* [Serendipity](https://github.com/s9y/additional_plugins/tree/master/serendipity_event_social)
* [SilverStripe Module](https://github.com/andrelohmann/silverstripe-shariff)
* [Symfony ShariffBundle](https://github.com/core23/ShariffBundle)
* [TYPO3 Plugin rx_shariff](http://typo3.org/extensions/repository/view/rx_shariff)
* [Wordpress Plugin shariff-sharing](https://wordpress.org/plugins/shariff-sharing/)
* [WordPress Plugin Shariff Wrapper](https://wordpress.org/plugins/shariff/)
* [Xenforo [ITM] ctSSB for Xenforo 1.5](https://github.com/McAtze/-ITM-ctShariffSocialButtons)
* [Xenforo [WMTech] Social Share Privacy Plugin](https://wmtech.net/products/wmtech-social-share-privacy.41/)
