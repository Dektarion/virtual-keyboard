import {createElements} from './main-elements.js';
import {createLangCheck, changeLangCheck} from './language-check.js';
import {createKeyboardElements, removeKeyboardRow} from './keyboard.js';

//Сохранение языка в localStorage

let language = localStorage.getItem('language') ?? 'en';
let caps = false;
let shiftButton = false;
// let innerText = '';

const setLocalStorage = () => {
  localStorage.setItem('language', language);
};

// localStorage.clear();

// Создание элементов

createElements();
createLangCheck(language);
createKeyboardElements(language, caps, shiftButton);

// Клавиатура физическая

document.addEventListener ('keydown', (event) => {
  document.getElementById('textArea').focus();
  if (event.code === 'Tab' || event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }

  if (event.code === 'CapsLock') {
    if (caps === false) {
      caps = true
      removeKeyboardRow();
      createKeyboardElements(language, caps, shiftButton);
      document.getElementById(event.code).classList.toggle('active');
    } else {
      caps = false;
      removeKeyboardRow();
      createKeyboardElements(language, caps, shiftButton);
    }
  } else document.getElementById(event.code).classList.add('active');

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (document.getElementById('CapsLock').classList.contains('active')) {
      shiftButton = true;
      removeKeyboardRow();
      createKeyboardElements(language, caps, shiftButton);
      document.getElementById(event.code).classList.add('active');
      document.getElementById('CapsLock').classList.toggle('active');
    } else {
      shiftButton = true;
      removeKeyboardRow();
      createKeyboardElements(language, caps, shiftButton);
      document.getElementById(event.code).classList.add('active');
    }
  }

  if ((event.code === 'ShiftLeft' && event.ctrlKey) || (event.code === 'ControlLeft' && event.shiftKey)) {
    if (document.getElementById('CapsLock').classList.contains('active')) {
      if (language === 'en') {
        language = 'ru';
        shiftButton = true;
        changeLangCheck(language);
        setLocalStorage(language);
        removeKeyboardRow();
        createKeyboardElements(language, caps, shiftButton);
        document.getElementById('ShiftLeft').classList.add('active');
        document.getElementById('ControlLeft').classList.add('active');
        document.getElementById('CapsLock').classList.toggle('active');
      } else {
        language = 'en';
        shiftButton = true;
        changeLangCheck(language);
        setLocalStorage(language);
        removeKeyboardRow();
        createKeyboardElements(language, caps, shiftButton);
        document.getElementById('ShiftLeft').classList.add('active');
        document.getElementById('ControlLeft').classList.add('active');
        document.getElementById('CapsLock').classList.toggle('active');
      }
    } else {
      if (language === 'en') {
        language = 'ru';
        shiftButton = true;
        changeLangCheck(language);
        setLocalStorage(language);
        removeKeyboardRow();
        createKeyboardElements(language, caps, shiftButton);
        document.getElementById('ShiftLeft').classList.add('active');
        document.getElementById('ControlLeft').classList.add('active');
      } else {
        language = 'en';
        shiftButton = true;
        changeLangCheck(language);
        setLocalStorage(language);
        removeKeyboardRow();
        createKeyboardElements(language, caps, shiftButton);
        document.getElementById('ShiftLeft').classList.add('active');
        document.getElementById('ControlLeft').classList.add('active');
      }
    }
  }
});

document.addEventListener ('keyup', (event) => {
  if (event.code === 'Tab' || event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }
  if (event.code !== 'CapsLock') {
    document.getElementById(event.code).classList.remove('active');
  }

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    if (document.getElementById('CapsLock').classList.contains('active')) {
      shiftButton = false;
      removeKeyboardRow();
      createKeyboardElements(language, caps, shiftButton);
      document.getElementById(event.code).classList.remove('active');
      document.getElementById('CapsLock').classList.toggle('active');
    } else {
      shiftButton = false;
      removeKeyboardRow();
      createKeyboardElements(language, caps, shiftButton);
      document.getElementById(event.code).classList.remove('active');
    }
  }
});

export {language,caps, shiftButton}