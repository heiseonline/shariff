'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())

  return {
    popup: false,
    shareText: {
      'de': 'teilen',
      'en': 'share',
      'ru': 'поделиться',
    },
    name: 'telegram',
    faName: 'fa-telegram',
    title: {
      'de': 'Bei Telegram teilen',
      'en': 'Share on Telegram',
      'ru': 'Поделиться на Telegram'
    },
    shareUrl: 'https://t.me/share/url?url='+ url + shariff.getReferrerTrack()
  }
}
