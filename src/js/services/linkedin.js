'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'es': 'compartir',
            'fr': 'partager',
            'it': 'condividi',
            'da': 'del',
            'nl': 'delen'
        },
        name: 'linkedin',
        faName: 'fa-linkedin',
        title: {
            'de': 'Bei LinkedIn teilen',
            'en': 'Share on LinkedIn',
            'es': 'Compartir en LinkedIn',
            'fr': 'Partager sur LinkedIn',
            'it': 'Condividi su LinkedIn',
            'da': 'Del på LinkedIn',
            'nl': 'Delen op LinkedIn'
        },
        shareUrl: 'http://www.linkedin.com/cws/share?url=' + url + shariff.getReferrerTrack()
    };
};
