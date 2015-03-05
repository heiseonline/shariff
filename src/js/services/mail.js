'use strict';

var url = require('url');

module.exports = function(shariff) {

    var shareUrl = url.parse(shariff.getURL(), true);
    shareUrl.query.view = 'mail';
    delete shareUrl.search;

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
        shareUrl: url.format(shareUrl)
    };
};
