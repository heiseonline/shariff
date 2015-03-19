'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
        shareText: 'mail',
        name: 'mail',
        faName: 'fa-envelope',
        title: {
            'de': 'Per E-Mail versenden',
            'en': 'Send by email',
            'es': 'Enviar por email'
        },
        shareUrl: shariff.getOption('mailUrl')
    };
};
