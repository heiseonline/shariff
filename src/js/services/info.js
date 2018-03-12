'use strict'

module.exports = function(shariff) {
  return {
    blank: shariff.getInfoDisplayBlank(),
    popup: shariff.getInfoDisplayPopup(),
    shareText: 'Info',
    name: 'info',
    faPrefix: 'fas',
    faName: 'fa-info',
    title: {
      'bg': 'Повече информация',
      'cs': 'Více informací',
      'da': 'Flere oplysninger',
      'de': 'Weitere Informationen',
      'en': 'More information',
      'es': 'Más informaciones',
      'fi': 'Lisätietoja',
      'fr': 'Plus d\'informations',
      'hr': 'Više informacija',
      'hu': 'Több információ',
      'it': 'Maggiori informazioni',
      'ja': '詳しい情報',
      'ko': '추가 정보',
      'nl': 'Verdere informatie',
      'no': 'Mer informasjon',
      'pl': 'Więcej informacji',
      'pt': 'Mais informações',
      'ro': 'Mai multe informatii',
      'ru': 'Больше информации',
      'sk': 'Viac informácií',
      'sl': 'Več informacij',
      'sr': 'Više informacija',
      'sv': 'Mer information',
      'tr': 'Daha fazla bilgi',
      'zh': '更多信息'
    },
    shareUrl: shariff.getInfoUrl()
  }
}
