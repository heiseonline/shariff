# Shariff – Give Social Media Buttons Some Privacy

Shariff enables website users to share their favorite content without compromising their privacy.

![Shariff Logo © 2014 Heise Zeitschriften Verlag](http://www.heise.de/icons/ho/shariff-logo.png)

Facebook, Google+ and Twitter supply official sharing code snippets which quietly siphon personal data from all page visitors. Shariff enables visitors to see how popular your page is on Facebook and share your content with others without needless data leaks.

Shariff `(/ˈʃɛɹɪf/)` is an open-source, low-maintenance, high-privacy solution maintained by German computer magazine c't and heise online.

Shariff consists of two parts: a simple JavaScript client library and an optional server-side component. The latter fetches the number of likes, tweets and plus-ones. Share buttons and share counts work without a connection between your visitors' browsers and *social networks* (unless they decide to share, of course).

## Getting Started

1. Download the latest release of Shariff.
2. Include `build/shariff.min.css` and `build/shariff.min.js` or `build/shariff.complete.js` (includes jQuery) in your page.
3. Insert one or more `<div class="shariff">` elements.
4. Customize the look using data-* attributes.

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
| `data-lang`      | The localisation to use. Available: `de`, `en`, `es` | `de` |
| `data-orientation` | `vertical` will stack the buttons vertically. | `horizontal`  |
| `data-referrer-track` | A string that will be appended to the share url. Can be disabled using `null`. | `null` |
| `data-services`  | An entity-encoded JSON string containing an array of service names to be enabled. Example: `data-services="[&quot;facebook&quot;,&quot;googleplus&quot;]"` Available service names: `twitter`, `facebook`, `googleplus`, `whatsapp`, `tumblr`, `reddit`, `pinterst`, `flattr`, `mail`, `info` | 'facebook', 'googleplus', 'twitter', 'pinterest', 'reddit', 'tumblr', 'mail', 'info' |
| `data-theme`     | We include two color schemes, `standard` or `grey`. | `standard` |
| `data-url`       | The canonical URL of the page to check. | page's canonical URL or `og:url` or current URL |
| `data-title`     | The headline of your content. | `meta[(name|property)="(og:)?title"]` or the title of the current page. |
| `data-description` | The description of your content. | `meta[(name|property)="(og:)?description"]` |
| `data-image`     | The URL of an image you want to share. | `meta[(name|property)="(og:)?image"]` |
| `data-tags`      | Comma separated list of tags of your article. | `meta[property="article:tag"]` |

The options `data-title`, `data-description`, `data-image`, `data-tags` and `data-referrer-track` could be different for each service. Just specify them in the format `data-<option>-<service>`. For example: `data-referrer-track-facebook`

Following options are not available for every service:

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

The Flattr service must be configured with the options `data-flattr-user` and `data-flattr-category`.

## Backends

In order to display share counts with Shariff, you need one of the following backends:

* [shariff-backend-node](http://github.com/heiseonline/shariff-backend-node)
* [shariff-backend-perl](http://github.com/heiseonline/shariff-backend-perl)
* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Third-party backends:

* [shariff-backend-java](http://github.com/headissue/shariff-backend-java)

Once you have one of these backends up and running, insert its URL into the `data-backend-url` attribute. For example, if the backend runs under `http://example.com/my-shariff-backend/`, the `data-backend-url` should be `/my-shariff-backend/`. The script will handle the rest. 
