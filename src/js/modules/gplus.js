'use strict';

module.exports = function(ssp) {

    var config = {
        referrerTrack: ''
    };

    return {
        popup: true,
        shareText: '+1',
        name: 'gplus',
        shareUrl: 'https://plus.google.com/share?url=' + ssp.getURI() + config.referrerTrack
    };
};

