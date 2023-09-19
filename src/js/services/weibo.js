'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())

  var title = shariff.getTitle()

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
    name: 'weibo',
    faPrefix: 'fab',
    faName: 'fa-weibo',
    title: {
      bg: 'Сподели в weibo',
      cs: 'Sdílet na weibo',
      da: 'Del på weibo',
      de: 'Bei weibo teilen',
      en: 'Share on weibo',
      es: 'Compartir en weibo',
      fi: 'Jaa weiboissä',
      fr: 'Partager sur weibo',
      hr: 'Podijelite na weibo',
      hu: 'Megosztás weiboen',
      it: 'Condividi su weibo',
      ja: 'Weibo上で共有',
      ko: 'Weibo에서 공유하기',
      nl: 'Delen op weibo',
      no: 'Del på weibo',
      pl: 'Udostępnij przez weibo',
      pt: 'Compartilhar no weibo',
      ro: 'Partajează pe weibo',
      ru: 'Поделиться на weibo',
      sk: 'Zdieľať na weibo',
      sl: 'Deli na weibo',
      sr: 'Podeli na weibo-u',
      sv: 'Dela på weibo',
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
