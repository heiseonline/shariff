'use strict';

// require('babel-polyfill')

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('./dom');
var services = require('./services');
var url = require('url');

// Defaults may be overridden either by passing "options" to Shariff constructor
// or by setting data attributes.
var Defaults = {
  theme: 'color',

  // URL to backend that requests social counts. null means "disabled"
  backendUrl: null,

  // Link to the "about" page
  infoUrl: 'http://ct.de/-2467514',

  // localisation: "de" or "en"
  lang: 'de',

  // fallback language for not fully localized services
  langFallback: 'en',

  mailUrl: function mailUrl() {
    var shareUrl = url.parse(this.getURL(), true);
    shareUrl.query.view = 'mail';
    delete shareUrl.search;
    return url.format(shareUrl);
  },

  mailBody: function mailBody() {
    return this.getURL();
  },

  // Media (e.g. image) URL to be shared
  mediaUrl: null,

  // horizontal/vertical
  orientation: 'horizontal',

  // a string to suffix current URL
  referrerTrack: null,

  // services to be enabled in the following order
  services: ['twitter', 'facebook', 'googleplus', 'info'],

  title: function title() {
    return $('head title').text();
  },

  twitterVia: null,

  flattrUser: null,

  flattrCategory: null,

  // build URI from rel="canonical" or document.location
  url: function url() {
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
};

var Shariff = function () {
  function Shariff(element, options) {
    var _this = this;

    _classCallCheck(this, Shariff);

    // the DOM element that will contain the buttons
    this.element = element;

    // Ensure elemnt is empty
    $(element).empty();

    this.options = $.extend({}, Defaults, options, $(element).data());

    // filter available services to those that are enabled and initialize them
    this.services = Object.keys(services).filter(function (service) {
      return _this.isEnabledService(service);
    }).sort(function (a, b) {
      var services = _this.options.services;
      return services.indexOf(a) - services.indexOf(b);
    }).map(function (serviceName) {
      return services[serviceName](_this);
    });

    this._addButtonList();

    if (this.options.backendUrl !== null) {
      this.getShares(this._updateCounts.bind(this));
    }
  }

  _createClass(Shariff, [{
    key: 'isEnabledService',
    value: function isEnabledService(serviceName) {
      return this.options.services.indexOf(serviceName) > -1;
    }
  }, {
    key: '$socialshareElement',
    value: function $socialshareElement() {
      return $(this.element);
    }
  }, {
    key: 'getLocalized',
    value: function getLocalized(data, key) {
      if (_typeof(data[key]) === 'object') {
        if (typeof data[key][this.options.lang] === 'undefined') {
          return data[key][this.options.langFallback];
        } else {
          return data[key][this.options.lang];
        }
      } else if (typeof data[key] === 'string') {
        return data[key];
      }
      return undefined;
    }

    // returns content of <meta name="" content=""> tags or '' if empty/non existant

  }, {
    key: 'getMeta',
    value: function getMeta(name) {
      var metaContent = $('meta[name="' + name + '"],[property="' + name + '"]').attr('content');
      return metaContent || '';
    }
  }, {
    key: 'getInfoUrl',
    value: function getInfoUrl() {
      return this.options.infoUrl;
    }
  }, {
    key: 'getURL',
    value: function getURL() {
      return this.getOption('url');
    }
  }, {
    key: 'getOption',
    value: function getOption(name) {
      var option = this.options[name];
      return typeof option === 'function' ? option.call(this) : option;
    }
  }, {
    key: 'getTitle',
    value: function getTitle() {
      var title = this.getOption('title') || this.getMeta('DC.title');
      var creator = this.getMeta('DC.creator');
      if (title && creator) title = title + ' - ' + creator;
      return title;
    }
  }, {
    key: 'getReferrerTrack',
    value: function getReferrerTrack() {
      return this.options.referrerTrack || '';
    }

    // returns shareCounts of document

  }, {
    key: 'getShares',
    value: function getShares(callback) {
      var baseUrl = url.parse(this.options.backendUrl, true);
      baseUrl.query.url = this.getURL();
      delete baseUrl.search;
      return $.getJSON(url.format(baseUrl), callback);
    }

    // add value of shares for each service

  }, {
    key: '_updateCounts',
    value: function _updateCounts(data, status, xhr) {
      var _this2 = this;

      if (!data) return;
      $.each(data, function (serviceName, value) {
        if (!_this2.isEnabledService(serviceName)) {
          return;
        }
        if (value >= 1000) {
          value = Math.round(value / 1000) + 'k';
        }
        $(_this2.element).find('.' + serviceName + ' a').append($('<span/>').addClass('share_count').text(value));
      });
    }

    // add html for button-container

  }, {
    key: '_addButtonList',
    value: function _addButtonList() {
      var _this3 = this;

      var $buttonList = $('<ul/>').addClass(['theme-' + this.options.theme, 'orientation-' + this.options.orientation, 'col-' + this.options.services.length].join(' '));

      // add html for service-links
      this.services.forEach(function (service) {
        var $li = $('<li/>').addClass('shariff-button ' + service.name);
        var $shareText = $('<span/>').addClass('share_text').text(_this3.getLocalized(service, 'shareText'));

        var $shareLink = $('<a/>').attr('href', service.shareUrl).append($shareText);

        if (typeof service.faName !== 'undefined') {
          $shareLink.prepend($('<span/>').addClass('fa ' + service.faName));
        }

        if (service.popup) {
          $shareLink.attr('data-rel', 'popup');
        } else if (service.blank) {
          $shareLink.attr('target', '_blank');
        }
        $shareLink.attr('title', _this3.getLocalized(service, 'title'));

        // add attributes for screen readers
        $shareLink.attr('role', 'button');
        $shareLink.attr('aria-label', _this3.getLocalized(service, 'title'));

        $li.append($shareLink);

        $buttonList.append($li);
      });

      // event delegation
      $buttonList.on('click', '[data-rel="popup"]', function (e) {
        e.preventDefault();

        var url = $(this).attr('href');

        // if a twitter widget is embedded on current site twitter's widget.js
        // will open a popup so we should not open a second one.
        if (url.match(/twitter\.com\/intent\/(\w+)/)) {
          var w = global.window;
          if (w.__twttr && w.__twttr.widgets && w.__twttr.widgets.loaded) {
            return;
          }
        }

        global.window.open(url, '_blank', 'width=600,height=460');
      });

      this.$socialshareElement().append($buttonList);
    }
  }]);

  return Shariff;
}();

module.exports = Shariff;

// export Shariff class to global (for non-Node users)
global.Shariff = Shariff;

$(function () {
  // initialize .shariff elements
  $('.shariff').each(function () {
    if (!this.hasOwnProperty('shariff')) {
      this.shariff = new Shariff(this);
    }
  });
});