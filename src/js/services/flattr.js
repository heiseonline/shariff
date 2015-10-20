'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    var title = shariff.getMeta('DC.title');
    var creator = shariff.getMeta('DC.creator');
    var description = shariff.getMeta('description');

    if (title.length > 0 && creator.length > 0) {
        title += ' - ' + creator;
    } else {
        title = shariff.getTitle();
    }

    return {
        popup: true,
        shareText: 'Flattr',
        name: 'flattr',
        faName: 'fa-money',
        title: {
            'de': 'Artikel flattrn',
            'en': 'Flattr this'
        },
        shareUrl: 'https://flattr.com/submit/auto?title=' + encodeURIComponent(title) + '&description=' + encodeURIComponent(description) + '&category=' + encodeURIComponent(shariff.options.flattrCategory || 'text') + '&user_id=' + encodeURIComponent(shariff.options.flattrUser) + '&url=' + url + shariff.getReferrerTrack()
    };
};
