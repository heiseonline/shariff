'use strict';

var $ = require('jquery');

module.exports = function(shariff) {

    // abbreviate at last blank before length and add "\u2026" (horizontal ellipsis)
    var abbreviateText = function(text, length) {
        var abbreviated = decodeURIComponent(text);
        if (abbreviated.length <= length) {
            return text;
        }

        var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ');
        abbreviated = encodeURIComponent(abbreviated.substring(0, lastWhitespaceIndex)) + '\u2026';

        return abbreviated;
    };

    // create tweet text from content of <meta name="DC.title"> and <meta name="DC.creator">
    // fallback to content of <title> tag
    var getTweetText = function() {
        var title = shariff.getMeta('DC.title');
        var creator = shariff.getMeta('DC.creator');

        if (title.length > 0 && creator.length > 0) {
            title += ' - ' + creator;
        } else {
            title = $('title').text();
        }
        // 120 is the max character count left after twitters automatic url shortening with t.co
        return encodeURIComponent( abbreviateText(title, 120) );
    };

    return {
        popup: true,
        shareText: 'tweet',
        name: 'twitter',
        shareUrl: 'https://twitter.com/intent/tweet?text='+ getTweetText() + '&url=' + shariff.getURL() + shariff.getReferrerTrack()
    };
};
