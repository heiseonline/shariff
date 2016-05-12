'use strict';

var url = require('url');

module.exports = function(shariff) {
    var title = shariff.getMeta('DC.title') || shariff.getTitle();
    var creator = shariff.getMeta('DC.creator');
    if (creator.length > 0) {
        title += ' - ' + creator;
    }
    var img = shariff.getOption('mediaUrl');
    if (img && img.length <= 0) {
        img = shariff.getMeta('og:image');
    }

    var shareUrl = url.parse('https://www.pinterest.com/pin/create/link/', true);
    shareUrl.query.url = shariff.getURL();
    shareUrl.query.media = img;
    shareUrl.query.description = title;
    delete shareUrl.search;

    return {
        popup: true,
        shareText: {
			'en': 'pin it'
		},
        name: 'pinterest',
        faName: 'fa-pinterest-p',
        title: {
            'de': 'Bei Pinterest pinnen',
            'en': 'Pin it on Pinterest',
        },
        shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
    };
};
