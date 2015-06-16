'use strict';

var url = require('url');

module.exports = function(shariff) {
    var title = shariff.getMeta('DC.title') || shariff.getTitle();
    var creator = shariff.getMeta('DC.creator');
    if (creator.length > 0) {
        title += ' - ' + creator;
    }

    var shareUrl = url.parse('https://www.pinterest.com/pin/create/link/', true);
    shareUrl.query.url = shariff.getURL();
    shareUrl.query.media = shariff.getOption('mediaUrl');
    shareUrl.query.description = title;
    delete shareUrl.search;

    return {
        popup: true,
        shareText: 'pin it',
        name: 'pinterest',
        faName: 'fa-pinterest-p',
        title: {
            'de': 'Bei Pinterest pinnen',
            'en': 'Pin it on Pinterest',
            'es': 'Compartir en Pinterest',
            'fr': 'Partager sur Pinterest',
            'it': 'Condividi su Pinterest',
            'da': 'Del på Pinterest',
            'nl': 'Delen op Pinterest'
        },
        shareUrl: url.format(shareUrl) + shariff.getReferrerTrack()
    };
};
