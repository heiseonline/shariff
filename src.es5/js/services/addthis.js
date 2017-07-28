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
    name: 'addthis',
    faName: 'fa-plus',
    title: {
      'bg': 'Сподели в AddThis',
      'da': 'Del på AddThis',
      'de': 'Bei AddThis teilen',
      'en': 'Share on AddThis',
      'es': 'Compartir en AddThis',
      'fi': 'Jaa AddThisissä',
      'fr': 'Partager sur AddThis',
      'hr': 'Podijelite na AddThis',
      'hu': 'Megosztás AddThisen',
      'it': 'Condividi su AddThis',
      'ja': 'AddThis上で共有',
      'ko': 'AddThis에서 공유하기',
      'nl': 'Delen op AddThis',
      'no': 'Del på AddThis',
      'pl': 'Udostępnij przez AddThis',
      'pt': 'Compartilhar no AddThis',
      'ro': 'Partajează pe AddThis',
      'ru': 'Поделиться на AddThis',
      'sk': 'Zdieľať na AddThis',
      'sl': 'Deli na AddThis',
      'sr': 'Podeli na AddThis',
      'sv': 'Dela på AddThis',
      'tr': 'AddThis\'ta paylaş',
      'zh': '在AddThis上分享'
    },
    shareUrl: 'http://api.addthis.com/oexchange/0.8/offer?url=' + url + shariff.getReferrerTrack()
  };
};