'use strict';

var $ = require('jquery');
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
        require('./services/facebook'),
        require('./services/facebook-like'),
        require('./services/googleplus'),
        require('./services/info'),
        require('./services/linkedin'),
        require('./services/mail'),
        require('./services/pinterest'),
        require('./services/twitter'),
        require('./services/whatsapp'),
        require('./services/xing'),
	    require('./services/tumblr')
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
        this.getShares().then( $.proxy( this._updateCounts, this ) );
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

        mailBody: function() { return '<' + this.getURL() + '>'; },

        // Media (e.g. image) URL to be shared
        mediaUrl: null,


        // horizontal/vertical
        orientation: 'horizontal',

        // a string to suffix current URL
        referrerTrack: null,

        // number the share count gets divided by (at the moment the possibility
        // to set a different unit beside k is not given)
        countDivisor: 1000,

        // start division at this number
        countDivisionStart: 1000,

        // possibility to do something like 24.6k shares (not finally implemented yet)
        countRoundPrecision: 0,

        // services to be enabled in the following order
        services   : ['twitter', 'facebook','facebook-like', 'googleplus', 'info'],

        title: function() {
            return $('head title').text();
        },

        twitterVia: null,

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
        return (typeof option === 'function') ? $.proxy(option, this)() : option;
    },

    getTitle: function() {
        return this.getOption('title');
    },

    getReferrerTrack: function() {
        return this.options.referrerTrack || '';
    },

    // returns shareCounts of document
    getShares: function() {
        var baseUrl = url.parse(this.options.backendUrl, true);
        baseUrl.query.url = this.getURL();
        delete baseUrl.search;
        return $.getJSON(url.format(baseUrl));
    },

    getCountDivisor: function() {
        return this.options.countDivisor;
    },

    getCountDivisionStart: function() {
        return this.options.countDivisionStart;
    },

    getCountRoundPrecision: function() {
        return this.options.countRoundPrecision;
    },

    // add value of shares for each service
    _updateCounts: function(data) {
        var
            self = this,
            suffix = ''
        ;
        $.each(data, function(key, value) {
            if(value >= self.getCountDivisionStart()) {
                value = Math.round(value / self.getCountDivisor());
                suffix = 'k';
            }
            if (value >= 1000) {
                value = Math.floor(value / 1000) + '.' + (value % 1000);
            }
            $(self.element).find('.' + key + ' a').append('<span class="share_count">' + value + suffix);
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
                $shareLink.attr('rel', 'popup');
            } else if (service.blank) {
                $shareLink.attr('target', '_blank');
            } else if(service.iframe){
                $shareLink.attr('rel', 'iframe');
            }
            if(service.customContent){
                $shareLink.attr('data-useCustomContent',service.useCustomContent);
                $shareLink.attr('data-customContent',service.customContent);
                $shareLink.attr('data-name',service.name);
            }
            $shareLink.attr('title', self.getLocalized(service, 'title'));

            // add attributes for screen readers
            $shareLink.attr('role', 'button');
            $shareLink.attr('aria-label', self.getLocalized(service, 'title'));

            $li.append($shareLink);

            $buttonList.append($li);
        });

        // event delegation
        $buttonList.on('click', '[rel="popup"]', function(e) {
            e.preventDefault();

            var url = $(this).attr('href');
            var windowName = '_blank';
            var windowSizeX = '600';
            var windowSizeY = '460';
            var windowSize = 'width=' + windowSizeX + ',height=' + windowSizeY;

            global.window.open(url, windowName, windowSize);

        });
        $buttonList.on('click', '[rel="iframe"]', function(e) {
            e.preventDefault();
            var url = $(this).attr('href');

            if ($(this).data('width')) {
                $(this).parent().width($(this).data('width'));
            }

            $(this).replaceWith(
                '<iframe src="' + url +'"></iframe>'
            );
        });

        $buttonList.on('click', '[rel="tooltip"]', function(e) {
            e.preventDefault();
            var
                self = this,
                url = $(this).attr('href'),
                ot = $(this).offset().top - 150,
                ol = $(this).offset().left
                ;

            if ($(this).data('width')){
                $(this).parent().width($(this).data('width'));
            }

            $('body').prepend('' +
            '<div class="shariff-tooltip" style="top: ' + ot + 'px; left: ' + ol + 'px;">' +
            $(this).parent().data('popupinfotext') +
            '<br><br><iframe style="height: 30px;" src="' + url + '"></iframe></div>' +
            '</div>' +
            '');

            // closes tooltip again
            /* global document */
            $(document).on('click', function(event) {
                if (undefined === $(event.target).closest('.shariff-tooltip').get(0)) {
                    if (undefined === $(event.target).closest('div.shariff').get(0)) {
                        $('.shariff-tooltip').remove();
                        $(this).off(event);
                    }
                }
            });
        });

        $buttonList.on('click', '[rel="iframe"]', function(e) {
            e.preventDefault();
            var url = $(this).attr('href');

            if ($(this).data('width')) {
                $(this).parent().width($(this).data('width'));
            }

            if ($(this).data("useCustomContent")) {
                var customContent = $(this).data('customContent');
                var name = $(this).data('name');
                $(this).replaceWith('<div></div>');
                var $iframeContainer = $(this);

                $("<iframe name='"+ name +"'></iframe>").load(function(){
                    $("iframe [name='"+ name +"]").contents().find('body').html(customContent);
                }).appendTo($iframeContainer);


                //$(this).contents().find('body').html(customContent);
            } else {
                $(this).replaceWith(
                    '<iframe src="' + url + '"></iframe>'
                );
            }


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
