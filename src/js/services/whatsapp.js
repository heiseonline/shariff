'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    popup: true,
    shareText: {
      en: 'WhatsApp',
    },
    name: 'whatsapp',
    faPrefix: 'fab',
    faName: 'fa-whatsapp',
    title: {
      bg: 'Сподели в WhatsApp',
      cs: 'Sdílet na Whatsappu',
      da: 'Del på WhatsApp',
      de: 'Bei WhatsApp teilen',
      en: 'Share on WhatsApp',
      es: 'Compartir en WhatsApp',
      fi: 'Jaa WhatsAppissä',
      fr: 'Partager sur WhatsApp',
      hr: 'Podijelite na WhatsApp',
      hu: 'Megosztás WhatsAppen',
      it: 'Condividi su WhatsApp',
      ja: 'Whatsapp上で共有',
      ko: 'Whatsapp에서 공유하기',
      nl: 'Delen op WhatsApp',
      no: 'Del på WhatsApp',
      pl: 'Udostępnij przez WhatsApp',
      pt: 'Compartilhar no WhatsApp',
      ro: 'Partajează pe WhatsApp',
      ru: 'Поделиться на WhatsApp',
      sk: 'Zdieľať na WhatsApp',
      sl: 'Deli na WhatsApp',
      sr: 'Podeli na WhatsApp-u',
      sv: 'Dela på WhatsApp',
      tr: "WhatsApp'ta paylaş",
      zh: '在WhatsApp上分享',
    },
    shareUrl:
      'https://api.whatsapp.com/send?text=' +
      encodeURIComponent(title) +
      '%20' +
      url +
      shariff.getReferrerTrack(),
  }
}
