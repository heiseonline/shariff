# Changelog

## v3.2.1, 2019-05-27

- Added translations for French, Italian, Polish, Russian and Dutch to print service. (Judapriest)
- Updated dependencies.

## v3.2.0, 2019-04-01

- Added buffer service. (richard67)
- Updated dependencies.
- Updated Font Awesome to version 5.8.1. (richard67)
- Updated Xing share URL. (richard67)

## v3.1.1, 2019-01-29

- Fixed deployment to npmjs.com.

## v3.1.0, 2019-01-29

- Added Pocket service. (richard67)
- Improved build process. (DanielRuf)
- Replaced third party Java backend in readme. (shred)
- Upgraded dependencies.
- Fixed creator being appended to title even though `data-title` has been set. (ksuess)
- Fixed canonical URL handling. (OliverFriedrich)
- Fixed typo in README. (richard67)

This release removes a service:

- Removed G+ service. (richard67)

## v3.0.1, 2018-04-17

- Added Yellow CMS third party integration. (so-ri)

This release contains changes relevant to security:

- Fixed XSS vulnerability discovered by JoJoAction in twitter service. (liayn)

## v3.0.0, 2018-03-15

- Added smaller share button variants. (richard67)
- Added Flipboard service. (richard67)
- Updated Font Awesome to version 5 (free 1.0.3). (richard67)
- Improved default service list documentation. (richard67)
- Fixed compatibility with Bootstrap 4. (richard67)
- Fixed reddit icon. (richard67)

## v2.1.3, 2018-02-23

- Added czech translations. (mat-hew1)
- Removed G+ counter from documentation and demo. (richard67)
- Fixed handling of `data-mail-subject`. (richard67)
- Fixed crashes occuring if HTML document is missing a valid `<title>` tag. (richard67)
- Fixed typo in documentation. (cedricziel)
- Improved distinguishability of reddit icon. (richard67)
- Improved translations and translation documentation. (richard67)

## v2.1.2, 2018-01-26

- Fixed SEO friendliness by adding `rel="nofollow"` to all button links. (richard67)
- Fixed Telegram service not opening in a popup.

## v2.1.1, 2018-01-03

- Fixed missing `dist` directory.

## v2.1.0, 2018-01-02

- Added VK service. (dennis95stumm)
- Added Telegram service. (dennis95stumm)
- Added display options to info service. (richard67)
- Added documentation for info service. (richard67)
- Improved demo. (richard67)
- Improved security of links with `target="_blank"`. (richard67)
- Removed references to Twitter backend from documentation. (richard67)

## v2.0.4, 2017-11-03

- Fixed deployment to GitHub.

## v2.0.3, 2017-11-03

