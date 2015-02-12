'use strict';

module.exports = function(shariff) {
    var fbEncUrl = encodeURIComponent(shariff.getURL());
    return {
        tooltip: true,
        width: 130,
        shareText: {
            'de': 'gefällt mir',
            'en': 'like'
        },
        name: 'facebooklike',
        title: {
            'de': 'Gefällt mir bei Facebook ',
            'en': 'Like on Facebook'
        },
        shareUrl: 'https://www.facebook.com/plugins/like.php?href=' + fbEncUrl + shariff.getReferrerTrack() + '&width=80&layout=button_count&action=like&show_faces=false&share=false&height=30',
        popupInfoText: {
            'de': 'Zum Schutz Ihrer Daten nehmen wir erst jetzt Kontakt mit Facebook auf. Klicken Sie bitte den nachfolgenden Button um diese Seite zu liken.'
        }
    };
};
