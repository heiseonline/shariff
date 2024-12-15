'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())

  return {
    popup: true,
    shareText: {
      en: 'Telegram',
    },
    name: 'telegram',
    faPrefix: 'fab',
    faName: 'fa-telegram',
    title: {
      bg: 'Сподели в Telegram',
      cs: 'Sdílet na Telegramu',
      da: 'Del på Telegram',
      de: 'Bei Telegram teilen',
      en: 'Share on Telegram',
      es: 'Compartir en Telegram',
      fi: 'Jaa Telegramissä',
      fr: 'Partager sur Telegram',
      hr: 'Podijelite na Telegram',
      hu: 'Megosztás Telegramen',
      it: 'Condividi su Telegram',
      ja: 'Telegram上で共有',
      ko: 'Telegram에서 공유하기',
      nl: 'Delen op Telegram',
      no: 'Del på Telegram',
      pl: 'Udostępnij przez Telegram',
      pt: 'Compartilhar no Telegram',
      ro: 'Partajează pe Telegram',
      ru: 'Поделиться на Telegram',
      sk: 'Zdieľať na Telegram',
      sl: 'Deli na Telegram',
      sr: 'Podeli na Telegram-u',
      sv: 'Dela på Telegram',
      tr: "Telegram'ta paylaş",
      zh: '在Telegram上分享',
    },
    shareUrl: 'https://t.me/share/url?url=' + url + shariff.getReferrerTrack(),
  }
}
