'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
        shareText: 'mail',
        name: 'mail',
        title: {
            'de': 'Per E-Mail versenden',
            'en': 'Send by email'
        },
        shareUrl: shariff.getURL() + '?view=mail'
    };
};
