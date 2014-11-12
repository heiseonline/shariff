'use strict';

module.exports = function(ssp) {

    var config = {
        referrerTrack: ''
    };

    var fbEncUrl = encodeURIComponent(ssp.getURL());

    return {
        popup: true,
        shareText: 'teilen',
        name: 'facebook',
        shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + fbEncUrl + config.referrerTrack
    };
};
