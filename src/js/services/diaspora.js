'use strict'

var url = require('url')

module.exports = function (shariff) {
  var shareUrl = url.parse('https://share.diasporafoundation.org/', true)
  shareUrl.query.url = shariff.getURL()
  shareUrl.query.title = shariff.getTitle()
  shareUrl.protocol = 'https'
  delete shareUrl.search

  return {
    popup: true,
    shareText: {
      en: 'diaspora*',
    },
    name: 'diaspora',
    faPrefix: 'fas',
    faName: 'fa-asterisk',
    title: {
      bg: 'Сподели в diaspora*',
      cs: 'Sdílet na diaspora*',
      da: 'Del på diaspora*',
      de: 'Bei diaspora* teilen',
      en: 'Share on diaspora*',
      es: 'Compartir en diaspora*',
      fi: 'Jaa Diasporaissä',
      fr: 'Partager sur diaspora*',
      hr: 'Podijelite na diaspora*',
      hu: 'Megosztás diaspora*',
      it: 'Condividi su diaspora*',
      ja: 'diaspora*上で共有',
      ko: 'diaspora*에서 공유하기',
      nl: 'Delen op diaspora*',
      no: 'Del på diaspora*',
      pl: 'Udostępnij przez diaspora*',
      pt: 'Compartilhar no diaspora*',
      ro: 'Partajează pe diaspora*',
      ru: 'Поделиться на diaspora*',
      sk: 'Zdieľať na diaspora*',
      sl: 'Deli na diaspora*',
      sr: 'Podeli na diaspora*-u',
      sv: 'Dela på diaspora*',
      tr: "diaspora*'ta paylaş",
      zh: '分享至diaspora*',
    },
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack(),
  }
}
