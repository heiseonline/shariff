'use strict';

module.exports = function(shariff) {
    var name = 'pinterest';
    return {
        popup: true,
        shareText: 'Pin it!',
        name: name,
        title: {
            'de': 'Bei Pinterest teilen',
            'en': 'Share on Pinterest'
        },
        shareUrl: 'https://pinterest.com/pin/create/button/?media=' + (encodeURIComponent(shariff.getImageUrl(name))||'undefined') + '&description=' + encodeURIComponent(shariff.getShareText(name)) + '&url=' + encodeURIComponent(shariff.getURL() + shariff.getReferrerTrack(name))
    };
};
