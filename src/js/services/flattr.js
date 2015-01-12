'use strict';

module.exports = function(shariff) {
    var name = 'flattr';
	return {
        popup: true,
        shareText: 'Flattr this!',
        name: name,
        title: {
            'de': 'Artikel flattrn',
            'en': 'Flattr this'
        },
        shareUrl: 'https://flattr.com/submit/auto?title='+ encodeURIComponent(shariff.getShareText(name)) + '&description=' + encodeURIComponent(shariff.getShareDescription(name)) + '&language=de_DE&tags=' + encodeURIComponent(shariff.getTags(name)) + '&category=' + encodeURIComponent(shariff.getOption('flattrCategory') || 'text') + '&user_id=' + encodeURIComponent(shariff.getOption('flattrUser')) + '&url=' + shariff.getURL() + shariff.getReferrerTrack(name)
    };
};
