'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
        shareText: 'tweet',
        name: 'twitter',
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter'
        },
        shareUrl: 'https://twitter.com/intent/tweet?text='+ shariff.getShareText() + '&url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};
