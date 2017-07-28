'use strict';

module.exports = function (shariff) {
  return {
    blank: true,
    popup: false,
    shareText: 'Info',
    name: 'info',
    faName: 'fa-info',
    title: {
      'de': 'weitere Informationen',
      'en': 'more information',
      'es': 'más informaciones',
      'fr': 'plus d\'informations',
      'it': 'maggiori informazioni',
      'da': 'flere oplysninger',
      'nl': 'verdere informatie',
      'zh': '更多信息'
    },
    shareUrl: shariff.getInfoUrl()
  };
};