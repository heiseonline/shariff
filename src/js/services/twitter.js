'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: 'tweet',
        name: 'twitter',
        faName: 'fa-twitter',
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter',
            'es': 'Compartir en Twitter'
        },
        shareUrl: 'https://twitter.com/intent/tweet?text='+ url + '&url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};
