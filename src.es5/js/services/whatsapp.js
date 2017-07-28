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
    name: 'whatsapp',
    faName: 'fa-whatsapp',
    title: {
      'bg': 'Сподели в Whatsapp',
      'da': 'Del på Whatsapp',
      'de': 'Bei Whatsapp teilen',
      'en': 'Share on Whatsapp',
      'es': 'Compartir en Whatsapp',
      'fi': 'Jaa WhatsAppissä',
      'fr': 'Partager sur Whatsapp',
      'hr': 'Podijelite na Whatsapp',
      'hu': 'Megosztás WhatsAppen',
      'it': 'Condividi su Whatsapp',
      'ja': 'Whatsapp上で共有',
      'ko': 'Whatsapp에서 공유하기',
      'nl': 'Delen op Whatsapp',
      'no': 'Del på Whatsapp',
      'pl': 'Udostępnij przez WhatsApp',
      'pt': 'Compartilhar no Whatsapp',
      'ro': 'Partajează pe Whatsapp',
      'ru': 'Поделиться на Whatsapp',
      'sk': 'Zdieľať na Whatsapp',
      'sl': 'Deli na Whatsapp',
      'sr': 'Podeli na WhatsApp-u',
      'sv': 'Dela på Whatsapp',
      'tr': 'Whatsapp\'ta paylaş',
      'zh': '在Whatsapp上分享'
    },
    shareUrl: 'whatsapp://send?text=' + encodeURIComponent(title) + '%20' + url + shariff.getReferrerTrack()
  };
};