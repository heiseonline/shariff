'use strict'

module.exports = function (shariff) {
  var url = encodeURIComponent(shariff.getURL())
  var title = encodeURIComponent(shariff.getTitle())
  return {
    popup: true,
    shareText: 'Pocket',
    name: 'pocket',
    faPrefix: 'fab',
    faName: 'fa-get-pocket',
    title: {
      bg: 'Запазване в Pocket',
      cs: 'Uložit do Pocket',
      da: 'Gem i Pocket',
      de: 'In Pocket speichern',
      en: 'Save to Pocket',
      es: 'Guardar en Pocket',
      fi: 'Tallenna kohtaan Pocket',
      fr: 'Sauvegarder dans Pocket',
      hr: 'Spremi u Pocket',
      hu: 'Mentés "Pocket"-be',
      it: 'Salva in Pocket',
      ja: '「ポケット」に保存',
      ko: 'Pocket에 저장',
      nl: 'Opslaan in Pocket',
      no: 'Lagre i Pocket',
      pl: 'Zapisz w Pocket',
      pt: 'Salvar em Pocket',
      ro: 'Salvați în Pocket',
      ru: 'Сохранить в Pocket',
      sk: 'Uložiť do priečinka Pocket',
      sl: 'Shrani v Pocket',
      sr: 'Sačuvaj u Pocket',
      sv: 'Spara till Pocket',
      tr: 'Pocket e kaydet',
      zh: '保存到Pocket',
    },
    shareUrl:
      'https://getpocket.com/save?title=' +
      title +
      '&url=' +
      url +
      shariff.getReferrerTrack(),
  }
}
