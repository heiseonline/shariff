'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    return {
        popup: false,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'es': 'compartir',
            'fr': 'partager',
            'it': 'condividi',
            'da': 'del',
            'nl': 'delen'
        },
        name: 'whatsapp',
        faName: 'fa-whatsapp',
        title: {
            'de': 'Bei Whatsapp teilen',
            'en': 'Share on Whatsapp',
            'es': 'Compartir en Whatsapp',
            'fr': 'Partager sur Whatsapp',
            'it': 'Condividi su Whatsapp',
            'da': 'Del på Whatsapp',
            'nl': 'Delen op Whatsapp'
        },
        shareUrl: 'whatsapp://send?text=' + shariff.getShareText() + '%20' + url + shariff.getReferrerTrack()
    };
};
