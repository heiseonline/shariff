'use strict';

module.exports = function(shariff) {
    var url = shariff.getOption('rssUrl');

    return {
        blank: true,
        popup: false,
        shareText: 'rss',
        name: 'rss',
        faName: 'fa-rss',
        title: {
            'de': 'Als RSS abonieren',
        },
        shareUrl: url
    };
};
