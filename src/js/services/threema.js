'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    popup: false,
    shareText: {
      en: 'Threema',
    },
    name: 'threema',
    faPrefix: 'fas',
    faName: 'fa-lock',
    title: {
      bg: 'Сподели в Threema',
      cs: 'Sdílet na Threema',
      da: 'Del på Threema',
      de: 'Bei Threema teilen',
      en: 'Share on Threema',
      es: 'Compartir en Threema',
      fi: 'Jaa Threemaissä',
      fr: 'Partager sur Threema',
      hr: 'Podijelite na Threema',
      hu: 'Megosztás Threemaen',
      it: 'Condividi su Threema',
      ja: 'Threema上で共有',
      ko: 'Threema에서 공유하기',
      nl: 'Delen op Threema',
      no: 'Del på Threema',
      pl: 'Udostępnij przez Threema',
      pt: 'Compartilhar no Threema',
      ro: 'Partajează pe Threema',
      ru: 'Поделиться на Threema',
      sk: 'Zdieľať na Threema',
      sl: 'Deli na Threema',
      sr: 'Podeli na Threema-u',
      sv: 'Dela på Threema',
      tr: "Threema'ta paylaş",
      zh: '在Threema上分享',
    },
    shareUrl:
      'threema://compose?text=' +
      encodeURIComponent(title) +
      '%20' +
      url +
      shariff.getReferrerTrack(),
  }
}
