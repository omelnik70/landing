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

  //добавляет плавный скролл к элементу ref
  // f - функция, которую нужно вызвать при клике  
  export function handleShow (ref, f) {
    ref.scrollIntoView({block: 'start', behavior: 'smooth'});
    f();
  };

  // при клике добавляет / удаляет стиль (styles.change) элементу elRef,
  // f - функция, которую нужно вызвать при клике  
  // например: onClick={() => changeStyle(currentDiv, styles.change, f)}
  export const changeStyle = (elRef, style, f) => {
    elRef.current.classList.toggle(`${style}`);
    f();
  };