- Fixed bower `main` entry. ([#259](https://github.com/heiseonline/shariff/issues/259))
- Removed zip files from npm build artifacts.
- Removed deprecated `version` property from `bower.json`.

## v2.0.2, 2017-11-02

- Fixed bower `main` entry. ([#259](https://github.com/heiseonline/shariff/issues/259))
- Updated build workflow in README.md. ([#259](https://github.com/heiseonline/shariff/issues/259))

## v2.0.1, 2017-10-25

- Fixed broken test call.
- Upgraded dependencies.

## v2.0.0, 2017-10-25

- Fixed IE 11 issues. ([#253](https://github.com/heiseonline/shariff/issues/253))

This release contains breaking changes:

- Build artifacts were deleted from the repository. Instead, they get published to the npm registry in the `./dist` folder.

## v1.26.1, 2017-07-28

* Added missing `./build` directory.([#246](https://github.com/heiseonline/shariff/issues/246))

## v1.26.0, 2017-07-28

* Added `npm run dev` command.
* Added tests for the DOM library. (glaszig)
* Added list of supported sharing services to READMEs.
* Added `{url}` placeholder to `data-mail-body` option. (stephankellermayr)
* Fixed Shariff to use `data-title` in favor of `meta[name=DC.title]` if present. ([#143](https://github.com/heiseonline/shariff/issues/143))
* Fixed Twitter popup opening twice when a tweet is embedded on a page. (Nebel54)
* Improved service initialization code. ([#188](https://github.com/heiseonline/shariff/issues/188))
* Made DOM element creation consistent. ([#234](https://github.com/heiseonline/shariff/pull/234))

## 1.25.2 2017-06-13

* Restored the jQuery dependency for the `min.js` version. (liayn)
* Added Kirby third party integration. (AndiLeni)
* Added support for DOM-ready functions. (glaszig)
* Updated dependencies. (liayn)
* Fixed shariff initializing before DOM is ready. (theseer)
* Fixed handling of images in pinterest service. (7oot)
* Fixed MediaWiki third party integration link. (AndiLeni)
* Fixed Internet Explorer 11 support. (glaszig, heppstux, liayn)

## 1.25.1 2017-04-21

* RELEASE reverted!
* Replaced jQuery with vanilla js. (glaszig)
* Removed obsolete build artifact.

## 1.25.0 2017-04-21

* RELEASE reverted!

## 1.24.1 2016-11-17

* Fixed mail body handling on some mobile devices.
* Improved readability of README. (aranaur)
* Changed dependency on jQuery to allow all 2.x.x versions. (MoritzKn)
* Added MediaWiki third party integration. (stefahn)

## 1.24.0 2016-06-29

* Fixed flexbox bug for Safari (yellowled)
* Added Weibo, Tencent-Weibo, Qzone services. (shls)
* Added Serendipity third party integration. (ddeimeke)

## v1.23.2 2016-05-09

* Attached build artifacts to broken 1.23.1 release.

## v1.23.1 2016-05-09

* Updated various third party integrations in README. (McAtze, core23)
* Fixed font path for demo site. (craiq)

## v1.23.0 2016-01-27

* Changed diaspora share url to official one. (Faldrian)
* Clarified browser support in README.
* Made button text more accessible.

## v1.22.0 2016-01-19

* Changed G+ text from "+1" to "share". (dlueth)
* Fixed offset for new G+ fa-icon. (flowdee)

## v1.21.0 2015-11-06

* Added Threema service. (medienverbinder)
* Added StumbleUpon service. (craiq)
* Added Reddit service. (craiq)
* Changed `rel=popup` to `data-rel`.

## v1.20.0 2015-10-22

* Added Diaspora* service. (craiq)
* Added Flattr service to README.

## v1.19.0 2015-10-20

* Added Flattr service. (core23)
* Added twitter option to README-de.

## v1.18.0 2015-09-16

* Added tumblr service. (medienverbinder)

## v1.17.1 2015-09-11

* Fixed github-release not pointing to the release commit.

## v1.17.0 2015-09-11

* Added addThis service. (bozana)
* Added Open Graph Tag fallback for pinterest image. (creatoras)
* Forced Font-Awesome to load via https. (kraftner)
* Fixed shariff not using correct title tag in some cases. (kraftner)

## v1.16.0 2015-07-13

* Made license SPDX compatible.
* Updated `grunt-connect-proxy` dependency. (medienverbinder)

## v1.15.0 2015-06-30

* Fixed pinterest link. (startef)
* Added attributes for screen readers. (startef)

## v1.14.0 2015-06-02

* Added available languages to documentation. (liayn)
* Added list of third-party integrations to documentation. (NeoBlack, joomla-agency)
* Added translations for LinkedIn. (dominikmarks)
* Fixed defaults of `data-services` in README.md. (liayn)
* Fixed LinkedIn `shareUrl` not using TLS. (dasexil)

## v1.13.0 2015-05-12

* Added partial translations for `bg`, `fi`, `hr`, `hu`, `ja`, `ko`, `no`, `pl`, `pt`, `ro`, `ru`, `sk`, `sl`, `sr`, `sv`, `tr`, `zh`. (heppstux)
* Fixed LinkedIn colors. (dmarks2)

## v1.12.0 2015-05-08

* Added linkedin service. (dmarks2)
* Improved mail service to enable customization of subject and body.

## v1.11.0 2015-04-30

* Added pinterest service. (jsor)

## v1.10.1 2015-04-30
* Fixed encoding issue in twitter service with text longer than 120 chars. (wegewerk-mdt)
* Fixed info button width in col <= 3.
* Fixed typo in README.md. (nyze2oo9)

## v1.10.0 2015-04-15
* Added xing service. (osahner)
* Fixed `mailto` links opening in new tabs.
* Updated node dependencies.

## v1.9.3 2015-04-08
* Added missing `shariff.min.css` in release.

## v1.9.2 2015-04-08
* Made sure shariff element does not have any children on initialization.

## v1.9.1 2015-04-08
* Fixed bower integration.

## v1.9.0 2015-04-08
* Added custom title support.
* Added Shariff class to global window object so it can be used without Node.js.
* Updated node dependencies.

## v1.8.0 2015-03-19
* Added data-mail-url feature which enables customization of the mail service button.
* Added language support for da, fr, it and nl. (mikejpr)
* Added responsive layout.
* Fixed bug in backend url detection. (liayn)
* Fixed bug in service popups where popups did not open in IE. (doerler)

## v1.7.3 2015-02-14
* Fixed `shariff-complete.css` to use font-awesome CDN.

## v1.7.1 2015-02-05
* Fixed bug twitter via detection.

## v1.7.0 2015-02-02
* Added support for twitter via.
