'use strict';

var $ = require('./dom');
var url = require('url');

var Shariff = function(element, options) {
    var self = this;

    // the DOM element that will contain the buttons
    this.element = element;

    // Ensure elemnt is empty
    $(element).empty();

    this.options = $.extend({}, this.defaults, options, $(element).data());

    // available services. /!\ Browserify can't require dynamically by now.
    var availableServices = [
        require('./services/addthis'),
        require('./services/diaspora'),
        require('./services/facebook'),
        require('./services/flattr'),
        require('./services/googleplus'),
        require('./services/info'),
        require('./services/linkedin'),
        require('./services/mail'),
        require('./services/pinterest'),
        require('./services/reddit'),
        require('./services/stumbleupon'),
        require('./services/twitter'),
        require('./services/whatsapp'),
        require('./services/xing'),
        require('./services/tumblr'),
        require('./services/threema'),
        require('./services/weibo'),
        require('./services/tencent-weibo'),
        require('./services/qzone')
    ];

    // filter available services to those that are enabled and initialize them
    this.services = $.map(this.options.services, function(serviceName) {
        var service;
        availableServices.forEach(function(availableService) {
            availableService = availableService(self);
            if (availableService.name === serviceName) {
                service = availableService;
                return null;
            }
        });
        return service;
    });

    this._addButtonList();

    if (this.options.backendUrl !== null) {
        this.getShares(this._updateCounts.bind(this));
    }

};

Shariff.prototype = {

    // Defaults may be over either by passing "options" to constructor method
    // or by setting data attributes.
    defaults: {
        theme      : 'color',

        // URL to backend that requests social counts. null means "disabled"
        backendUrl : null,

        // Link to the "about" page
        infoUrl: 'http://ct.de/-2467514',

        // localisation: "de" or "en"
        lang: 'de',

        // fallback language for not fully localized services
        langFallback: 'en',

        mailUrl: function() {
            var shareUrl = url.parse(this.getURL(), true);
            shareUrl.query.view = 'mail';
            delete shareUrl.search;
            return url.format(shareUrl);
        },

        // if
        mailSubject: function() {
            return this.getMeta('DC.title') || this.getTitle();
        },

        mailBody: function() { return this.getURL(); },

        // Media (e.g. image) URL to be shared
        mediaUrl: null,


        // horizontal/vertical
        orientation: 'horizontal',

        // a string to suffix current URL
        referrerTrack: null,

        // services to be enabled in the following order
        services   : ['twitter', 'facebook', 'googleplus', 'info'],

        title: function() {
            return $('head title').text();
        },

        twitterVia: null,

        flattrUser: null,

        flattrCategory: null,

        // build URI from rel="canonical" or document.location
        url: function() {
            var url = global.document.location.href;
            var canonical = $('link[rel=canonical]').attr('href') || this.getMeta('og:url') || '';

            if (canonical.length > 0) {
                if (canonical.indexOf('http') < 0) {
                    canonical = global.document.location.protocol + '//' + global.document.location.host + canonical;
                }
                url = canonical;
            }

            return url;
        }
    },

    $socialshareElement: function() {
        return $(this.element);
    },

    getLocalized: function(data, key) {
        if (typeof data[key] === 'object') {
            if (typeof data[key][this.options.lang] === 'undefined') {
            	return data[key][this.options.langFallback];
            } else {
            	return data[key][this.options.lang];
            }
        } else if (typeof data[key] === 'string') {
            return data[key];
        }
        return undefined;
    },

    // returns content of <meta name="" content=""> tags or '' if empty/non existant
    getMeta: function(name) {
        var metaContent = $('meta[name="' + name + '"],[property="' + name + '"]').attr('content');
        return metaContent || '';
    },

    getInfoUrl: function() {
        return this.options.infoUrl;
    },

    getURL: function() {
        return this.getOption('url');
    },

    getOption: function(name) {
        var option = this.options[name];
        return (typeof option === 'function') ? option.call(this) : option;
    },

    getTitle: function() {
        return this.getOption('title');
    },

    getReferrerTrack: function() {
        return this.options.referrerTrack || '';
    },

    // returns shareCounts of document
    getShares: function(callback) {
        var baseUrl = url.parse(this.options.backendUrl, true);
        baseUrl.query.url = this.getURL();
        delete baseUrl.search;
        return $.getJSON(url.format(baseUrl), callback);
    },

    // add value of shares for each service
    _updateCounts: function(success, data) {
        var self = this;
        $.each(data, function(key, value) {
            if(value >= 1000) {
                value = Math.round(value / 1000) + 'k';
            }
            $(self.element).find('.' + key + ' a').append('&nbsp;<span class="share_count">' + value);
        });
    },

    // add html for button-container
    _addButtonList: function() {
        var self = this;

        var $socialshareElement = this.$socialshareElement();

        var themeClass = 'theme-' + this.options.theme;
        var orientationClass = 'orientation-' + this.options.orientation;
        var serviceCountClass = 'col-' + this.options.services.length;

        var $buttonList = $('<ul>').addClass(themeClass).addClass(orientationClass).addClass(serviceCountClass);

        // add html for service-links
        this.services.forEach(function(service) {
            var $li = $('<li class="shariff-button">').addClass(service.name);
            var $shareText = '<span class="share_text">' + self.getLocalized(service, 'shareText');

            var $shareLink = $('<a>')
              .attr('href', service.shareUrl)
              .append($shareText);

            if (typeof service.faName !== 'undefined') {
                $shareLink.prepend('<span class="fa ' +  service.faName + '">');
            }

            if (service.popup) {
                $shareLink.attr('data-rel', 'popup');
            } else if (service.blank) {
                $shareLink.attr('target', '_blank');
            }
            $shareLink.attr('title', self.getLocalized(service, 'title'));

            // add attributes for screen readers
            $shareLink.attr('role', 'button');
            $shareLink.attr('aria-label', self.getLocalized(service, 'title'));

            $li.append($shareLink);

            $buttonList.append($li);
        });

        // event delegation
        $buttonList.on('click', '[data-rel="popup"]', function(e) {
            e.preventDefault();

            var url = $(this).attr('href');
            var windowName = '_blank';
            var windowSizeX = '600';
            var windowSizeY = '460';
            var windowSize = 'width=' + windowSizeX + ',height=' + windowSizeY;

            global.window.open(url, windowName, windowSize);

        });

        $socialshareElement.append($buttonList);
    }
};

module.exports = Shariff;

// export Shariff class to global (for non-Node users)
global.Shariff = Shariff;

// initialize .shariff elements
$('.shariff').each(function() {
    if (!this.hasOwnProperty('shariff')) {
        this.shariff = new Shariff(this);
    }
});
