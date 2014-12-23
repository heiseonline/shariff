'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
        shareText: 'reddit',
        name: 'reddit',
        title: {
            'de': 'Bei Reddit teilen',
            'en': 'Share on Reddit'
        },
        shareUrl: 'http://reddit.com/submit?title='+ shariff.getShareText() + '&url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};
