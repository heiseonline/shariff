'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = shariff.getTitle()
  var description = shariff.getMeta('description')

  return {
    popup: true,
    shareText: 'Flattr',
    name: 'flattr',
    faPrefix: 'far',
    faName: 'fa-money-bill-alt',
    title: {
      de: 'Artikel flattrn',
      en: 'Flattr this',
    },
    shareUrl:
      'https://flattr.com/submit/auto?title=' +
      encodeURIComponent(title) +
      '&description=' +
      encodeURIComponent(description) +
      '&category=' +
      encodeURIComponent(shariff.options.flattrCategory || 'text') +
      '&user_id=' +
      encodeURIComponent(shariff.options.flattrUser) +
      '&url=' +
      url +
      shariff.getReferrerTrack(),
  }
}
