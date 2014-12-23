'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
        shareText: 'Tumblr!',
        name: 'tumblr',
        title: {
            'de': 'Bei Tumblr teilen',
            'en': 'Share on Tumblr'
        },
        shareUrl: 'http://www.tumblr.com/share/link?url=' + encodeURIComponent(shariff.getURL()) + '&name='+ shariff.getShareText() + '&description='+ shariff.getShareText() + shariff.getReferrerTrack()
    };
};
