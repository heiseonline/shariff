'use strict';

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL());

  return {
    popup: true,
    shareText: {
      'bg': 'cподеляне',
      'da': 'del',
      'de': 'teilen',
      'en': 'share',
      'es': 'compartir',
      'fi': 'Jaa',
      'fr': 'partager',
      'hr': 'podijelite',
      'hu': 'megosztás',
      'it': 'condividi',
      'ja': '共有',
      'ko': '공유하기',
      'nl': 'delen',
      'no': 'del',
      'pl': 'udostępnij',
      'pt': 'compartilhar',
      'ro': 'partajează',
      'ru': 'поделиться',
      'sk': 'zdieľať',
      'sl': 'deli',
      'sr': 'podeli',
      'sv': 'dela',
      'tr': 'paylaş',
      'zh': '分享'
    },
    name: 'tumblr',
    faName: 'fa-tumblr',
    title: {
      'bg': 'Сподели в tumblr',
      'da': 'Del på tumblr',
      'de': 'Bei tumblr teilen',
      'en': 'Share on tumblr',
      'es': 'Compartir en tumblr',
      'fi': 'Jaa tumblrissä',
      'fr': 'Partager sur tumblr',
      'hr': 'Podijelite na tumblr',
      'hu': 'Megosztás tumblren',
      'it': 'Condividi su tumblr',
      'ja': 'tumblr上で共有',
      'ko': 'tumblr에서 공유하기',
      'nl': 'Delen op tumblr',
      'no': 'Del på tumblr',
      'pl': 'Udostępnij przez tumblr',
      'pt': 'Compartilhar no tumblr',
      'ro': 'Partajează pe tumblr',
      'ru': 'Поделиться на tumblr',
      'sk': 'Zdieľať na tumblr',
      'sl': 'Deli na tumblr',
      'sr': 'Podeli na tumblr-u',
      'sv': 'Dela på tumblr',
      'tr': 'tumblr\'ta paylaş',
      'zh': '在tumblr上分享'
    },
    shareUrl: 'http://tumblr.com/widgets/share/tool?canonicalUrl=' + url + shariff.getReferrerTrack()
  };
};