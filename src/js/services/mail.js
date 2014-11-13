'use strict';

module.exports = function(shariff) {
    return {
        popup: false,
        shareText: 'mail',
        name: 'mail',
        shareUrl: shariff.getURL() + '?view=mail'
    };
};
