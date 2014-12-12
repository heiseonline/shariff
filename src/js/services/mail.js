'use strict';

var url = require('url');

module.exports = function(shariff) {

    var shareUrl = url.parse(shariff.getURL(), true);
    shareUrl.query.view = "mail";
    delete shareUrl.search;

    return {
        popup: false,
        shareText: 'mail',
        name: 'mail',
        title: {
            'de': 'Per E-Mail versenden',
            'en': 'Send by email'
        },
        shareUrl: url.format(shareUrl)
    };
};
