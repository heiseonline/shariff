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
    name: 'facebook',
    faName: 'fa-facebook',
    title: {
      'bg': 'Сподели във Facebook',
      'da': 'Del på Facebook',
      'de': 'Bei Facebook teilen',
      'en': 'Share on Facebook',
      'es': 'Compartir en Facebook',
      'fi': 'Jaa Facebookissa',
      'fr': 'Partager sur Facebook',
      'hr': 'Podijelite na Facebooku',
      'hu': 'Megosztás Facebookon',
      'it': 'Condividi su Facebook',
      'ja': 'フェイスブック上で共有',
      'ko': '페이스북에서 공유하기',
      'nl': 'Delen op Facebook',
      'no': 'Del på Facebook',
      'pl': 'Udostępnij na Facebooku',
      'pt': 'Compartilhar no Facebook',
      'ro': 'Partajează pe Facebook',
      'ru': 'Поделиться на Facebook',
      'sk': 'Zdieľať na Facebooku',
      'sl': 'Deli na Facebooku',
      'sr': 'Podeli na Facebook-u',
      'sv': 'Dela på Facebook',
      'tr': 'Facebook\'ta paylaş',
      'zh': '在Facebook上分享'
    },
    shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + url + shariff.getReferrerTrack()
  };
};