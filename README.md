# Shariff-Plus – Social Media Buttons With Privacy [![Build Status](https://travis-ci.org/richard67/shariff-plus.svg?branch=master)](https://travis-ci.org/richard67/shariff-plus)


Shariff-Plus enables website users to share and like their favorite content without compromising their privacy.

It is equal to [Shariff by Heise Medien](https://github.com/heiseonline/shariff) plus extensions like showing the Facebook "Like" button in a dialog, which is not intended to be ever included into Shariff, or other enhancements or corrections which have not been integrated into Shariff (yet).

Facebook, Google+ and Twitter supply official code snippets for their buttons which quietly siphon personal data from all page visitors. Shariff-Plus enables visitors to see how popular your page is on Facebook and share your content with others without needless data leaks.

**Shariff** `(/ˈʃɛɹɪf/)` is an open-source, low-maintenance, high-privacy solution maintained by German computer magazine c't and heise online.

Shariff consists of two parts: a simple JavaScript client library and an optional server-side component. The latter fetches the number of likes, tweets and plus-ones. Share buttons and share counts work without a connection between your visitors' browsers and *social networks* (unless they decide to share, of course).

**Shariff-Plus** is maintained by [me](https://github.com/richard67). It can be used instead of the Shariff JavaScript client library and optionally uses the original Shariff's server-side component.

## Getting Started

1. Download the [latest release](https://github.com/richard67/shariff-plus/releases/latest)
2. Include CSS in `<head>`:
    * `shariff.complete.css` contains all dependencies
    * if [Font Awesome](https://github.com/FortAwesome/Font-Awesome) is already included in your site, use `shariff.min.css`
3. Include JavaScript right before `</body>`:
    * `shariff.complete.js` contains all dependencies
    * if [jQuery](https://github.com/jquery/jquery) is already included in your site, use `shariff.min.js`
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

## Running demo site

After downloading Shariff-Plus, install its dependencies by running `npm install`.

```sh
$ git clone https://github.com/richard67/shariff-plus.git
$ cd shariff-plus
$ npm install
$ npm run dev
```

## Options (data attributes)

| Attribute        | Description | Default |
|------------------|-------------|---------|
| `data-backend-url` | The path to your Shariff backend, see below. Settings the value to `null` disables the backend feature. No counts will occur.  | `null` |
| `data-dialogs-media-url` | The path to css or js for special dialogs like e.g. the one of the `facebooklike` service. | Path to directory where Shariff is installed. |
| `data-facebook-count-btn` | The button(s) which shall show the counter from backend if both services `facebook` and `facebooklike` are used. Values: `like`, `share`, `both`. | `both` |
| `data-facebooklike-options` | An entity-encoded JSON string containing an object with options for the Facebook "Like" button as provided by the Facebook configurator for that button. Example with default values of Facebook: `data-facebooklike-options="{&quot;width&quot;:450,&quot;layout&quot;:&quot;standard&quot;,&quot;action&quot;:&quot;like&quot;,&quot;size&quot;:&quot;large&quot;,&quot;show_faces&quot;:true,&quot;share&quot;:true,&quot;appId&quot;:&quot;99999&quot;}"` with 99999 = Facebook `app_id`. | See example, with appId = value of the `fb:app_id` meta tag or `null` if not defined. |
| `data-flattr-category` | Category to be used for Flattr. | `null` |
| `data-flattr-user` | User that receives Flattr donation. | `null` |
| `data-info-url` | URL of the info page. | `http://ct.de/-2467514` |
| `data-lang`      | The localisation to use. Available: `bg`, `de`, `en`, `es`, `fi`, `hr`, `hu`, `ja`, `ko`, `no`, `pl`, `pt`, `ro`, `ru`, `sk`, `sl`, `sr`, `sv`, `tr`, `zh` | `de` |
| `data-mail-body` | If a `mailto:` link is used in `data-mail-url`, then this value is used as the mail body. The body text should contain the placeholder `{url}` which will be replaced with the share URL. | see `data-url`  |
| `data-mail-subject` | If a `mailto:` link is used in `data-mail-url`, then this value is used as the mail subject. | see `data-title` |
| `data-mail-url`  | The url target used for the `mail` service button | `?view=mail` |
| `data-media-url` | Media url to be shared (pinterest) | `null` |
| `data-orientation` | `vertical` will stack the buttons vertically. | `horizontal`  |
| `data-referrer-track` | A string that will be appended to the share url. Can be disabled using `null`. | `null` |
| `data-services`   | An entity-encoded JSON string containing an array of service names to be enabled. Example: `data-services="[&quot;facebook&quot;,&quot;googleplus&quot;]"` Available service names: `twitter`, `facebook`, `facebooklike`, `googleplus`, `linkedin`, `pinterest`, `xing`, `whatsapp`, `mail`, `info`, `addthis`, `tumblr`, `flattr`, `diaspora`, `reddit`, `stumbleupon`, `threema`, `weibo`, `tencent-weibo`, `qzone`, `print` | `twitter`, `facebook`, `googleplus`, `info` |
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

Shariff-Plus supports the following Browsers:

- Firefox
- Google Chrome
- Internet Explorer/Edge
- Safari

The current and previous major releases of Firefox, Google Chrome, Internet Explorer/Edge and Safari are supported on a rolling basis.

## Supported services

Shariff-Plus supports the following social sharing services:

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

In addition, the service `facebooklike` provides a button to show the Facebook "Like" button in a dialog.

Finally, the service `Info` provides a button to show an info page about the social sharing buttons.
The URL of this page can be set with an option. Default value: `http://ct.de/-2467514`, i.e. the c't article introducing Shariff. 

## Backends

In order to display share counts with Shariff-Plus, you need one of the following Shariff backends:

* [shariff-backend-node](http://github.com/heiseonline/shariff-backend-node)
* [shariff-backend-perl](http://github.com/heiseonline/shariff-backend-perl)
* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Third-party backends:
* [shariff-backend-java](http://github.com/headissue/shariff-backend-java)

Once you have one of these backends up and running, insert its URL into the `data-backend-url` attribute. For example, if the backend runs under `http://example.com/my-shariff-backend/`, the `data-backend-url` should be `/my-shariff-backend/`. The script will handle the rest.

## Third-party integrations

There are no third-party integrations of Shariff-Plus yet.