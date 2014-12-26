'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
        shareText: '+1',
        name: 'googleplus',
        title: {
            'de': 'Bei Google+ teilen',
            'en': 'Share on Google+',
            'es': 'Compartir en Google+'
        },
        shareUrl: 'https://plus.google.com/share?url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};

