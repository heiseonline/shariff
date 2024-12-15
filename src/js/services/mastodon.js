'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())

  return {
    popup: false,
    shareText: {
      en: 'Mastodon',
    },
    name: 'mastodon',
    faPrefix: 'mas',
    faName: 'fa-lock',
    title: {
      bg: 'Сподели в Mastodon',
      cs: 'Sdílet na Mastodon',
      da: 'Del på Mastodon',
      de: 'Im Mastodon teilen',
      en: 'Publish on Mastodon',
      es: 'Compartir en Mastodon',
      fi: 'Jaa Fediverseissä',
      fr: 'Publier sur Mastodon',
      hr: 'Podijelite na Mastodon',
      hu: 'Megosztás Fediverseen',
      it: 'Condividi su Mastodon',
      ja: 'Mastodon上で共有',
      ko: 'Mastodon에서 공유하기',
      nl: 'Delen op Mastodon',
      no: 'Del på Mastodon',
      pl: 'Udostępnij przez Mastodon',
      pt: 'Compartilhar no Mastodon',
      ro: 'Partajează pe Mastodon',
      ru: 'Поделиться на Mastodon',
      sk: 'Zdieľať na Mastodon',
      sl: 'Deli na Mastodon',
      sr: 'Podeli na Mastodon-u',
      sv: 'Dela på Mastodon',
      tr: "Mastodon'ta paylaş",
      zh: '在Mastodon上分享',
    },
    shareUrl: 'web+mastodon://share?text=' + url + shariff.getReferrerTrack(),
  }
}
