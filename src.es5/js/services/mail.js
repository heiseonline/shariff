'use strict';

module.exports = function (shariff) {
  var url = shariff.getOption('mailUrl');

  // mailto: link? Add body and subject.
  if (url.indexOf('mailto:') === 0) {
    url += '?subject=' + encodeURIComponent(shariff.getTitle());
    url += '&body=' + encodeURIComponent(shariff.getOption('mailBody').replace(/\{url\}/i, shariff.getURL()));
  }

  return {
    blank: url.indexOf('http') === 0,
    popup: false,
    shareText: {
      'en': 'mail',
      'zh': '分享'
    },
    name: 'mail',
    faName: 'fa-envelope',
    title: {
      'bg': 'Изпрати по имейл',
      'da': 'Sende via e-mail',
      'de': 'Per E-Mail versenden',
      'en': 'Send by email',
      'es': 'Enviar por email',
      'fi': 'Lähetä sähköpostitse',
      'fr': 'Envoyer par courriel',
      'hr': 'Pošaljite emailom',
      'hu': 'Elküldés e-mailben',
      'it': 'Inviare via email',
      'ja': '電子メールで送信',
      'ko': '이메일로 보내기',
      'nl': 'Sturen via e-mail',
      'no': 'Send via epost',
      'pl': 'Wyślij e-mailem',
      'pt': 'Enviar por e-mail',
      'ro': 'Trimite prin e-mail',
      'ru': 'Отправить по эл. почте',
      'sk': 'Poslať e-mailom',
      'sl': 'Pošlji po elektronski pošti',
      'sr': 'Pošalji putem email-a',
      'sv': 'Skicka via e-post',
      'tr': 'E-posta ile gönder',
      'zh': '通过电子邮件传送'
    },
    shareUrl: url
  };
};