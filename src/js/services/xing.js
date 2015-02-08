'use strict';

module.exports = function(shariff) {
    var EncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        noblank: false,
        mobileonly: false,
        shareText: {
            'de': 'teilen',
            'en': 'share',
            'es': 'compartir'
        },
        name: 'xing',
        title: {
            'de': 'Bei XING teilen',
            'en': 'Share on XING',
            'es': 'Compartir en XING'
        },
        shareUrl: '//www.xing.com/social_plugins/share?url=' + EncUrl + shariff.getReferrerTrack()
    };
};
