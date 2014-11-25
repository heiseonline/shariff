'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
        shareText: 'Info',
        name: 'info',
        title: {
            'de': 'weitere Informationen',
            'en': 'more information'
        },
        shareUrl: shariff.getInfoUrl()
    };
};
