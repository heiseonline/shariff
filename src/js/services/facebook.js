'use strict';

module.exports = function(shariff) {
    var name = 'facebook';
    return {
        popup: true,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'es': 'compartir'
        },
        name: name,
        title: {
            'de': 'Bei Facebook teilen',
            'en': 'Share on Facebook',
            'es': 'Compartir en Facebook'
        },
        shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shariff.getURL()) + shariff.getReferrerTrack(name)
    };
};
