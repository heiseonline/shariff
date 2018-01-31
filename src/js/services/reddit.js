'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())

  if (title !== '') {
    title = '&title=' + title
  }

  return {
    popup: true,
    shareText: {
      'cs': 'sdílet',
      'de': 'teilen',
      'en': 'share',
      'zh': '分享',
    },
    name: 'reddit',
    faName: 'fa-reddit',
    title: {
      'cs': 'Sdílet na Redditu',
      'de': 'Bei Reddit teilen',
      'en': 'Share on Reddit',
      'zh': '分享至Reddit'
    },
    shareUrl: 'https://reddit.com/submit?url=' + url + title + shariff.getReferrerTrack()
  }
}
