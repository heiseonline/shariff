'use strict';

var $ = require('jquery');

var _Shariff = function(element, options) {
    var self = this;

    // the DOM element that will contain the buttons
    this.element = element;

    this.options = $.extend({}, this.defaults, options, $(element).data());

    // available services. /!\ Browserify can't require dynamically by now.
    var availableServices = [
        require('./services/facebook'),
        require('./services/googleplus'),
        require('./services/twitter'),
        require('./services/mail')
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

    // service "info" is mandatory
    this.services.push(require('./services/info')(self));

    this._addButtonList();

    if (this.options.backendUrl !== null) {
        this.getShares().then( $.proxy( this._updateCounts, this ) );
    }

};

_Shariff.prototype = {

    // Defaults may be over either by passing "options" to constructor method
    // or by setting data attributes.
    defaults: {
        theme      : 'color',

        // URL to backend that requests social counts. null means "disabled"
        backendUrl : null,

        // Link to the "about" page
        infoUrl: 'http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html',

        // localisation: "de" or "en"
        lang: 'de',

        // horizontal/vertical
        orientation: 'horizontal',


        // a string to suffix current URL
        referrerTrack: null,

        // services to be enabled in the following order
        services   : ['twitter', 'facebook', 'googleplus'],

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
            return data[key][this.options.lang];
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
        var url = this.options.url;
        return ( typeof url === 'function' ) ? $.proxy(url, this)() : url;
    },

    getReferrerTrack: function() {
        return this.options.referrerTrack || '';
    },

    // returns shareCounts of document
    getShares: function() {
        return $.getJSON(this.options.backendUrl + '?url=' + encodeURIComponent(this.getURL()));
    },

    // add value of shares for each service
    _updateCounts: function(data) {
        var self = this;
        $.each(data, function(key, value) {
            if(value >= 1000) {
                value = Math.round(value / 1000) + 'k';
            }
            $(self.element).find('.' + key + ' a').append('<span class="share_count">' + value);
        });
    },

    // add html for button-container
    _addButtonList: function() {
        var self = this;

        var $socialshareElement = this.$socialshareElement();

        var themeClass = 'theme-' + this.options.theme;
        var orientationClass = 'orientation-' + this.options.orientation;

        var $buttonList = $('<ul>').addClass(themeClass).addClass(orientationClass);

        // add html for service-links
        this.services.forEach(function(service) {
            var $li = $('<li class="button">').addClass(service.name);
            var $shareText = '<span class="share_text">' + self.getLocalized(service, 'shareText');

            var $shareLink = $('<a>')
              .attr('href', service.shareUrl)
              .append($shareText);

            if (service.popup) {
                $shareLink.attr('rel', 'popup');
            }
            $shareLink.attr('title', self.getLocalized(service, 'title'));

            $li.append($shareLink);

            $buttonList.append($li);
        });

        // event delegation
        $buttonList.on('click', '[rel="popup"]', function(e) {
            e.preventDefault();

            var url = $(this).attr('href');
            var windowName = $(this).attr('title');
            var windowSizeX = '600';
            var windowSizeY = '460';
            var windowSize = 'width=' + windowSizeX + ',height=' + windowSizeY;

            global.window.open(url, windowName, windowSize);

        });

        $socialshareElement.append($buttonList);
    },
};

module.exports = _Shariff;

// initialize .shariff elements
$('.shariff').each(function() {
    this.shariff = new _Shariff(this);
});
