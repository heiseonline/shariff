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
            'es': 'Enviar por email',
            'fr': 'Envoyer par courriel',
            'it': 'Inviare via email',
            'da': 'Sende via e-mail',
            'nl': 'Sturen via e-mail '
        },
        shareUrl: shariff.getOption('mailUrl')
    };
};
