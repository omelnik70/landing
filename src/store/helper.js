//определяет язык браузера
export function browserLocale (lang) {
  
    navigator.languages && navigator.languages.length ?
      // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0] :
    navigator.userLanguage ?
      // IE only
    lang = navigator.userLanguage :
      // latest versions of Chrome, Firefox, and Safari set this correctly
    lang = navigator.language;
  
    return lang
  };