'use strict';

var url = require('url');

module.exports = function(shariff) {
    var name = 'mail';
    return {
        popup: false,
        shareText: 'E-Mail',
        name: name,
        title: {
            'de': 'Per E-Mail versenden',
            'en': 'Send by email',
            'es': 'Enviar por email'
        },
        shareUrl: 'mailto:?subject=' + encodeURIComponent(shariff.getShareText(name)) + '&body=' + encodeURIComponent(shariff.getURL() + shariff.getReferrerTrack(name) + '\n' + shariff.getShareText(name) + '\n' + shariff.getShareDescription(name))
	};
};
