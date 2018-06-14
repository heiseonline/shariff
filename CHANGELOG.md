# Changelog

## Unreleased

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Improved build process ([heiseonline#326](https://github.com/heiseonline/shariff/pull/326)).
- Twitter text: append creator only if data-title not set ([heiseonline#328](https://github.com/heiseonline/shariff/pull/328)).
- Replaced third party Java backend in readme ([heiseonline#332](https://github.com/heiseonline/shariff/pull/332)).
- Upgraded dependencies.

## v2.0.2, 2018-04-17

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Fix installation instructions.
- Fixed XSS vulnerability discovered by JoJoAction in twitter service ([heiseonline#319](https://github.com/heiseonline/shariff/pull/319)).
- Update package-lock.json to match dependencies.

## v2.0.1, 2018-03-15

Fixed demo/index.html

## v2.0.0, 2018-03-15

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Updated Font Awesome to version 5 (free 1.0.3) ([heiseonline#302](https://github.com/heiseonline/shariff/pull/302)).
- Added Flipboard service ([heiseonline#303](https://github.com/heiseonline/shariff/pull/303)).
- Fixed compatibility with Bootstrap 4 ([heiseonline#304](https://github.com/heiseonline/shariff/pull/304)).
- Fixed reddit icon ([heiseonline#305](https://github.com/heiseonline/shariff/pull/305)).
- Add new option data-button-style to enable small buttons ([heiseonline#309](https://github.com/heiseonline/shariff/pull/309)).
- Improved default service list documentation ([heiseonline#310](https://github.com/heiseonline/shariff/pull/310)).

## v1.0.9, 2018-02-23

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Fixed crashes occuring if HTML document is missing a valid `<title>` tag ([heiseonline#295](https://github.com/heiseonline/shariff/pull/295)).
- Improved translations and translation documentation ([heiseonline#296](https://github.com/heiseonline/shariff/pull/296)).
- Fixed typo in documentation ([heiseonline#299](https://github.com/heiseonline/shariff/pull/299)).

This version 1.0.9 of Shariff-Plus is equal to Shariff 2.1.3 plus the `facebooklike` service.

## v1.0.8, 2018-02-17

- Remove GooglePlus counter from demo and docs ([#16](https://github.com/richard67/shariff-plus/pull/16), see also [heiseonline#286](https://github.com/heiseonline/shariff/pull/286)).
- Show differences between Shariff-Plus and Shariff in documents ([#17](https://github.com/richard67/shariff-plus/pull/17)).
- Add facebooklike to the default services, change default info url to German version so it fits to the language default, and let default button for Facebook counter be the facebooklike button ([#18](https://github.com/richard67/shariff-plus/pull/18)).

Fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff):

- Added czech translations ([heiseonline#287](https://github.com/heiseonline/shariff/pull/287)).
- Remove node backend from readme ([heiseonline/shariff@96f45f2](https://github.com/heiseonline/shariff/commit/96f45f2df2dddec3fac3a9e9a240c60efe698df2)).
- Remove perl backend from readme ([heiseonline/shariff@7a8bc9a](https://github.com/heiseonline/shariff/commit/7a8bc9a7205f3f915d9356888b63a65c4a5eace2)).
- Fixed handling of `data-mail-subject` ([heiseonline#291](https://github.com/heiseonline/shariff/pull/291)).
- Improved distinguishability of reddit icon ([heiseonline#293](https://github.com/heiseonline/shariff/pull/293)).

This version 1.0.8 of Shariff-Plus is equal to Shariff 2.1.2 plus the `facebooklike` service plus the changes fetched from [heiseonline/shariff](https://github.com/heiseonline/shariff) mentioned above, which will be included in the next Shariff release.

## v1.0.7, 2018-01-14

- Open telegram in a popup ([heiseonline/shariff@1555a72](https://github.com/heiseonline/shariff/commit/1555a72ced1a0362f203f0c2eb3fe8f071b76c14)).
- Add option data-facebooklike-css ([#14](https://github.com/richard67/shariff-plus/pull/14)).
- Add rel="nofollow" to all sharing buttons' links ([#15](https://github.com/richard67/shariff-plus/pull/15), see also [heiseonline#283](https://github.com/heiseonline/shariff/pull/283)).

This version 1.0.7 of Shariff-Plus is equal to Shariff 2.1.2 plus the `facebooklike` service.

## v1.0.6, 2018-01-03

- Use Serbian language for facebooklike "Close" button if Shariff-Plus language is Serbian ([#11](https://github.com/richard67/shariff-plus/pull/11)).
- Remove locale for Facebook "like" button ([#12](https://github.com/richard67/shariff-plus/pull/12)).
- Remove case insensivity from check of the data-info-display option ([#13](https://github.com/richard67/shariff-plus/pull/13)).
- Fetched from Shariff 2.1.0 and 2.1.1: Add VK and Telegram services ([heiseonline#279](https://github.com/heiseonline/shariff/pull/279)).

All other changes from Shariff 2.1.0 and 2.1.1 have been implemented in Shariff-Plus in a previous version.

So this version of Shariff-Plus is equal to Shariff 2.1.1 plus the `facebooklike` service.

## v1.0.5, 2017-12-27

- Correct counter display for facebooklike in case if facebook is not enabled ([#10](https://github.com/richard67/shariff-plus/pull/10)).

## v1.0.4, 2017-12-26

- Remove wrong data-info-url from parameters listing in 3rd example of demo ([#8](https://github.com/richard67/shariff-plus/pull/8)).
- Add new project homepage for Shariff-Plus to docs and package info and make this the default for the "data-info-url" parameter ([#9](https://github.com/richard67/shariff-plus/pull/9)).

## v1.0.3, 2017-12-24

Fixed npm deployment.

## v1.0.2, 2017-12-24

- Use getTitle() for facebooklike dialog heading ([#6](https://github.com/richard67/shariff-plus/pull/6)).
- Add npm deployment for shariff-plus ([#7](https://github.com/richard67/shariff-plus/pull/7)).

## v1.0.1, 2017-12-22

- Remove twitter backend from docs and demo ([heiseonline#276](https://github.com/heiseonline/shariff/pull/276)).
- Add facebooklike to demo ([#4](https://github.com/richard67/shariff-plus/pull/4)).
- Correct facebooklike size calculations ([#5](https://github.com/richard67/shariff-plus/pull/5)).
- Add links to the Shariff-Plus demo in documents.

## v1.0.0, 2017-12-21

- New option info display ([#2](https://github.com/richard67/shariff-plus/pull/2)).
- Add rel="noopener noreferrer" if target="_blank" ([#3](https://github.com/richard67/shariff-plus/pull/3)).
- Corrected base name for deployment.

## v1.0.0-rc, 2017-12-21

- Initial version based on Shariff v2.0.4 from 2017-11-03
