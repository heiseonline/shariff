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
    name: 'qzone',
    faPrefix: 'fab',
    faName: 'fa-qq',
    title: {
      bg: 'Сподели в Qzone',
      cs: 'Sdílet na Qzone',
      da: 'Del på Qzone',
      de: 'Bei Qzone teilen',
      en: 'Share on Qzone',
      es: 'Compartir en Qzone',
      fi: 'Jaa Qzoneissä',
      fr: 'Partager sur Qzone',
      hr: 'Podijelite na Qzone',
      hu: 'Megosztás Qzone',
      it: 'Condividi su Qzone',
      ja: 'Qzone上で共有',
      ko: 'Qzone에서 공유하기',
      nl: 'Delen op Qzone',
      no: 'Del på Qzone',
      pl: 'Udostępnij przez Qzone',
      pt: 'Compartilhar no Qzone',
      ro: 'Partajează pe Qzone',
      ru: 'Поделиться на Qzone',
      sk: 'Zdieľať na Qzone',
      sl: 'Deli na Qzone',
      sr: 'Podeli na Qzone-u',
      sv: 'Dela på Qzone',
      tr: "Qzone'ta paylaş",
      zh: '分享至QQ空间',
    },
    shareUrl:
      'https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' +
      url +
      '&title=' +
      title +
      shariff.getReferrerTrack(),
  }
}
