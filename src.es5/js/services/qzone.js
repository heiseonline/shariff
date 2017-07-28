'use strict';

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL());

  var title = shariff.getTitle();

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
    name: 'qzone',
    faName: 'fa-qq',
    title: {
      'de': 'Bei Qzone teilen',
      'en': 'Share on Qzone',
      'zh': '分享至QQ空间'
    },
    shareUrl: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url + '&title=' + title + shariff.getReferrerTrack()
  };
};