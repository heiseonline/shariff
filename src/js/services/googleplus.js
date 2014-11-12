'use strict';

module.exports = function(shariff) {
    return {
        popup: true,
        shareText: '+1',
        name: 'googleplus',
        shareUrl: 'https://plus.google.com/share?url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};

