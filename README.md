# Shariff

Want your website visitors to share your content? Want to show them how popular your page is on Facebook? Don't like the privacy implications of the official code snippets from Twitter, Facebook, and Google+?

Shariff `(/ˈʃɛɹɪf/)` to the rescue!

![Shariff](shariff-logo.png)

Shariff is a simple Javascript client library with an optional server-side component to fetch the number of likes, tweets and plus-ones. Share buttons and share counts without a connection between your visitors' browsers and the *networks* (unless they do share, of course).

## Getting Started

1. Download the latest release of Shariff and include `build/shariff.min.css` and `build/shariff.min.js` in your page.
2. Insert one or more `<div class="shariff">` elements.
3. Customize using data-* attributes.

To enable the counters in the buttons see section [Backends](#backends).

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

Alternatively you can use Shariff's node package by installing it via `npm`:

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

After downloading Shariff install its dependencies by running `npm install`.

```sh
$ git clone https://github.com/heiseonline/shariff.git
$ cd shariff
$ npm install
$ grunt demo 
```

Make sure you installed the [Grunt CLI](http://gruntjs.com/getting-started#installing-the-cli). Run `grunt demo` to start a local web server displaying buttons in several configurations. This demo page uses [`shariff-backend-node`](https://github.com/heiseonline/shariff-backend-node) to request and display share counts.

## Options (data attributes)

| Attribute        | Description | Default |
|------------------|-------------|---------|
| `data-backend-url` | The path to your Shariff backend, see below. Settings the value to `null` disables the backend feature. No counts will occur.  | `null` |
| `data-lang`      | The localisation to use. Available: `de`, `en` | `de` |
| `data-orientation` | `vertical` will stack the buttons vertically. | `horizontal`  |
| `data-referrer-track` | A string that will be appended to the share url. Can be disabled using `null`. | `null` |
| `data-services`   | An entity encoded JSON string containing an array of service names to be enabled. Example: `data-services="[&quot;facebook&quot;,&quot;googleplus&quot;]"` Available service names: `twitter`, `facebook`, `googleplus`, `mail`, `info` | (all enabled) |
| `data-theme`       | We have two color schemes, `standard` or `grey`. | `standard` |
| `data-url`         | The canonical URL of the page to check. | page's canonical URL or current URL |

## Backends

In order to display share counts with Shariff, you need one of the following backends:

* [shariff-backend-node](http://github.com/heiseonline/shariff-backend-node)
* [shariff-backend-perl](http://github.com/heiseonline/shariff-backend-perl)
* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Once you have one of these backends up and running, put its URL into the `data-backend-url` attribute. For example, if the backend runs under `http://example.com/my-shariff-backend/`, `data-backend-url` should be `/my-shariff-backend/`. The script will do the rest. 
