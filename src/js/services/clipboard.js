'use strict'

module.exports = function (shariff) {
  var url =
    'javascript:' +
    'var d = document.createElement("input");' +
    'document.body.appendChild(d);' +
    'd.value = "' +
    shariff.getURL() +
    '";' +
    'd.select();' +
    'd.setSelectionRange(0, 99999);' +
    'document.execCommand("copy");' +
    'document.body.removeChild(d);'
  return {
    popup: false,
    shareText: {
      bg: '',
      cs: '',
      da: '',
      de: 'kopieren',
      en: 'clipboard',
      es: '',
      fi: '',
      fr: 'presse-papiers',
      hr: '',
      hu: '',
      it: '',
      ja: '',
      ko: '',
      nl: '',
      no: '',
      pl: '',
      pt: '',
      ro: '',
      ru: '',
      sk: '',
      sl: '',
      sr: '',
      sv: '',
      tr: '',
      zh: '',
    },
    name: 'clipboard',
    faPrefix: 'far',
    faName: 'fa-copy',
    title: {
      bg: '',
      cs: '',
      da: '',
      de: 'In die Zwischenablage kopieren',
      en: 'Copy to clipboard',
      es: '',
      fi: '',
      fr: 'Copier dans le presse-papiers',
      hr: '',
      hu: '',
      it: '',
      ja: '',
      ko: '',
      nl: '',
      no: '',
      pl: '',
      pt: '',
      ro: '',
      ru: '',
      sk: '',
      sl: '',
      sr: '',
      sv: '',
      tr: '',
      zh: '',
    },
    shareUrl: url,
  }
}
