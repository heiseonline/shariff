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
            'zh': '分享'
        },
        name: 'stumbleupon',
        faName: 'fa-stumbleupon',
        title: {
            'de': 'Bei Stumbleupon teilen',
            'en': 'Share on Stumbleupon',
            'zh': '分享至Stumbleupon'
        },
        shareUrl: 'https://www.stumbleupon.com/submit?url=' + url + title + shariff.getReferrerTrack(),
        updateUrl: function(){
          return 'https://www.stumbleupon.com/submit?url=' + shariff.getUpdatedUrl() + title + shariff.getReferrerTrack();
        }
    };
};
