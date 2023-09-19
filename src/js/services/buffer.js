'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())
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
    name: 'buffer',
    faPrefix: 'fab',
    faName: 'fa-buffer',
    title: {
      bg: 'Сподели в buffer',
      cs: 'Sdílet na buffer',
      da: 'Del på buffer',
      de: 'Bei buffer teilen',
      en: 'Share on buffer',
      es: 'Compartir en buffer',
      fi: 'Jaa bufferissä',
      fr: 'Partager sur buffer',
      hr: 'Podijelite na buffer',
      hu: 'Megosztás bufferen',
      it: 'Condividi su buffer',
      ja: 'buffer上で共有',
      ko: 'buffer에서 공유하기',
      nl: 'Delen op buffer',
      no: 'Del på buffer',
      pl: 'Udostępnij przez buffer',
      pt: 'Compartilhar no buffer',
      ro: 'Partajează pe buffer',
      ru: 'Поделиться на buffer',
      sk: 'Zdieľať na buffer',
      sl: 'Deli na buffer',
      sr: 'Podeli na buffer',
      sv: 'Dela på buffer',
      tr: "buffer'ta paylaş",
      zh: '在buffer上分享',
    },
    shareUrl:
      'https://buffer.com/add?text=' +
      title +
      '&url=' +
      url +
      shariff.getReferrerTrack(),
  }
}
