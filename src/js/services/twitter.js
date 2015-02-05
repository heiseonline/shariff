'use strict';

var url = require('url');

module.exports = function(shariff) {
    var shareUrl = url.parse('https://twitter.com/intent/tweet', true);

    // TODO FIXME: remove "encodeURIComponent()" from getShareText()
    shareUrl.query.text = decodeURIComponent(shariff.getShareText());
    shareUrl.query.url = shariff.getURL();
    if (shariff.options.twitterVia !== null) {
        shareUrl.query.via = shariff.options.twitterVia;
    }
    delete shareUrl.search;

    return {
        popup: true,
        shareText: 'tweet',
        name: 'twitter',
        faName: 'fa-twitter',
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter',
            'es': 'Compartir en Twitter'
        },
        // shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + url
        shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
    };
};
