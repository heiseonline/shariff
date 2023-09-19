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
    name: 'tencent-weibo',
    faPrefix: 'fab',
    faName: 'fa-tencent-weibo',
    title: {
      bg: 'Сподели в tencent weibo',
      cs: 'Sdílet na tencent weibo',
      da: 'Del på tencent weibo',
      de: 'Bei tencent weibo teilen',
      en: 'Share on tencent weibo',
      es: 'Compartir en tencent weibo',
      fi: 'Jaa tencent weiboissä',
      fr: 'Partager sur tencent weibo',
      hr: 'Podijelite na tencent weibo',
      hu: 'Megosztás tencent weiboen',
      it: 'Condividi su tencent weibo',
      ja: 'Tencent weibo上で共有',
      ko: 'Tencent weibo에서 공유하기',
      nl: 'Delen op tencent weibo',
      no: 'Del på tencent weibo',
      pl: 'Udostępnij przez tencent weibo',
      pt: 'Compartilhar no tencent weibo',
      ro: 'Partajează pe tencent weibo',
      ru: 'Поделиться на tencent weibo',
      sk: 'Zdieľať na tencent weibo',
      sl: 'Deli na tencent weibo',
      sr: 'Podeli na tencent weibo-u',
      sv: 'Dela på tencent weibo',
      tr: "Tencent weibo'ta paylaş",
      zh: '分享至腾讯微博',
    },
    shareUrl:
      'https://v.t.qq.com/share/share.php?url=' +
      url +
      '&title=' +
      title +
      shariff.getReferrerTrack(),
  }
}
