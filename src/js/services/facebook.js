'use strict';

module.exports = function(shariff) {
    var fbEncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: {
            'de': 'teilen',
            'en': 'share'
        },
        name: 'facebook',
        shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + fbEncUrl + shariff.getReferrerTrack()
    };
};
