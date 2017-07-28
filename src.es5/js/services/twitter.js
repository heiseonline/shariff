'use strict';

var url = require('url');

// abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
var abbreviateText = function abbreviateText(text, length) {
  var div = document.createElement('div');
  div.innerHTML = text;
  var abbreviated = div.textContent;
  if (abbreviated.length <= length) {
    return text;
  }

  var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ');
  abbreviated = abbreviated.substring(0, lastWhitespaceIndex) + '\u2026';

  return abbreviated;
};

module.exports = function (shariff) {
  var shareUrl = url.parse('https://twitter.com/intent/tweet', true);

  var title = shariff.getTitle();

  // 120 is the max character count left after twitters automatic url shortening with t.co
  shareUrl.query.text = abbreviateText(title, 120);
  shareUrl.query.url = shariff.getURL();
  if (shariff.options.twitterVia !== null) {
    shareUrl.query.via = shariff.options.twitterVia;
  }
  delete shareUrl.search;

  return {
    popup: true,
    shareText: {
      'en': 'tweet',
      'zh': '分享'
    },
    name: 'twitter',
    faName: 'fa-twitter',
    title: {
      'bg': 'Сподели в Twitter',
      'da': 'Del på Twitter',
      'de': 'Bei Twitter teilen',
      'en': 'Share on Twitter',
      'es': 'Compartir en Twitter',
      'fi': 'Jaa Twitterissä',
      'fr': 'Partager sur Twitter',
      'hr': 'Podijelite na Twitteru',
      'hu': 'Megosztás Twitteren',
      'it': 'Condividi su Twitter',
      'ja': 'ツイッター上で共有',
      'ko': '트위터에서 공유하기',
      'nl': 'Delen op Twitter',
      'no': 'Del på Twitter',
      'pl': 'Udostępnij na Twitterze',
      'pt': 'Compartilhar no Twitter',
      'ro': 'Partajează pe Twitter',
      'ru': 'Поделиться на Twitter',
      'sk': 'Zdieľať na Twitteri',
      'sl': 'Deli na Twitterju',
      'sr': 'Podeli na Twitter-u',
      'sv': 'Dela på Twitter',
      'tr': 'Twitter\'da paylaş',
      'zh': '在Twitter上分享'
    },
    // shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + url
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
  };
};