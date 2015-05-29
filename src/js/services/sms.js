'use strict';

module.exports = function(shariff) {
    //var url = shariff.getOption('mailUrl');
    var url = shariff.getOption('smsUrl');

    // sms: link? Add body.
    if (url.indexOf('sms:') === 0) {
        //url += '&body=' + encodeURIComponent(shariff.getOption('mailBody'));
        url += '&body=' + encodeURIComponent(shariff.getOption('smsBody'));
    }

    return {
        blank: url.indexOf('http') === 0,
        popup: false,
        shareText: 'sms',
        name: 'sms',
        faName: 'fa-envelope',
        title: {
            'de': 'Per SMS versenden',
            'en': 'Send by SMS',
        },
        shareUrl: url
    };
};