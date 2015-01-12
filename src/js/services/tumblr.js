'use strict';

module.exports = function(shariff) {
    var name = 'tumblr';
	return {
        popup: true,
        shareText: 'Tumblr!',
        name: name,
        title: {
            'de': 'Bei Tumblr teilen',
            'en': 'Share on Tumblr'
        },
        shareUrl: 'https://www.tumblr.com/share/link?name='+ encodeURIComponent(shariff.getShareText(name)) + '&description=' + encodeURIComponent(shariff.getShareDescription(name)) + '&url=' + encodeURIComponent(shariff.getURL()) + shariff.getReferrerTrack(name)
    };
};
