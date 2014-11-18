'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
        shareText: 'mail',
        name: 'mail',
        title: {
            'de': 'Per Email versenden',
            'en': 'Send by email'
        },
        shareUrl: shariff.getURL() + '?view=mail'
    };
};
