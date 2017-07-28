'use strict';

var url = require('url');

module.exports = function (shariff) {
  var shareUrl = url.parse('https://share.diasporafoundation.org/', true);
  shareUrl.query.url = shariff.getURL();
  shareUrl.query.title = shariff.getTitle();
  shareUrl.protocol = 'https';
  delete shareUrl.search;

  return {
    popup: true,
    shareText: {
      'de': 'teilen',
      'en': 'share',
      'zh': '分享'
    },
    name: 'diaspora',
    faName: 'fa-asterisk',
    title: {
      'de': 'Bei Diaspora teilen',
      'en': 'Share on Diaspora',
      'zh': '分享至Diaspora'
    },
    shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
  };
};