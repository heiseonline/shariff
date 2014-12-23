'use strict';

module.exports = function(shariff) {
	var name = 'twitter';
    return {
        popup: true,
        shareText: 'tweet',
        name: name,
        title: {
            'de': 'Bei Twitter teilen',
            'en': 'Share on Twitter'
        },
        shareUrl: 'https://twitter.com/intent/tweet?text='+ encodeURIComponent(shariff.abbreviateText(shariff.getShareText(name), 120)) + '&url=' + shariff.getURL() + shariff.getReferrerTrack(name)
    };
};
