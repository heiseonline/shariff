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
    name: 'tencent-weibo',
    faName: 'fa-tencent-weibo',
    title: {
      'de': 'Bei tencent weibo teilen',
      'en': 'Share on tencent weibo',
      'zh': '分享至腾讯微博'
    },
    shareUrl: 'http://v.t.qq.com/share/share.php?url=' + url + '&title=' + title + shariff.getReferrerTrack()
  };
};