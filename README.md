# Shariff

## Getting Started

Download the latest release of Shariff and include `build/shariff.min.css` and `build/shariff.min.js` into your page. After doing that, insert one or more `<div class="shariff">` elements containing data attributes described below.

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

| Attribute        | Description |
|------------------|-------------|
| `data-backend-url` | The path to your Shariff backend, see below. Settings the value to `null` disables the backend feature. No counts will occur. Default: `null`    |
| `data-orientation` | `vertical` will stack the buttons vertically. Default: `horizontal`  |
| `data-services`   | An entity encode JSON string containing an array of service names to be enabled. Example: `data-services="[&quot;facebook&quot;,&quot;googleplus&quot;]"` Available service names: `twitter`, `facebook`, `googleplus`, `mail`, `info` |
| `data-theme`       | We have two color schemes, `standard` or `grey`. Deafult: `standard` |
| `data-url`         | The canonical URL of the page to check. Default: page's canonical URL or current URL |

## Backends

In order to display share counts with Shariff, you need one of the following backends:

* [shariff-backend-node](http://github.com/heiseonline/shariff-backend-node)
* [shariff-backend-perl](http://github.com/heiseonline/shariff-backend-perl)
* [shariff-backend-php](http://github.com/heiseonline/shariff-backend-php)

Once you have one of these backends up and running, put its URL into the `data-backend-url` attribute. For example, if the backend runs under `http://example.com/my-shariff-backend/`, `data-backend-url` should be `/my-shariff-backend/`. The script will do the rest. 
