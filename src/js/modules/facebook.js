'use strict';

module.exports = function(ssp) {

    var config = {
        referrerTrack: ''
    };

    var fbEncUri = encodeURIComponent(ssp.getURI());

    return {
        popup: true,
        shareText: 'teilen',
        name: 'facebook',
        shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + fbEncUri + config.referrerTrack
    };
};
