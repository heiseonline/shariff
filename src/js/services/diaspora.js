'use strict';

var url = require('url');

module.exports = function(shariff) {
    var shareUrl = url.parse('https://sharetodiaspora.github.io/', true);
    shareUrl.query.url = shariff.getURL();
    shareUrl.query.title = shariff.getTitle() || shariff.getMeta('DC.title');
	shareUrl.protocol = 'https';
    delete shareUrl.search;

    return {
        popup: true,
        shareText: {
            'de': 'teilen',
            'en': 'share',
        },
        name: 'diaspora',
        faName: 'fa-times-circle',
        title: {
            'de': 'Bei Diaspora teilen',
            'en': 'Share on Diaspora',
        },
        shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
    };
};
