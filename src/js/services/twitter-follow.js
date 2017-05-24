'use strict';

var url = require('url');
var $ = require('jquery');

module.exports = function(shariff) {
    var shareTextFollowerName = '';
    var shareUrl = url.parse('https://twitter.com/intent/follow', true);
    shareUrl.query.screen_name = shariff.options.twitterFollow;

    if(shariff.options.twitterFollow !== null && shariff.options.twitterFollow.length <= 9) {
      shareTextFollowerName = '@ ' + shariff.options.twitterFollow;
    }

    return {
        popup: true,
        shareText: 'follow' + shareTextFollowerName,
        name: 'twitter-follow',
        faName: 'fa-twitter',
        title: {
            'de': 'Bei Twitter folgen'
        },
        shareUrl: url.format(shareUrl)
    };
};
