'use strict';

module.exports = function(shariff) {
    var name = 'googleplus';
	return {
        popup: true,
        shareText: '+1',
        name: name,
        title: {
            'de': 'Bei Google+ teilen',
            'en': 'Share on Google+'
        },
        shareUrl: 'https://plus.google.com/share?url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};

