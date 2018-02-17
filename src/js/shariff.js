'use strict'

// require('babel-polyfill')

const $ = require('./dom')
const services = require('./services')
const url = require('url')

const shariffScript = document.currentScript ||
  document.querySelector('script[src$="shariff.js"]') ||
  document.querySelector('script[src$="shariff.min.js"]')
const shariffPath = shariffScript ? shariffScript.src.split('/').slice(0, -1).join('/') : ''

// Defaults may be overridden either by passing "options" to Shariff constructor
// or by setting data attributes.
const Defaults = {
  theme: 'color',

  // URL to backend that requests social counts. null means "disabled"
  backendUrl: null,

  // Link to the "about" page
  infoUrl: 'https://www.richard-fath.de/de/software/shariff-plus.html',

  // Type of display for the "about" page: "blank", "popup" or "self", default = "blank"
  infoDisplay: 'blank',

  // localisation: "de" or "en"
  lang: 'de',

  // fallback language for not fully localized services
  langFallback: 'en',

  mailUrl: function() {
    var shareUrl = url.parse(this.getURL(), true)
    shareUrl.query.view = 'mail'
    delete shareUrl.search
    return url.format(shareUrl)
  },

  mailBody: function() { return this.getURL() },

  // Media (e.g. image) URL to be shared
  mediaUrl: null,

  // horizontal/vertical
  orientation: 'horizontal',

  // a string to suffix current URL
  referrerTrack: null,

  // services to be enabled in the following order
  services: ['twitter', 'facebooklike', 'facebook', 'googleplus', 'info'],

  dialogsMediaUrl: shariffPath,

  facebookCountBtn: 'like',

  facebooklikeCss: 'facebooklike_dlg.css',

  facebooklikeOptions: { width: 450, layout: 'standard', action: 'like', size: 'large', show_faces: true, share: true, appId: null },

  title: function() {
    return $('head title').text()
  },

  twitterVia: null,

  flattrUser: null,

  flattrCategory: null,

  // build URI from rel="canonical" or document.location
  url: function() {
    var url = global.document.location.href
    var canonical = $('link[rel=canonical]').attr('href') || this.getMeta('og:url') || ''

    if (canonical.length > 0) {
      if (canonical.indexOf('http') < 0) {
        canonical = global.document.location.protocol + '//' + global.document.location.host + canonical
      }
      url = canonical
    }

    return url
  }
}

class Shariff {
  constructor(element, options) {
    // the DOM element that will contain the buttons
    this.element = element

    // Ensure elemnt is empty
    $(element).empty()

    this.options = $.extend({}, Defaults, options, $(element).data())

    // filter available services to those that are enabled and initialize them
    this.services = Object.keys(services)
      .filter(service => this.isEnabledService(service))
      .sort((a, b) => {
        let services = this.options.services
        return services.indexOf(a) - services.indexOf(b)
      })
      .map(serviceName => services[serviceName](this))

    this._addButtonList()

    if (this.options.backendUrl !== null) {
      this.getShares(this._updateCounts.bind(this))
    }
  }

  isEnabledService(serviceName) {
    return this.options.services.indexOf(serviceName) > -1
  }

  $socialshareElement() {
    return $(this.element)
  }

  getLocalized(data, key) {
    if (typeof data[key] === 'object') {
      if (typeof data[key][this.options.lang] === 'undefined') {
        return data[key][this.options.langFallback]
      } else {
        return data[key][this.options.lang]
      }
    } else if (typeof data[key] === 'string') {
      return data[key]
    }
    return undefined
  }

  // returns content of <meta name="" content=""> tags or '' if empty/non existant
  getMeta(name) {
    var metaContent = $(`meta[name="${name}"],[property="${name}"]`).attr('content')
    return metaContent || ''
  }

  getInfoUrl() {
    return this.options.infoUrl
  }

  getInfoDisplayPopup() {
    return (this.options.infoDisplay === 'popup')
  }

  getInfoDisplayBlank() {
    return (
      (this.options.infoDisplay !== 'popup') &&
      (this.options.infoDisplay !== 'self')
    )
  }

  getURL() {
    return this.getOption('url')
  }

  getOption(name) {
    var option = this.options[name]
    return (typeof option === 'function') ? option.call(this) : option
  }

  getTitle() {
    let title = this.getOption('title') || this.getMeta('DC.title')
    let creator = this.getMeta('DC.creator')
    if (title && creator) title = `${title} - ${creator}`
    return title
  }

  getReferrerTrack() {
    return this.options.referrerTrack || ''
  }

  // returns shareCounts of document
  getShares(callback) {
    var baseUrl = url.parse(this.options.backendUrl, true)
    baseUrl.query.url = this.getURL()
    delete baseUrl.search
    return $.getJSON(url.format(baseUrl), callback)
  }

