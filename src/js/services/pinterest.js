'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
        shareText: 'Pin it!',
        name: 'pinterest',
        title: {
            'de': 'Bei Pinterest teilen',
            'en': 'Share on Pinterest'
        },
        shareUrl: 'http://pinterest.com/pin/create/button/?media=undefined&description='+ shariff.getShareText() + '&url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};
