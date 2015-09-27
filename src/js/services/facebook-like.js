'use strict';

module.exports = function(shariff) {
    var fbEncUrl = encodeURIComponent(shariff.getURL());
    return {
        popup: false,
        iframe: true,
        useCustomContent: true,
        shareText: {
            'de': 'gefällt mir',
            'en': 'like'
        },
        name: 'facebook-like',
        faName: 'fa-facebook',
        title: {
            'bg': 'Сподели във Facebook',
            'da': 'Del på Facebook',
            'de': 'Bei Facebook teilen',
            'en': 'Share on Facebook',
            'es': 'Compartir en Facebook',
            'fi': 'Jaa Facebookissa',
            'fr': 'Partager sur Facebook',
            'hr': 'Podijelite na Facebooku',
            'hu': 'Megosztás Facebookon',
            'it': 'Condividi su Facebook',
            'ja': 'フェイスブック上で共有',
            'ko': '페이스북에서 공유하기',
            'nl': 'Delen op Facebook',
            'no': 'Del på Facebook',
            'pl': 'Udostępnij na Facebooku',
            'pt': 'Compartilhar no Facebook',
            'ro': 'Partajează pe Facebook',
            'ru': 'Поделиться на Facebook',
            'sk': 'Zdieľať na Facebooku',
            'sl': 'Deli na Facebooku',
            'sr': 'Podeli na Facebook-u',
            'sv': 'Dela på Facebook',
            'tr': 'Facebook\'ta paylaş',
            'zh': '在Facebook上分享',
        },
        shareUrl: 'http://www.facebook.com/v2.4/plugins/like.php?href=' + fbEncUrl + shariff.getReferrerTrack() + '&width&layout=standard&action=like&show_faces=true&share=false&height=80',
        customContent: "<div id='fb-root'></div>" +
        "<script>(function(d, s, id) {" +
            "var js, fjs = d.getElementsByTagName(s)[0];" +
            "if (d.getElementById(id)) return;" +
            "js = d.createElement(s); js.id = id;" +
            "js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4';"+
            "fjs.parentNode.insertBefore(js, fjs);"+
        "}(document, 'script', 'facebook-jssdk'));</script>" +
        "<div class='fb-like' data-href='" + fbEncUrl + shariff.getReferrerTrack() +"' data-layout='standard' data-action='like' data-show-faces='false' data-share='false'></div>"
    };
};
