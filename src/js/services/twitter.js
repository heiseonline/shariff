'use strict';

var url = require('url');
var $ = require('jquery');

// abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
var abbreviateText = function(text, length) {
    var abbreviated = $('<div/>').html(text).text();
    if (abbreviated.length <= length) {
        return text;
    }

    var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ');
    abbreviated = abbreviated.substring(0, lastWhitespaceIndex) + '\u2026';

    return abbreviated;
};

module.exports = function(shariff) {
    var shareUrl = url.parse('https://twitter.com/intent/tweet', true);

    var title = shariff.getMeta('DC.title');
    var creator = shariff.getMeta('DC.creator');

    if (title.length > 0 && creator.length > 0) {
        title += ' - ' + creator;
    } else {
        title = shariff.getTitle();
    }

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
			'en': 'tweet'
		},
        name: 'twitter',
        faName: 'fa-twitter',
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter',
        },
        // shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + url
        shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
    };
};
