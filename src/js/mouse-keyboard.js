// Клавиатура виртуальная
import {language, caps, shiftButton} from './main.js';
import {createKeyboardElements, removeKeyboardRow} from './keyboard.js';

let innerText = '';

const keyboardMouse = () => {
  const allButtons = document.querySelectorAll('.keyboard__button');

  allButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    document.getElementById('textArea').focus();
    innerText = innerText + event.target.textContent;
    document.getElementById('textArea').value = innerText;
    })
  });
}










export {keyboardMouse};
