'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())

  if (title !== '') {
    title = '&title=' + title
  }

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
    name: 'reddit',
    faPrefix: 'fab',
    faName: 'fa-reddit-alien',
    title: {
      bg: 'Сподели в Reddit',
      cs: 'Sdílet na Redditu',
      da: 'Del på Reddit',
      de: 'Bei Reddit teilen',
      en: 'Share on Reddit',
      es: 'Compartir en Reddit',
      fi: 'Jaa Redditissä',
      fr: 'Partager sur Reddit',
      hr: 'Podijelite na Reddit',
      hu: 'Megosztás Redditen',
      it: 'Condividi su Reddit',
      ja: 'Reddit上で共有',
      ko: 'Reddit에서 공유하기',
      nl: 'Delen op Reddit',
      no: 'Del på Reddit',
      pl: 'Udostępnij przez Reddit',
      pt: 'Compartilhar no Reddit',
      ro: 'Partajează pe Reddit',
      ru: 'Поделиться на Reddit',
      sk: 'Zdieľať na Reddit',
      sl: 'Deli na Reddit',
      sr: 'Podeli na Reddit-u',
      sv: 'Dela på Reddit',
      tr: "Reddit'ta paylaş",
      zh: '分享至Reddit',
    },
    shareUrl:
      'https://reddit.com/submit?url=' +
      url +
      title +
      shariff.getReferrerTrack(),
  }
}
