'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

  return {
    popup: true,
    shareText: {
      en: 'Weibo',
    },
    name: 'weibo',
    faPrefix: 'fab',
    faName: 'fa-weibo',
    title: {
      bg: 'Сподели в Weibo',
      cs: 'Sdílet na Weibo',
      da: 'Del på Weibo',
      de: 'Bei Weibo teilen',
      en: 'Share on Weibo',
      es: 'Compartir en Weibo',
      fi: 'Jaa weiboissä',
      fr: 'Partager sur Weibo',
      hr: 'Podijelite na Weibo',
      hu: 'Megosztás weiboen',
      it: 'Condividi su Weibo',
      ja: 'Weibo上で共有',
      ko: 'Weibo에서 공유하기',
      nl: 'Delen op Weibo',
      no: 'Del på Weibo',
      pl: 'Udostępnij przez Weibo',
      pt: 'Compartilhar no Weibo',
      ro: 'Partajează pe Weibo',
      ru: 'Поделиться на Weibo',
      sk: 'Zdieľať na Weibo',
      sl: 'Deli na Weibo',
      sr: 'Podeli na weibo-u',
      sv: 'Dela på Weibo',
      tr: "Weibo'ta paylaş",
      zh: '分享至新浪微博',
    },
    shareUrl:
      'https://service.weibo.com/share/share.php?url=' +
      url +
      '&title=' +
      title +
      shariff.getReferrerTrack(),
  }
}
