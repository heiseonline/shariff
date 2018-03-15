'use strict'

var url = require('url')

module.exports = function(shariff) {
  var shareUrl = url.parse('https://share.diasporafoundation.org/', true)
  shareUrl.query.url = shariff.getURL()
  shareUrl.query.title = shariff.getTitle()
  shareUrl.protocol = 'https'
  delete shareUrl.search

  return {
    popup: true,
    shareText: {
      'bg': 'cподеляне',
      'cs': 'sdílet',
      'da': 'del',
      'de': 'teilen',
      'en': 'share',
      'es': 'compartir',
      'fi': 'Jaa',
      'fr': 'partager',
      'hr': 'podijelite',
      'hu': 'megosztás',
      'it': 'condividi',
      'ja': '共有',
      'ko': '공유하기',
      'nl': 'delen',
      'no': 'del',
      'pl': 'udostępnij',
      'pt': 'compartilhar',
      'ro': 'partajează',
      'ru': 'поделиться',
      'sk': 'zdieľať',
      'sl': 'deli',
      'sr': 'podeli',
      'sv': 'dela',
      'tr': 'paylaş',
      'zh': '分享'
    },
    name: 'diaspora',
    faPrefix: 'fas',
    faName: 'fa-asterisk',
    title: {
      'bg': 'Сподели в Diaspora',
      'cs': 'Sdílet na Diaspora',
      'da': 'Del på Diaspora',
      'de': 'Bei Diaspora teilen',
      'en': 'Share on Diaspora',
      'es': 'Compartir en Diaspora',
      'fi': 'Jaa Diasporaissä',
      'fr': 'Partager sur Diaspora',
      'hr': 'Podijelite na Diaspora',
      'hu': 'Megosztás Diaspora',
      'it': 'Condividi su Diaspora',
      'ja': 'Diaspora上で共有',
      'ko': 'Diaspora에서 공유하기',
      'nl': 'Delen op Diaspora',
      'no': 'Del på Diaspora',
      'pl': 'Udostępnij przez Diaspora',
      'pt': 'Compartilhar no Diaspora',
      'ro': 'Partajează pe Diaspora',
      'ru': 'Поделиться на Diaspora',
      'sk': 'Zdieľať na Diaspora',
      'sl': 'Deli na Diaspora',
      'sr': 'Podeli na Diaspora-u',
      'sv': 'Dela på Diaspora',
      'tr': 'Diaspora\'ta paylaş',
      'zh': '分享至Diaspora'
    },
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
  }
}
