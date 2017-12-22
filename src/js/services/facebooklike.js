'use strict'

module.exports = function(shariff) {
  var url = shariff.getURL()
  var dialogTitle = shariff.getMeta('og:title') || document.title
  var shariffLang = shariff.getOption('lang')
  var dialogLocale = 'en_GB'
  var dialogClose = 'Close'
  var fbUrl = 'https://www.facebook.com/plugins/like.php?href=' +
    encodeURIComponent(url) + shariff.getReferrerTrack()
  var height = 65
  var minWidth = 47
  var stdWidth = 103
  var dialogHtml = '<div>' + '<h1 class="dialogtitle">'
  var fblikeOptions = shariff.getFacebooklikeOptions()
  switch (shariffLang) {
  case 'bg': dialogLocale = 'bg_BG'; dialogClose = 'Близо'; break
  case 'da': dialogLocale = 'da_DK'; dialogClose = 'Luk'; break
  case 'de': dialogLocale = 'de_DE'; dialogClose = 'Schließen'; break
  case 'es': dialogLocale = 'es_ES'; dialogClose = 'Cerrar'; break
  case 'fi': dialogLocale = 'fi_FI'; dialogClose = 'Sulje'; break
  case 'fr': dialogLocale = 'fr_FR'; dialogClose = 'Fermer'; break
  case 'hr': dialogLocale = 'hr_HR'; dialogClose = 'Zatvoriti'; break
  case 'hu': dialogLocale = 'hu_HU'; dialogClose = 'Bezár'; break
  case 'it': dialogLocale = 'it_IT'; dialogClose = 'Chiudi'; break
  case 'ja': dialogLocale = 'ja_JP'; dialogClose = '閉じる'; break
  case 'ko': dialogLocale = 'ko_KR'; dialogClose = '닫기'; break
  case 'nl': dialogLocale = 'nl_NL'; dialogClose = 'Sluiten'; break
  case 'no': dialogLocale = 'nb_NO'; dialogClose = 'Lukk'; break
  case 'pl': dialogLocale = 'pl_PL'; dialogClose = 'Zamknij'; break
  case 'pt': dialogLocale = 'pt_PT'; dialogClose = 'Fechar'; break
  case 'ro': dialogLocale = 'ro_RO'; dialogClose = 'Închide'; break
  case 'ru': dialogLocale = 'ru_RU'; dialogClose = 'Закрыть'; break
  case 'sk': dialogLocale = 'sk_SK'; dialogClose = 'Zatvoriť'; break
  case 'sl': dialogLocale = 'sl_SI'; dialogClose = 'Zapri'; break
  // Serbian latin is not suppported by Facebook Graph API, they only have kyrillic.
  // case 'sr': dialogLocale = 'sr_RS'; dialogClose = 'Close'; break
  case 'sv': dialogLocale = 'sv_SE'; dialogClose = 'Stäng'; break
  case 'tr': dialogLocale = 'tr_TR'; dialogClose = 'Kapatın'; break
  case 'zh': dialogLocale = 'zh_CN'; dialogClose = '关闭'; break
  }
  switch (fblikeOptions.layout) {
  case 'standard':
    if (fblikeOptions.show_faces) {
      height = 80
    } else {
      height = 35
    }
    minWidth = 225
    stdWidth = 450
    break
  case 'box_count':
    height = 65
    minWidth = 55
    stdWidth = 103
    break
  case 'button_count':
    height = 46
    minWidth = 90
    stdWidth = 154
    break
  }
  if (typeof fblikeOptions.width === 'undefined' || fblikeOptions.width === null) {
    fblikeOptions.width = stdWidth
  } else if (fblikeOptions.width < minWidth) {
    fblikeOptions.width = minWidth
  }
  fblikeOptions.appId = fblikeOptions.appId || (shariff.getMeta('fb:app_id') || null)
  for (var opt in fblikeOptions) {
    if (fblikeOptions.hasOwnProperty(opt) && typeof fblikeOptions[opt] !== 'undefined' && fblikeOptions[opt] !== null) {
      fbUrl += '&' + opt + '=' + fblikeOptions[opt]
    }
  }
  fbUrl += '&height=' + height + '&locale=' + dialogLocale
  dialogHtml += dialogTitle + '</h1>' +
      '<a class="dialoglink" href="' + url + '">' +
      url + '</a></div>' +
      '<div class="facebooklike"><iframe src="' + fbUrl + '" ' +
      'width="' + fblikeOptions.width + '" height="' + height + '" style="border:none;overflow:hidden" ' +
      'scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>' +
      '<div>' +
      '<button class="dialogbutton" onclick="self.close()">' +
      dialogClose + '</button></div>'
  return {
    popup: true,
    shareText: {
      'bg': 'харесвам',
      'da': 'synes godt om',
      'de': 'gefällt mir',
      'en': 'like',
      'es': 'me gusta',
      'fi': 'tykkää',
      'fr': 'j’aime',
      'hr': 'sviđa mi se',
      'hu': 'tetszik',
      'it': 'mi piace',
      'ja': 'いいね！',
      'ko': '좋아요',
      'nl': 'vind ik leuk',
      'no': 'liker',
      'pl': 'lubię to!',
      'pt': 'gosto',
      'ro': 'îmi place',
      'ru': 'нравится',
      'sk': 'páči sa mi to',
      'sl': 'všeč mi je',
      'sr': 'свиђа ми се',
      'sv': 'gilla',
      'tr': 'beğen',
      'zh': '赞'
    },
    name: 'facebooklike',
    faName: 'fa-thumbs-up',
    title: {
      'bg': 'Харесвам/Вече не харесвам във Facebook',
      'da': 'Synes godt om/Fjern Synes godt om på Facebook',
      'de': 'Gefällt mir/Gefällt mir nicht mehr bei Facebook',
      'en': 'Like/Unlike on Facebook',
      'es': 'Me gusta/Ya no me gusta en Facebook',
      'fi': 'Tykkää/En tykkääkään Facebookissa',
      'fr': 'J’aime/Je n’aime plus sur Facebook',
      'hr': 'Sviđa mi se/Ne sviđa mi se na Facebooku',
      'hu': 'Tetszik/Mégsem tetszik a Facebookon',
      'it': 'Mi piace/Non mi piace più su Facebook',
      'ja': 'フェイスブック上 いいね！/「いいね！」を取り消す',
      'ko': '페이스북에서 좋아요/싫어함',
      'nl': 'Vind ik leuk/Vind ik niet meer leuk op Facebook',
      'no': 'Liker/Slutt å like på Facebook',
      'pl': 'Lubię to!/Nie lubię na Facebooku',
      'pt': 'Gosto/Não gosto no Facebook',
      'ro': 'Îmi place/Nu-mi mai place pe Facebook',
      'ru': 'Нравится/Не нравится на Facebook',
      'sk': 'Páči sa mi to/Zrušiť Páči sa mi to na Facebooku',
      'sl': 'Všeč mi je/Ni mi všeč na Facebooku',
      'sr': 'Свиђа ми се/Не свиђа ми се на Фацебооку',
      'sv': 'Gilla/Sluta gilla på Facebook',
      'tr': 'Facebook\'ta Beğen/Beğenmekten Vazgeç',
      'zh': 'Facebook上的赞/取消赞'
    },
    shareUrl: 'javascript:void(0);',
    dialogHtml: dialogHtml,
    dialogCssUrl: shariff.getDialogsMediaUrl() + '/facebooklike_dlg.css'
  }
}
