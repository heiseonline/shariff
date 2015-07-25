'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: {
            'de': 'mitteilen',
            'en': 'share',
        },
        name: 'linkedin',
        faName: 'fa-linkedin',
        title: {
            'de': 'Bei LinkedIn teilen',
            'en': 'Share on LinkedIn',
        },
        shareUrl: 'https://www.linkedin.com/cws/share?url=' + url + shariff.getReferrerTrack()
    };
};
