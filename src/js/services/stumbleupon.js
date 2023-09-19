'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())

  if (title !== '') {
    title = '&title=' + title
  }

  return {
    popup: true,
    shareText: {
      bg: 'cподеляне',
      cs: 'sdílet',
      da: 'del',
      de: 'teilen',
      en: 'share',
      es: 'compartir',
      fi: 'Jaa',
      fr: 'partager',
      hr: 'podijelite',
      hu: 'megosztás',
      it: 'condividi',
      ja: '共有',
      ko: '공유하기',
      nl: 'delen',
      no: 'del',
      pl: 'udostępnij',
      pt: 'compartilhar',
      ro: 'partajează',
      ru: 'поделиться',
      sk: 'zdieľať',
      sl: 'deli',
      sr: 'podeli',
      sv: 'dela',
      tr: 'paylaş',
      zh: '分享',
    },
    name: 'stumbleupon',
    faPrefix: 'fab',
    faName: 'fa-stumbleupon',
    title: {
      bg: 'Сподели в Stumbleupon',
      cs: 'Sdílet na Stumbleuponu',
      da: 'Del på Stumbleupon',
      de: 'Bei Stumbleupon teilen',
      en: 'Share on Stumbleupon',
      es: 'Compartir en Stumbleupon',
      fi: 'Jaa Stumbleuponissä',
      fr: 'Partager sur Stumbleupon',
      hr: 'Podijelite na Stumbleupon',
      hu: 'Megosztás Stumbleupon',
      it: 'Condividi su Stumbleupon',
      ja: 'Stumbleupon上で共有',
      ko: 'Stumbleupon에서 공유하기',
      nl: 'Delen op Stumbleupon',
      no: 'Del på Stumbleupon',
      pl: 'Udostępnij przez Stumbleupon',
      pt: 'Compartilhar no Stumbleupon',
      ro: 'Partajează pe Stumbleupon',
      ru: 'Поделиться на Stumbleupon',
      sk: 'Zdieľať na Stumbleupon',
      sl: 'Deli na Stumbleupon',
      sr: 'Podeli na Stumbleupon-u',
      sv: 'Dela på Stumbleupon',
      tr: "Stumbleupon'ta paylaş",
      zh: '分享至Stumbleupon',
    },
    shareUrl:
      'https://www.stumbleupon.com/submit?url=' +
      url +
      title +
      shariff.getReferrerTrack(),
  }
}
