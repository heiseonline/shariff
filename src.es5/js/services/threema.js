'use strict';

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL());

  var title = shariff.getTitle();

  return {
    popup: false,
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
    name: 'threema',
    faName: 'fa-lock',
    title: {
      'bg': 'Сподели в Threema',
      'da': 'Del på Threema',
      'de': 'Bei Threema teilen',
      'en': 'Share on Threema',
      'es': 'Compartir en Threema',
      'fi': 'Jaa Threemaissä',
      'fr': 'Partager sur Threema',
      'hr': 'Podijelite na Threema',
      'hu': 'Megosztás Threemaen',
      'it': 'Condividi su Threema',
      'ja': 'Threema上で共有',
      'ko': 'Threema에서 공유하기',
      'nl': 'Delen op Threema',
      'no': 'Del på Threema',
      'pl': 'Udostępnij przez Threema',
      'pt': 'Compartilhar no Threema',
      'ro': 'Partajează pe Threema',
      'ru': 'Поделиться на Threema',
      'sk': 'Zdieľať na Threema',
      'sl': 'Deli na Threema',
      'sr': 'Podeli na Threema-u',
      'sv': 'Dela på Threema',
      'tr': 'Threema\'ta paylaş',
      'zh': '在Threema上分享'
    },
    shareUrl: 'threema://compose?text=' + encodeURIComponent(title) + '%20' + url + shariff.getReferrerTrack()
  };
};