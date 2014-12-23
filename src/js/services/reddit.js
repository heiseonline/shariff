'use strict';

module.exports = function(shariff) {
	var name = 'reddit';
    return {
        popup: true,
        shareText: 'reddit',
        name: name,
        title: {
            'de': 'Bei Reddit teilen',
            'en': 'Share on Reddit'
        },
        shareUrl: 'https://reddit.com/submit?title='+ encodeURIComponent(shariff.getShareText(name)) + '&url=' + shariff.getURL() + shariff.getReferrerTrack(name)
    };
};
