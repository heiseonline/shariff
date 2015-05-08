'use strict';

module.exports = function(shariff) {
    var url = shariff.getOption('mailUrl');

    // mailto: link? Add body and subject.
    if (url.indexOf('mailto:') === 0) {
        url += '?subject=' + encodeURIComponent(shariff.getOption('mailSubject'));
        url += '&body=' + encodeURIComponent(shariff.getOption('mailBody'));
    }

    return {
        blank: url.indexOf('http') === 0,
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
        shareUrl: url
    };
};
