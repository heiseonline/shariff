'use strict'

// abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
var abbreviateText = function (text, length) {
  if (length <= 0) {
    return ''
  }

  var div = document.createElement('div')
  var node = document.createTextNode(text)
  div.appendChild(node)
  var abbreviated = div.textContent
  if (abbreviated.length <= length) {
    return text
  }

  var lastWhitespaceIndex = abbreviated
    .substring(0, length - 1)
    .lastIndexOf(' ')
  abbreviated = abbreviated.substring(0, lastWhitespaceIndex) + '\u2026'

  return abbreviated
}

module.exports = function (shariff) {
  var title = shariff.getTitle()
  var url = shariff.getURL()
  // From Bluesky documentation (Decembe 2024):
  // The post length limit on Bluesky is 300 characters.
  var text = abbreviateText(title, 299 - url.length);
  if (text.length > 0) {
    text += ' ' + url;
  } else {
    text = url;
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
    name: 'bluesky',
    faPrefix: 'fab fa-brands',
    faName: 'fa-bluesky',
    title: {
      bg: 'Сподели в Bluesky',
      cs: 'Sdílet na Bluesky',
      da: 'Del på Bluesky',
      de: 'Auf Bluesky teilen',
      en: 'Share on Bluesky',
      es: 'Compartir en Bluesky',
      fi: 'Jaa Blueskyssä',
      fr: 'Partager sur Bluesky',
      hr: 'Podijeli na Blueskyju',
      hu: 'Megosztás a Bluesky-n',
      it: 'Condividi su Bluesky',
      ja: 'Blueskyでシェアする',
      ko: '블루스카이에 공유하기',
      nl: 'Delen op Bluesky',
      no: 'Del på Bluesky',
      pl: 'Udostępnij na Bluesky',
      pt: 'Compartilhar no Bluesky',
      ro: 'Partajează pe Bluesky',
      ru: 'Поделиться на Bluesky',
      sk: 'Zdieľať na Bluesky',
      sl: 'Deli na Blueskyju',
      sr: 'Podeli na Bluskaju',
      sv: 'Dela på Bluesky',
      tr: "Bluesky'de paylaşın",
      zh: '在 Bluesky 上分享',
    },
    shareUrl:
      'https://bsky.app/intent/compose?text=' +
      encodeURIComponent(text) +
      shariff.getReferrerTrack(),
  }
}
