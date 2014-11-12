'use strict';

module.exports = function(ssp) {

    var config = {
    };

    return {
        popup: false,
        shareText: 'mail',
        name: 'per_email',
        shareUrl: ssp.getURL() + '?view=mail'
    };
};
