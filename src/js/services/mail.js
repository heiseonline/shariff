'use strict';

var url = require('url');

module.exports = function(shariff) {
    return {
        popup: false,
        shareText: 'mail',
        name: 'mail',
        title: {
            'de': 'Per E-Mail versenden',
            'en': 'Send by email'
        },
        shareUrl: 'mailto:?subject=' + shariff.getShareText() + '&body=' + shariff.getShareText() + encodeURIComponent('\n' + shariff.getURL())
	};
};
