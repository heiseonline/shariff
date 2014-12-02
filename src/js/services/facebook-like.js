'use strict';

module.exports = function(shariff) {
    var fbEncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: {
            'de': 'gefällt mir',
            'en': 'like'
        },
        name: 'facebooklike',
        title: {
            'de': 'Gefällt mir bei Facebook ',
            'en': 'Like on Facebook'
        },
        shareUrl: 'http://www.facebook.com/plugins/like.php?href=' + fbEncUrl + shariff.getReferrerTrack() + '&width&layout=standard&action=like&show_faces=true&share=false&height=80'
    };
};
