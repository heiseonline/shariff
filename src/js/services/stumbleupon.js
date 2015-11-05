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
        },
        name: 'stumbleupon',
        faName: 'fa-stumbleupon',
        title: {
            'de': 'Bei Stumbleupon teilen',
            'en': 'Share on Stumbleupon',
        },
        shareUrl: 'https://www.stumbleupon.com/submit?url=' + url + title + shariff.getReferrerTrack()
    };
};
