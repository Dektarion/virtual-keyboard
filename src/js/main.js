import {createElements} from './main-elements.js';
import {createKeyboardElements} from './keyboard.js';

//Сохранение языка в localStorage

let language = 'en';

const setLocalStorage = () => {
  localStorage.setItem('language', language);
};

window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
  if(localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
};

window.addEventListener('load', getLocalStorage);

// localStorage.clear();


// Создание элементов

createElements();
createKeyboardElements(language);

// Анимация клавиш

document.addEventListener ('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
  }

  if (event.code === 'CapsLock') {
    document.getElementById(event.code).classList.toggle('active');
  } else document.getElementById(event.code).classList.add('active');

  if (event.code === 'ControlLeft' && event.code === 'ShiftLeft') {
    if (language === 'en') {
      language = 'ru';
    } else language = 'ru';
  }
})

document.addEventListener ('keyup', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
  }
  if (event.code !== 'CapsLock') {
    document.getElementById(event.code).classList.remove('active');
  }
})


