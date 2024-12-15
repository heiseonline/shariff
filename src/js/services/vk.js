'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  return {
    popup: true,
    shareText: {
      en: 'VK',
    },
    name: 'vk',
    faPrefix: 'fab',
    faName: 'fa-vk',
    title: {
      bg: 'Сподели във VK',
      cs: 'Sdílet na VKu',
      da: 'Del på VK',
      de: 'Bei VK teilen',
      en: 'Share on VK',
      es: 'Compartir en VK',
      fi: 'Jaa VKissa',
      fr: 'Partager sur VK',
      hr: 'Podijelite na VKu',
      hu: 'Megosztás VKon',
      it: 'Condividi su VK',
      ja: 'フェイスブック上で共有',
      ko: '페이스북에서 공유하기',
      nl: 'Delen op VK',
      no: 'Del på VK',
      pl: 'Udostępnij na VKu',
      pt: 'Compartilhar no VK',
      ro: 'Partajează pe VK',
      ru: 'Поделиться на ВКонтакте',
      sk: 'Zdieľať na VKu',
      sl: 'Deli na VKu',
      sr: 'Podeli na VK-u',
      sv: 'Dela på VK',
      tr: "VK'ta paylaş",
      zh: '在VK上分享',
    },
    shareUrl:
      'https://vk.com/share.php?url=' + url + shariff.getReferrerTrack(),
  }
}
