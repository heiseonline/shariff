'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL()),
        title = encodeURIComponent(shariff.getTitle());
	
	if ( title !== '' ) {
		title = '&title=' + title;
	}
    
    return {
        popup: true,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'zh': '分享',
        },
        name: 'reddit',
        faName: 'fa-reddit',
        title: {
            'de': 'Bei Reddit teilen',
            'en': 'Share on Reddit',
            'zh': '分享至Reddit'
        },
        shareUrl: 'https://reddit.com/submit?url=' + url + title + shariff.getReferrerTrack()
    };
};
