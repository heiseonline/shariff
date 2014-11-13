'use strict';

var $ = require('jquery');

var _Shariff = function(element, options) {
    var self = this;

    // the DOM element that will contain the buttons
    this.element = element;

    this.options = $.extend({}, this.defaults, options, $(element).data());

    // initialize available services
    this.services = $.map([
        require('./services/facebook'),
        require('./services/googleplus'),
        require('./services/twitter'),
        require('./services/mail'),
        require('./services/info')
    ], function(service) {
        return service(self);
    })

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

        // horizontal/vertical
        orientation: 'horizontal',


        // a string to suffix current URL
        referrerTrack: 'TEST',

        // services to be enabled
        services   : ['twitter', 'facebook', 'googleplus', 'mail', 'info'],

        // build URI from rel="canonical" or document.location
        url: function() {
            var url = global.document.location.href;
            var canonical = $('link[rel=canonical]').attr('href');
            if (canonical && canonical.length > 0) {
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

    // returns content of <meta name="" content=""> tags or '' if empty/non existant
    getMeta: function(name) {
        var metaContent = $('meta[name="' + name + '"]').attr('content');
        return metaContent || '';
    },

    getURL: function() {
        var url = this.options.url;
        return ( typeof url === 'function' ) ? url() : url;
    },

    getReferrerTrack: function() {
        console.log(this.options.referrerTrack);
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

        var $buttonListHtml = '<ul class="social_share_area clearfix"></ul>';
        var $socialshareElement = this.$socialshareElement();
        $socialshareElement.prepend($buttonListHtml);

        var $buttonList = $socialshareElement.find('.social_share_area');

        $buttonList.addClass("theme-" + this.options.theme);
        $buttonList.addClass("orientation-" + this.options.orientation);

        var enabled = function(service) {
            var isEnabled = false;
            self.options.services.forEach(function(enabledService) {
                if (service.name === enabledService) {
                    isEnabled = true;
                }
            });
            return isEnabled;
        };

        // add html for service-links
        this.services.filter(enabled).forEach(function(service) {
            var $li = $('<li class="button">').addClass(service.name);
            var $shareText = '<span class="share_text">' + service.shareText;

            var $shareLink = $('<a>')
              .attr('href', service.shareUrl)
              .append($shareText);

            if(service.popup) {
                $shareLink
                  .attr('rel', 'popup')
                  .attr('title', service.name + '-share-dialog');
            } else {
                $shareLink.attr('title', service.shareText);
            }

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
    },
};

module.exports = _Shariff;

// the code may be invoked as a jquery plugin
$.fn.shariff = function(options) {
    return this.each(function() {
        this.shariff = new _Shariff(this, options);
    });
};

// initialize .shariff elements
$('.shariff').shariff();
