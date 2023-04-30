import {createElements} from './main-elements.js';
import {createKeyboardElements} from './keyboard.js';


createElements();
createKeyboardElements();

const textArea = document.getElementById('textArea');
// const keyboard = document.querySelector('.keyboard');

textArea.addEventListener ('keydown', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
  }
  document.getElementById(event.code).classList.add('active');
})

textArea.addEventListener ('keyup', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
  }
  document.getElementById(event.code).classList.remove('active');
})