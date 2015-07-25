'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());

    var title = shariff.getMeta('DC.title');
    var creator = shariff.getMeta('DC.creator');

    if (title.length > 0 && creator.length > 0) {
        title += ' - ' + creator;
    } else {
        title = shariff.getTitle();
    }

    return {
        popup: false,
        shareText: {
            'de': 'teilen',
            'en': 'share',
        },
        name: 'whatsapp',
        faName: 'fa-whatsapp',
        title: {
            'de': 'Bei Whatsapp teilen',
            'en': 'Share on Whatsapp',
        },
        shareUrl: 'whatsapp://send?text=' + encodeURIComponent(title) + '%20' + url + shariff.getReferrerTrack()
    };
};
