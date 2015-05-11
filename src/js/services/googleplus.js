'use strict';

module.exports = function(shariff) {
    var url = encodeURIComponent(shariff.getURL());
    return {
        popup: true,
        shareText: '+1',
        name: 'googleplus',
        faName: 'fa-google-plus',
        title: {
            'bg': 'Сподели в Google+',
            'da': 'Del på Google+',
            'de': 'Bei Google+ teilen',
            'en': 'Share on Google+',
            'es': 'Compartir en Google+',
            'fi': 'Jaa Google+:ssa',
            'fr': 'Partager sur Goolge+',
            'hr': 'Podijelite na Google+',
            'hu': 'Megosztás Google+on',
            'it': 'Condividi su Google+',
            'ja': 'Google+上で共有',
            'ko': 'Google+에서 공유하기',
            'nl': 'Delen op Google+',
            'no': 'Del på Google+',
            'pl': 'Udostępnij na Google+',
            'pt': 'Compartilhar no Google+',
            'ro': 'Partajează pe Google+',
            'ru': 'Поделиться на Google+',
            'sk': 'Zdieľať na Google+',
            'sl': 'Deli na Google+',
            'sr': 'Podeli na Google+',
            'sv': 'Dela på Google+',
            'tr': 'Google+\'da paylaş',
            'zh': '在Google+上分享'
        },
        shareUrl: 'https://plus.google.com/share?url=' + url + shariff.getReferrerTrack()
    };
};

