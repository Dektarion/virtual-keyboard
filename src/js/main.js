import {createElements} from './main-elements.js';
import {createLangCheck, changeLangCheck} from './language-check.js';
import {createKeyboardElements, removeKeyboardRow} from './keyboard.js';

//Сохранение языка в localStorage

let language = 'en';
let caps = false;

const setLocalStorage = () => {
  localStorage.setItem('language', language);
};

window.addEventListener('beforeunload', setLocalStorage);

// const getLocalStorage = () => {
//   if(localStorage.getItem('language')) {
//     language = localStorage.getItem('language');
//   }
// };

const getLocalStorage = () => {
  language = localStorage.getItem('language');
};

window.addEventListener('load', getLocalStorage);

// localStorage.clear();

// Создание элементов

createElements();
createLangCheck(language);
createKeyboardElements(language, caps);

// Клавиатура

document.addEventListener ('keydown', (event) => {
  if (event.code === 'Tab' || event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }

  if (event.code === 'CapsLock') {
    if (caps === false) {
      caps = true
      removeKeyboardRow();
      createKeyboardElements(language, caps);
      document.getElementById(event.code).classList.toggle('active');
    } else {
      caps = false;
      removeKeyboardRow();
      createKeyboardElements(language, caps);
    }
  } else document.getElementById(event.code).classList.add('active');

  if ((event.code === 'ShiftLeft' && event.ctrlKey) || (event.code === 'ControlLeft' && event.shiftKey)) {
    if (language === 'en') {
      language = 'ru';
      changeLangCheck(language);
      setLocalStorage(language);
      removeKeyboardRow();
      createKeyboardElements(language, caps);
      document.getElementById('ShiftLeft').classList.add('active');
      document.getElementById('ControlLeft').classList.add('active');
    } else {
      language = 'en';
      changeLangCheck(language);
      setLocalStorage(language);
      removeKeyboardRow();
      createKeyboardElements(language, caps);
      document.getElementById('ShiftLeft').classList.add('active');
      document.getElementById('ControlLeft').classList.add('active');
    }
  }
})

document.addEventListener ('keyup', (event) => {
  if (event.code === 'Tab' || event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }
  if (event.code !== 'CapsLock') {
    document.getElementById(event.code).classList.remove('active');
  }
})