  getDialogsMediaUrl() {
    return this.options.dialogsMediaUrl || ''
  }

  getFacebooklikeCss() {
    return this.options.facebooklikeCss
  }

  getFacebooklikeOptions() {
    return this.options.facebooklikeOptions
  }

  // add value of shares for each service
  _updateCounts(data, status, xhr) {
    if (!data) return
    var fbValue = null
    $.each(data, (serviceName, value) => {
      if (value >= 1000) {
        value = Math.round(value / 1000) + 'k'
      }
      var doAppend = true
      if (serviceName === 'facebook') {
        fbValue = value
        if (this.options.facebookCountBtn === 'like') {
          doAppend = false
        }
      }
      if (this.isEnabledService(serviceName) && doAppend) {
        $(this.element)
          .find(`.${serviceName} a`)
          .append($('<span/>').addClass('share_count').text(value))
      }
    })
    if (this.isEnabledService('facebooklike') && (fbValue !== null) && this.options.facebookCountBtn !== 'share') {
      $(this.element)
        .find(`.facebooklike a`)
        .append($('<span/>').addClass('share_count').text(fbValue))
    }
  }

  // add html for button-container
  _addButtonList() {
    var $buttonList = $('<ul/>').addClass([
      'theme-' + this.options.theme,
      'orientation-' + this.options.orientation,
      'col-' + this.options.services.length
    ].join(' '))

    var dialogServices = []

    // add html for service-links
    this.services.forEach(service => {
      var $li = $('<li/>').addClass(`shariff-button ${service.name}`)
      var $shareText = $('<span/>')
        .addClass('share_text')
        .text(this.getLocalized(service, 'shareText'))

      var $shareLink = $('<a/>')
        .attr('href', service.shareUrl)
        .append($shareText)

      if (typeof service.faName !== 'undefined') {
        $shareLink.prepend($('<span/>').addClass(`fa ${service.faName}`))
      }

      if (service.shareUrl.match(/javascript:/) && typeof service.dialogHtml !== 'undefined') {
        $shareLink.attr('data-dlg-idx', dialogServices.length)
        dialogServices[dialogServices.length] = service
      }

      if (service.popup) {
        $shareLink.attr('data-rel', 'popup')
        if (service.name !== 'info') {
          $shareLink.attr('rel', 'nofollow')
        }
      } else if (service.blank) {
        $shareLink.attr('target', '_blank')
        if (service.name === 'info') {
          $shareLink.attr('rel', 'noopener noreferrer')
        } else {
          $shareLink.attr('rel', 'nofollow noopener noreferrer')
        }
      } else if (service.name !== 'info') {
        $shareLink.attr('rel', 'nofollow')
      }
      $shareLink.attr('title', this.getLocalized(service, 'title'))

      // add attributes for screen readers
      $shareLink.attr('role', 'button')
      $shareLink.attr('aria-label', this.getLocalized(service, 'title'))

      $li.append($shareLink)

      $buttonList.append($li)
    })

    // event delegation
    $buttonList.on('click', '[data-rel="popup"]', function(e) {
      e.preventDefault()

      var url = $(this).attr('href')

      // if a twitter widget is embedded on current site twitter's widget.js
      // will open a popup so we should not open a second one.
      if (url.match(/twitter\.com\/intent\/(\w+)/)) {
        var w = global.window
        if (w.__twttr && w.__twttr.widgets && w.__twttr.widgets.loaded) {
          return
        }
      }

      var dialogIdx = $(this).attr('data-dlg-idx')

      if (dialogIdx && !isNaN(dialogIdx) && typeof dialogServices[dialogIdx].dialogHtml !== 'undefined') {
        var title = $(this).attr('title')
        var headInnerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
          '<title>' + title + '</title>'
        if (typeof dialogServices[dialogIdx].dialogCssUrl !== 'undefined' && dialogServices[dialogIdx].dialogCssUrl) {
          headInnerHTML += '<link rel="stylesheet" href="' + dialogServices[dialogIdx].dialogCssUrl + '">'
        }
        var newWin = global.window.open('', '_blank', 'width=600,height=460')
        newWin.document.head.innerHTML = headInnerHTML
        newWin.document.body.innerHTML = dialogServices[dialogIdx].dialogHtml
        return
      }

      global.window.open(url, '_blank', 'width=600,height=460')
    })

    this.$socialshareElement().append($buttonList)
  }
}

module.exports = Shariff

// export Shariff class to global (for non-Node users)
global.Shariff = Shariff

$(function() {
  // initialize .shariff elements
  $('.shariff').each(function() {
    if (!this.hasOwnProperty('shariff')) {
      this.shariff = new Shariff(this)
    }
  })
})
