'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())
  return {
    popup: true,
    shareText: 'Flipboard',
    name: 'flipboard',
    faPrefix: 'fab',
    faName: 'fa-flipboard',
    title: {
      bg: 'Сподели в Flipboard',
      cs: 'Sdílet na Flipboardu',
      da: 'Del på Flipboard',
      de: 'Bei Flipboard teilen',
      en: 'Share on Flipboard',
      es: 'Compartir en Flipboard',
      fi: 'Jaa Flipboardissä',
      fr: 'Partager sur Flipboard',
      hr: 'Podijelite na Flipboardu',
      hu: 'Megosztás Flipboardon',
      it: 'Condividi su Flipboard',
      ja: 'Flipboard上で共有',
      ko: 'Flipboard에서 공유하기',
      nl: 'Delen op Flipboard',
      no: 'Del på Flipboard',
      pl: 'Udostępnij na Flipboardu',
      pt: 'Compartilhar no Flipboard',
      ro: 'Partajează pe Flipboard',
      ru: 'Поделиться на Flipboard',
      sk: 'Zdieľať na Flipboardu',
      sl: 'Deli na Flipboardu',
      sr: 'Podeli na Flipboard-u',
      sv: 'Dela på Flipboard',
      tr: "Flipboard'ta paylaş",
      zh: '在Flipboard上分享',
    },
    shareUrl:
      'https://share.flipboard.com/bookmarklet/popout?v=2&title=' +
      title +
      '&url=' +
      url +
      shariff.getReferrerTrack(),
  }
}
