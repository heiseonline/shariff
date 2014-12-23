'use strict';

module.exports = function(shariff) {
    var name = 'whatsapp';
	return {
        popup: false,
        shareText: 'WhatsApp',
        name: name,
        title: {
            'de': 'Bei Whatsapp teilen',
            'en': 'Share on Whatsapp'
        },
        shareUrl: 'whatsapp://send?text=' + encodeURIComponent(shariff.getShareText(name) + ' ') + shariff.getURL() + shariff.getReferrerTrack(name)
    };
};
