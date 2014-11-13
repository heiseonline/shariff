'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
        shareText: 'mail',
        name: 'send_by_email',
        shareUrl: shariff.getURL() + '?view=mail'
    };
};
