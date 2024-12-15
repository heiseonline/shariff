'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())
  return {
    popup: true,
    shareText: {
      en: 'Buffer',
    },
    name: 'buffer',
    faPrefix: 'fab',
    faName: 'fa-buffer',
    title: {
      bg: 'Сподели в Buffer',
      cs: 'Sdílet na Buffer',
      da: 'Del på Buffer',
      de: 'Bei Buffer teilen',
      en: 'Plan on Buffer',
      es: 'Compartir en Buffer',
      fi: 'Jaa bufferissä',
      fr: 'Planifier sur Buffer',
      hr: 'Podijelite na Buffer',
      hu: 'Megosztás bufferen',
      it: 'Condividi su Buffer',
      ja: 'Buffer上で共有',
      ko: 'Buffer에서 공유하기',
      nl: 'Delen op Buffer',
      no: 'Del på Buffer',
      pl: 'Udostępnij przez Buffer',
      pt: 'Compartilhar no Buffer',
      ro: 'Partajează pe Buffer',
      ru: 'Поделиться на Buffer',
      sk: 'Zdieľať na Buffer',
      sl: 'Deli na Buffer',
      sr: 'Podeli na Buffer',
      sv: 'Dela på Buffer',
      tr: "Buffer'ta paylaş",
      zh: '在Buffer上分享',
    },
    shareUrl:
      'https://buffer.com/add?text=' +
      title +
      '&url=' +
      url +
      shariff.getReferrerTrack(),
  }
}
