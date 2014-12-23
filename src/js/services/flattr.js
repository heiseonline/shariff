'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
        shareText: 'Flattr this!',
        name: 'flattr',
        title: {
            'de': 'Artikel flattrn',
            'en': 'Flattr this'
        },
        shareUrl: 'https://flattr.com/submit/auto?url=' + shariff.getURL() + '&title='+ shariff.getShareText() + '&description=&language=de_DE&tags=&category=text&user_id=' + shariff.getReferrerTrack('flattr')
    };
};
