'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  return {
    popup: true,
    shareText: {
      en: 'XING',
    },
    name: 'xing',
    faPrefix: 'fab',
    faName: 'fa-xing',
    title: {
      bg: 'Сподели в XING',
      cs: 'Sdílet na XINGu',
      da: 'Del på XING',
      de: 'Bei XING teilen',
      en: 'Share on XING',
      es: 'Compartir en XING',
      fi: 'Jaa XINGissä',
      fr: 'Partager sur XING',
      hr: 'Podijelite na XING',
      hu: 'Megosztás XINGen',
      it: 'Condividi su XING',
      ja: 'XING上で共有',
      ko: 'XING에서 공유하기',
      nl: 'Delen op XING',
      no: 'Del på XING',
      pl: 'Udostępnij przez XING',
      pt: 'Compartilhar no XING',
      ro: 'Partajează pe XING',
      ru: 'Поделиться на XING',
      sk: 'Zdieľať na XING',
      sl: 'Deli na XING',
      sr: 'Podeli na XING-u',
      sv: 'Dela på XING',
      tr: "XING'ta paylaş",
      zh: '分享至XING',
    },
    shareUrl:
      'https://www.xing.com/spi/shares/new?url=' +
      url +
      shariff.getReferrerTrack(),
  }
}
