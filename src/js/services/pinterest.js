'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    var media = encodeURIComponent(shariff.getOption('pinterestMedia') || shariff.getOption('image'));

    var title = shariff.getMeta('DC.title') || shariff.getTitle();
    var creator = shariff.getMeta('DC.creator');

    if (creator.length > 0) {
        title += ' - ' + creator;
    }

    title = encodeURIComponent(title);

    return {
        popup: true,
        shareText: 'pin it',
        name: 'pinterest',
        faName: 'fa-pinterest-p',
        title: {
            'de': 'Bei Pinterest pinnen',
            'en': 'Pin it on Pinterest',
            'es': 'Compartir en Pinterest',
            'fr': 'Partager sur Pinterest',
            'it': 'Condividi su Pinterest',
            'da': 'Del på Pinterest',
            'nl': 'Delen op Pinterest'
        },
        shareUrl: 'https://www.pinterest.com/pin/create/button/?url=' + url + '&media=' +  media + '&description=' + title + shariff.getReferrerTrack()
    };
};
