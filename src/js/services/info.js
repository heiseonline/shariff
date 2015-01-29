'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
        shareText: 'Info',
        name: 'info',
        faName: 'fa-info',
        title: {
            'de': 'weitere Informationen',
            'en': 'more information',
            'es': 'Más informaciones'
        },
        shareUrl: shariff.getInfoUrl()
    };
};
